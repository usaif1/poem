//imports
import {poetryAPI, poems} from '../utils/Api';

export const fetchPoems = async (
  setPoems,
  setRefreshing,
  setLoading,
  poemstate,
) => {
  try {
    const res = await poetryAPI.get(poems.fetchRandom);
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
