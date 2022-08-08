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
function getUserMe(id) {
  return connection.query(
    `
  SELECT users.id, users.name AS name, SUM(urls."visitCount") AS "visitCount",
  json_agg(json_build_object('id', urls.id, 'shortUrl', urls."shortUrl",'url', urls.url, 'visitCount', urls."visitCount")) AS "shortenedUrls"
  FROM users 
  JOIN urls ON urls."userId" = users.id
  WHERE users.id = $1
  GROUP BY users.id`,
    [id]
  );
}

function ranking() {
  return connection.query(
    `SELECT users.id AS id, users.name AS name, 
    COUNT(urls."shortUrl") AS "linksCount",
    COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
    FROM users
    LEFT JOIN urls ON users.id = urls."userId"
    GROUP BY users.id  
    ORDER BY "visitCount" DESC LIMIT 10
    `
  );
}
export const userRepository = {
  getUser,
  signUp,
  getUserMe,
  ranking,
};
