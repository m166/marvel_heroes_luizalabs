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
const getCharacter = async (id) => {
  if (!id) throw new Error('É preciso passar um id de herói para realizar a busca');

  const characterPath = '/v1/public/characters/';
  const apikey = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}`;
  const ts = '123';
  const hash = md5(`${ts}${REACT_APP_MARVEL_PRIVATE_KEY}${REACT_APP_MARVEL_PUBLIC_KEY}`);
  // eslint-disable-next-line max-len
  const fullUrl = `${REACT_APP_MARVEL_BASE_URL}${characterPath}${id}${apikey}&ts=${ts}&hash=${hash}`;

  const response = await fetch(fullUrl);
  const content = await response.json();
  const data = content.data;

  return data;
};

export { getCharacter };
