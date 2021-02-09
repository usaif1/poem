//imports
import {poetryAPI, poems} from '../utils/Api';

export const fetchPoems = async (setPoems) => {
  try {
    const res = await poetryAPI.get(poems.fetchRandom);
    setPoems(res.data);
  } catch (error) {
    alert('Something went wrong');
    alert(error);
  }
};
