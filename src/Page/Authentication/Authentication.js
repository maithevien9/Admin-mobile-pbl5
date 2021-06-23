import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icAI from '../../Assets/Images/chip.png';
import {Sae} from 'react-native-textinput-effects';
import icPassWord from '../../Assets/Images/password.png';
import icUser from '../../Assets/Images/user3.png';

import AuthenticationService from '../../Config/API/User/AuthenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Authentication = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  useEffect(() => {
    async function checkLogin() {
      var check = await AsyncStorage.getItem('@Login');
      if (check !== null) {
        navigation.navigate('Home');
      }
    }

    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const HandleLogin = () => {
    if (userName === '' && passWord === '') {
    } else {
      let params = {
        username: userName,
        password: passWord,
      };

      AuthenticationService.postLogin(params)
        .then(res => {
          if (res.dataString === 'success') {
            AsyncStorage.setItem('@Login', JSON.stringify(res.token));
            AuthenticationService.saveDataLogin(res.token);
            navigation.navigate('Home');
          } else {
            Alert.alert(`Notify`, `Invalid password`, [{text: `Confirm`}], {
              cancelable: false,
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    // navigation.navigate('Home');
  };
  return (
    <View style={styles.AuthenticationWrapper}>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={icAI} />
        <Text style={styles.TextHeader}>NIEV Team</Text>
      </View>

      <View style={styles.MainContainer}>
        <View style={styles.inlineInput}>
          <Image source={icUser} style={styles.imageIC} />
          <View>
            <Text style={styles.TextHeaderInput}>Username</Text>
            <TextInput
              style={styles.InputContainer}
              onChangeText={setUserName}
              value={userName}
              fontFamily={'sans-serif'}
            />
          </View>
        </View>

        <View style={styles.inlineInput}>
          <Image source={icPassWord} style={styles.imageIC} />
          <View>
            <Text style={styles.TextHeaderInput}>Password</Text>
            <TextInput
              style={styles.InputContainer}
              onChangeText={setPassWord}
              value={passWord}
              secureTextEntry={true}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.BtnContainer} onPress={HandleLogin}>
          <Text style={styles.TextBtnLogin}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight / 3,
    width: '100%',
    backgroundColor: '#2e475c',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  AuthenticationWrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TextHeaderContainer: {
    alignItems: 'center',
  },
  MainContainer: {
    paddingTop: 100,
    height: (windowHeight * 2) / 3 + 30,
    width: windowWidth - 30,
    borderRadius: 5,
    marginTop: -70,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tinyLogo: {
    height: 80,
    width: 80,
  },
  TextHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 60,
  },
  InputContainer: {
    height: 46,
    width: windowWidth - 110,
    marginTop: 20,
    borderBottomWidth: 2,
    color: '#2e475c',
    borderBottomColor: '#2e475c',
    paddingBottom: -8,
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
  BtnContainer: {
    height: 42,
    width: windowWidth - 80,
    marginTop: 160,
    backgroundColor: '#2e475c',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBtnLogin: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageIC: {
    width: 18,
    height: 18,
    marginRight: 14,
    marginBottom: 7,
    marginLeft: -10,
  },
  inlineInput: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  TextHeaderInput: {
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: -30,
    color: '#6A6A6A',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 10,
  },
});

export default Authentication;
