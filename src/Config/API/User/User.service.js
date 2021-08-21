import HandleApi from '../HandleAPI';

import AsyncStorage from '@react-native-async-storage/async-storage';

const getMe = async () => {
  var token = await AsyncStorage.getItem('@Login');
  // token = `Bearer ${token}`;
  token = token.slice(1, token.length - 1);
  return await HandleApi.APIGet('getMe', token);
};

const UpdateUser = async body => {
  return await HandleApi.APIPut('ChangInformationStudent-secondary', body);
};
const UserService = {
  getMe,
  UpdateUser,
};

export default UserService;
