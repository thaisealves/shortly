import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository.js";
import jwt from "../token/jwt.js";
export async function signUp(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  const passwordHash = bcrypt.hashSync(password, 10);
  const confirmPasswordHash = bcrypt.hashSync(confirmPassword, 10);

  const body = {
    name,
    email,
    password: passwordHash,
    confirmPassword: confirmPasswordHash,
  };

  try {
    await userRepository.signUp(body);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const { user } = res.locals;
  const token = jwt.createToken({
    id: user.id,
    email: user.email,
    password: user.password,
  });
  const data = {
    name: user.name,
    token: `Bearer ${token}`,
  };
  return res.status(200).send(data);
}
export async function getUser(req, res) {
  const { id } = res.locals;
  try {
    const { rows: result } = await userRepository.getUserMe(id);
    res.status(200).send(result[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function ranking(req, res) {
  try {
    const { rows: result } = await userRepository.ranking();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
