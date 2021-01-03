import axios from '../axios';

const getCategories = async () => {
  const { data } = await axios.get('/category');
  return data;
};
const getStandingsOfSeason = async ({ queryKey: [_key, currentID] }) => {
  if (currentID) {
    const { data } = await axios.get(`/standings/${currentID}`);
    return data;
  }
};
const getGrandPrixesOfSeason = async ({ queryKey: [_key, currSesId] }) => {
  if (currSesId) {
    const { data } = await axios.get(`/season/${currSesId}`);
    return data;
  }
};
const getRandomResults = async (ses_id) => {
  if (ses_id) {
    const { data } = await axios.get(`/results/${ses_id}`);
    return data;
  }
};
export {
  getCategories,
  getGrandPrixesOfSeason,
  getStandingsOfSeason,
  getRandomResults,
};
