import connection from "../dbStrategy/postgres.js";

function postShorten(body) {
  return connection.query(
    'INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3)',
    [body.userId, body.url, body.shortUrl]
  );
}
function getShortenById(id) {
  return connection.query(
    `SELECT id, "shortUrl", url FROM urls WHERE id = $1`,
    [id]
  );
}
function openShorten(shorten) {
  return connection.query(
    `SELECT id, "shortUrl", url FROM urls WHERE "shortUrl" = $1`,
    [shorten]
  );
}

function updateVisitCount(shorten) {
  return connection.query(
    `UPDATE urls SET "visitCount" = "visitCount"+1 WHERE "shortUrl" = $1`,
    [shorten]
  );
}

export default { postShorten, getShortenById, openShorten, updateVisitCount };
