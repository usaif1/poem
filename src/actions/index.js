//imports
import 'react-native-get-random-values';
import {v4 as uuidv4, v4} from 'uuid';
import {poetryAPI, poems} from '../utils/Api';

//.....................................POEM ACTIONS.....................................//

export const fetchPoems = async (
  setPoems,
  setLoading,
  poemstate,
  authorName,
) => {
  let url = authorName
    ? `${poems.getByAuthor}/${authorName}`
    : poems.fetchRandomPoems;

  try {
    const res = await poetryAPI.get(url);
    setPoems(res.data);
    if (poemstate.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  } catch (err) {
    alert('Something went wrong');
    alert(err);
  }
};

export const getPoemsByTitle = async (name, setPoems) => {
  try {
    const res = await poetryAPI.get(`${poems.getByTitle}/${name}`);
    setPoems(res.data);
    return res.data;
  } catch (err) {
    alert('Something went wrong!');
    alert(err);
  }
};

//.....................................AUTHOR ACTIONS.....................................//

export const fetchAuthors = async (setAuthors) => {
  try {
    const res = await poetryAPI.get(`${poems.getByAuthor}`);

    const authors = res.data.authors.map((author) => {
      return {
        id: uuidv4(),
        author: author,
      };
    });

    setAuthors(authors);
  } catch (err) {
    alert('Something went wrong');
    alert(err);
  }
};

export const fetchAuthorsByName = async (authorName, setAuthors) => {
  try {
    const res = await poetryAPI.get(
      `${poems.getByAuthor}/${authorName}/author`,
    );

    let authors = new Set(
      res.data.map((author) => {
        return author.author;
      }),
    );

    authors = Array.from(authors);

    setAuthors(
      authors.map((author) => {
        return {
          id: uuidv4(),
          author: author,
        };
      }),
    );
  } catch (error) {}
};
