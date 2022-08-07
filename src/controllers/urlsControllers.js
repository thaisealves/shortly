import urlsRepository from "../repositories/urlsRepository.js";
export async function postShorten(req, res) {
  const { shorten } = res.locals;

  try {
    await urlsRepository.postShorten(shorten);
    const body = {
      shortUrl: shorten.shortUrl,
    };
    res.status(201).send(body);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getShortenById(req, res) {
  const { id } = req.params;
  const result = await urlsRepository.getShortenById(id);
  if (result.rowCount === 0) {
    return res.status(404).send("ID de url inexistente!");
  } else {
    return res.status(200).send(result.rows[0]);
  }
}
