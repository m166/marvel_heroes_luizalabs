import config from 'config';
import md5 from 'md5';

const {
  REACT_APP_MARVEL_BASE_URL,
  REACT_APP_MARVEL_PUBLIC_KEY,
  REACT_APP_MARVEL_PRIVATE_KEY,
} = config;

/*
 * API Docs
 * https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
 */
const getComics = async (id, query) => {
  if (!id) throw new Error('É preciso passar um id de herói para realizar a busca');

  const comicPath = `/v1/public/characters/${id}/comics`;
  const apikey = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}`;
  const queryParameters = query ? query : '';

  const ts = '123';
  const hash = md5(`${ts}${REACT_APP_MARVEL_PRIVATE_KEY}${REACT_APP_MARVEL_PUBLIC_KEY}`);
  // eslint-disable-next-line max-len
  const fullUrl = `${REACT_APP_MARVEL_BASE_URL}${comicPath}${apikey}&ts=${ts}&hash=${hash}&${queryParameters}`;

  const response = await fetch(fullUrl);
  const content = await response.json();
  const data = content.data;

  return data;
};

export { getComics };
