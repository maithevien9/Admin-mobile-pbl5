let dataLogin = [];
const ResultReducer = (state = dataLogin, action) => {
  if (action.type === 'setResult') return action.data;
  return state;
};
export default ResultReducer;
