import axios from 'axios';

export const poems = {
  fetchRandomPoems: `/random/30/author,title,lines`,
  fetchRandomAuthors: `/random/100/author`,
  getByAuthor: `/author`,
  getByTitle: `/title`,
};

export const poetryAPI = axios.create({
  baseURL: 'https://poetrydb.org',
});
