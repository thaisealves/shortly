import userSchemas from "../schemas/userSchemas.js";
import  userRepository  from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "../token/jwt.js";

export async function signUpMiddleware(req, res, next) {
  const { email } = req.body;
  const { error } = userSchemas.signUpSchema.validate(req.body);
  try {
    const getEmail = await userRepository.getUser(email);
    if (getEmail.rowCount !== 0) {
      return res.status(409).send("Email já cadastrado!");
    }
    if (error) {
      console.log(error);
      return res.status(422).send(`Erro ao enviar usuário: ${error.message}`);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
  next();
}

export async function signInMiddleware(req, res, next) {
  const { email, password } = req.body;
  const { error } = userSchemas.signInSchema.validate(req.body);
  try {
    const getEmail = await userRepository.getUser(email);
    if (getEmail.rowCount === 0) {
      return res.status(401).send("E-mail não cadastrado!");
    }
    if (!bcrypt.compareSync(password, getEmail.rows[0].password)) {
      console.log(getEmail);
      return res.status(401).send("E-mail ou senha incorretos!");
    }
    if (error) {
      console.log(error);
      return res.status(422).send("Dados incorretos para o login");
    }
    res.locals.user = getEmail.rows[0];
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}
export async function getUserMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  try {
    const verified = jwt.verifyToken(token);
    const { rows: result } = await userRepository.getUser(verified.email);
    if (!verified) {
      return res.status(401).sen("Token inválido!");
    }
    if (result.length===0) {
      return res.status(404).send("Usuário não existe!");
    }
    res.locals.id = verified.id;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}
