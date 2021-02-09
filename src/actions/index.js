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
  } catch (error) {
    alert('Something went wrong');
    alert(error);
  }
};
