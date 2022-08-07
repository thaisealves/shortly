import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository.js";

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
