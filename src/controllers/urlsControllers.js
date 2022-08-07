import urlsRepository from "../repositories/urlsRepository.js";
export async function postShorten(req, res) {
  const { shorten } = res.locals;

  try {
    await urlsRepository.postShorten(shorten);
    res.status(201).send(`shortUrl: ${shorten.shortUrl}`);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
