import { nanoid } from "nanoid";
import urlsSchema from "../schemas/urlsSchemas.js";
import jwt from "../token/jwt.js";
export async function shortenMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const verified = jwt.verifyToken(token);
    const { error } = urlsSchema.shortenSchema.validate(req.body);
    if (!verified) {
      return res.status(401).send("Token inválido!");
    }
    if (error) {
      console.log(error);
      return res.status(422).send("Corpo inválido!");
    }

    res
      .status(201)
      .send({ userId: verified.id, shortUrl: nanoid(5), url: req.body.url });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
