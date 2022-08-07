import userSchemas from "../schemas/userSchemas.js";
import { userRepository } from "../repositories/userRepository.js";

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
  const { email } = req.body;
  const { error } = userSchemas.signInSchema.validate(req.body);
  try {
    const getEmail = await userRepository.getUser(email);
    if (getEmail.rowCount === 0) {
      return res.status(409).send("E-mail não cadastrado, usuário não existe!");
    }
    if (error) {
      console.log(error);
      return res.status(422).send("E-mail ou senha incorretos!");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
