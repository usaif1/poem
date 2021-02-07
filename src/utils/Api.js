import axios from 'axios';

export const poetry = {
  fetchRandom: `/random/10/author,title,lines`,
  getByAuthor: `/author,poemcount/`,
  getByTitle: `/title,poemcount/`,
};

export const poetryAPI = axios.create({
  baseURL: 'https://poetrydb.org',
});
