import HandleAPI from '../HandleAPI';

const getResult = async () => {
  return await HandleAPI.APIGet('Result');
};
const getResultWarning = async () => {
  return await HandleAPI.APIGet('ResultWarning');
};

const getStudents = async () => {
  return await HandleAPI.APIGet('GetUser/2');
};

const getCountResult = async () => {
  return await HandleAPI.APIGet('CountResultInDay');
};

const getResultByUser = async name => {
  return await HandleAPI.APIGet(`GetResultByUser/${name}`);
};

const ResultService = {
  getResult,
  getResultWarning,
  getStudents,
  getCountResult,
  getResultByUser,
};

export default ResultService;
