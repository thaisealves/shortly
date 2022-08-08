import { nanoid } from "nanoid";
import urlsSchema from "../schemas/urlsSchemas.js";
import urlsRepository from "../repositories/urlsRepository.js";
import jwt from "../token/jwt.js";
export async function shortenMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const verified = jwt.verifyToken(token);
    const { rows: result } = urlsRepository.getAllShortenById(verified.id); // the token may be verified with an user that doesnt exists anymore, checking here
    const { error } = urlsSchema.shortenSchema.validate(req.body);

    if (!verified || !result) {
      return res.status(401).send("Token inválido!");
    }
    if (error) {
      console.log(error);
      return res.status(422).send("Corpo inválido!");
    }

    res.locals.shorten = {
      userId: verified.id,
      shortUrl: nanoid(5),
      url: req.body.url,
    };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}

export async function getShortenMiddleware(req, res, next) {
  const { id } = req.params;

  try {
    const result = await urlsRepository.getShortenById(id);
    if (result.rowCount === 0) {
      return res.status(404).send("ID de url inexistente!");
    }
    res.locals.shorten = {
      id,
      result,
    };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
export async function openShortenMiddleware(req, res, next) {
  const { shortUrl } = req.params;

  try {
    const result = await urlsRepository.openShorten(shortUrl);

    if (result.rowCount === 0) {
      return res.status(404).send("URL inexistente!");
    }
    res.locals.shorten = {
      shortUrl,
      result,
    };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}

export async function deleteShortenMiddleware(req, res, next) {
  const { id } = req.params;
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try {
    const result = await urlsRepository.getAllShortenById(id);
    const verified = jwt.verifyToken(token);
    if (result.rowCount === 0) {
      return res.status(404).send("ID de url inexistente!");
    }
    if (!verified || verified.id !== result.rows[0].userId) {
      return res.status(401).send("Token inválido!");
    }
    res.locals.deleting = {
      id,
    };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
