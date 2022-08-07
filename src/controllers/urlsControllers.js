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
  const { shorten } = res.locals;
  try {
    return res.status(200).send(shorten.result.rows[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function openShorten(req, res) {
  const { shorten } = res.locals;
  try {
    await urlsRepository.updateVisitCount(shorten.shortUrl);
    return res.redirect(shorten.result.rows[0].url);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function deleteShorten(req, res) {
  const { deleting } = res.locals;
  try {
    await urlsRepository.deletingShorten(deleting.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
