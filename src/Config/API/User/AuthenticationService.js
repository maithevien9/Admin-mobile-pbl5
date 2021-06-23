import HandleApi from '../HandleAPI';

import AsyncStorage from '@react-native-async-storage/async-storage';

const postRegister = async params => {
  return await HandleApi.APIPost('Register', params);
};

const postLogin = async params => {
  return await HandleApi.APIPost('Login', params);
};
const saveDataLogin = async data => {
  await AsyncStorage.setItem('@Login', JSON.stringify(data));
};

const clearDataLogin = async () => {
  await AsyncStorage.setItem('@Login', null);
};

const isLogin = async () => {
  const temp = await AsyncStorage.getItem('@Login');
  return temp;
};

const AuthenticationService = {
  postRegister,
  postLogin,
  saveDataLogin,
  clearDataLogin,
  isLogin,
};

export default AuthenticationService;
