import GphApiClient from 'giphy-js-sdk-core';

const client = GphApiClient('ENTER-API-KEY-HERE');

const searchForGIF = (keyword) => {
  return client.search('gifs', { q: keyword, limit: 100 })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log('error getting gif', err);
    });
};

export default searchForGIF;
