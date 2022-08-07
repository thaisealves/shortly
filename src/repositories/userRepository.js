import connection from "../dbStrategy/postgres.js";

function getUser(email) {
  return connection.query(`SELECT * FROM users WHERE email = $1`, [email]);
}

function signUp(body) {
  return connection.query(
    `INSERT INTO users (name, email, password, "confirmPassword") VALUES ($1, $2, $3, $4)`,
    [body.name, body.email, body.password, body.confirmPassword]
  );
}

export const userRepository = {
  getUser,
  signUp,
};
