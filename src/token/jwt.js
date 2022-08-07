import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.SECRET_KEY;
const EXP_TIME = process.env.TOKEN_TIME;

const createToken = (data) => {
  return jwt.sign(data, SECRET, { expiresIn: EXP_TIME });
};

const verifyToken = (data) => {
  try {
    const dataToken = jwt.verify(data, SECRET);
    return dataToken;
  } catch (error) {
    console.log(err);
    return null;
  }
};
export default {
  createToken,
  verifyToken,
};
