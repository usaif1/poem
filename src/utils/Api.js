import axios from 'axios';

export const poems = {
  fetchRandom: `/random/30/author,title,lines`,
  getByAuthor: `/author`,
  getByTitle: `/title`,
};

export const poetryAPI = axios.create({
  baseURL: 'https://poetrydb.org',
});
