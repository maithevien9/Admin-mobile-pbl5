import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icAI from '../../Assets/Images/chip.png';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Authentication = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const HandleLogin = () => {
    navigation.replace('Home');
  };
  return (
    <View style={styles.AuthenticationWrapper}>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={icAI} />
        <Text style={styles.TextHeader}>NIEV Team</Text>
      </View>

      <View style={styles.MainContainer}>
        <TextInput
          style={styles.InputContainer}
          onChangeText={setUserName}
          value={userName}
          placeholder="UserName"
          placeholderTextColor="#BBBBBB"
        />
        <TextInput
          style={styles.InputContainer}
          onChangeText={setPassWord}
          placeholder="Password"
          placeholderTextColor="#BBBBBB"
          value={passWord}
        />
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
    width: windowWidth - 80,
    marginTop: 20,
    borderBottomWidth: 2,
    color: '#2e475c',
    borderBottomColor: '#2e475c',
    paddingBottom: -4,

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
});

export default Authentication;
