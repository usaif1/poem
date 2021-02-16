//imports
import 'react-native-get-random-values';
import {v4 as uuidv4, v4} from 'uuid';
import {poetryAPI, poems} from '../utils/Api';

//.....................................POEM ACTIONS.....................................//

export const fetchPoems = async (
  setPoems,
  setRefreshing,
  setLoading,
  poemstate,
) => {
  try {
    const res = await poetryAPI.get(poems.fetchRandomPoems);
    setPoems(res.data);
    setRefreshing(false);
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
    const res = await poetryAPI.get(poems.fetchRandomAuthors);

    let authors = new Set(res.data.map((data) => data.author));

    authors = Array.from(authors);

    setAuthors(
      authors.map((author) => {
        return {
          id: uuidv4(),
          author: author,
        };
      }),
    );
  } catch (err) {
    alert('Something went wrong');
    alert(err);
  }
};
