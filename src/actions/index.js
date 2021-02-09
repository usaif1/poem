//imports
import {poetryAPI, poems} from '../utils/Api';

export const fetchPoems = async (setPoems, setRefreshing, setLoading) => {
  try {
    const res = await poetryAPI.get(poems.fetchRandom);
    setPoems(res.data);
    setRefreshing(false);
    setLoading(false);
  } catch (error) {
    alert('Something went wrong');
    alert(error);
  }
};
