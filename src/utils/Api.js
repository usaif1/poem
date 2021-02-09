import axios from 'axios';

export const poems = {
  fetchRandom: `/random/20/author,title,lines`,
  getByAuthor: `/author,poemcount/`,
  getByTitle: `/title,poemcount/`,
};

export const poetryAPI = axios.create({
  baseURL: 'https://poetrydb.org',
});
