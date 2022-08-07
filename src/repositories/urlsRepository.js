import connection from "../dbStrategy/postgres.js";

function postShorten(body) {
  return connection.query(
    'INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3)',
    [body.userId, body.url, body.shortUrl]
  );
}

export default { postShorten };
