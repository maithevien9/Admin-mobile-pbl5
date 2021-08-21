import HandleAPI from '../HandleAPI';

const getResult = async () => {
  return await HandleAPI.APIGet('Result-secondary');
};
const getResultWarning = async () => {
  return await HandleAPI.APIGet('ResultWarning-secondary');
};

const getStudents = async () => {
  return await HandleAPI.APIGet('GetUser/1');
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
