import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import icAI from '../../../Assets/Images/chip.png';
import icResult from '../../../Assets/Images/notepad.png';
import AuthenticationService from '../../../Config/API/User/AuthenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import UserService from '../../../Config/API/User/User.service';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Contact = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();

  useEffect(() => {
    UserService.getMe().then(res => {
      if (res.dataString === 'Success') {
        setUser(res.data[0]);
      }
    });
  }, [user]);
  const handleLogOut = async () => {
    const data = '';
    await AsyncStorage.setItem('@Login', data);
    navigation.navigate('Authentication');
  };

  const CheckRoll = roll => {
    if (roll === 1) {
      return 'user';
    }
    if (roll === 2) {
      return 'admin';
    }
  };

  const CheckGender = Gender => {
    if (Gender === 1) {
      return 'MALE';
    }
    if (Gender === 2) {
      return 'FEMALE';
    }
  };

  const handleUpdate = () => {
    const {address, NAME, sex, age, id, idRole} = user;
    navigation.navigate('UpdateInformation', {
      address,
      NAME,
      sex,
      age,
      id,
      idRole,
    });
  };
  return (
    <View style={styles.AuthenticationWrapper}>
      <View style={styles.header}>
        <Image style={styles.tinyLogoIC} source={icAI} />
        <Text style={styles.TextHeader}>Contact</Text>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.Information}>
          <Text style={styles.titleInformation}>INFORMATION</Text>
          <View style={styles.dataLine}>
            <Text>Name</Text>
            <Text>{user ? user.NAME : null}</Text>
          </View>
          <View style={styles.dataLine}>
            <Text>Age</Text>
            <Text>{user ? user.age : null}</Text>
          </View>

          <View style={styles.dataLine}>
            <Text>Gender</Text>
            <Text>{user ? CheckGender(user.sex) : null}</Text>
          </View>

          <View style={styles.dataLine}>
            <Text>Role</Text>
            <Text>{user ? CheckRoll(user.idRole) : null}</Text>
          </View>

          <View style={styles.dataLine}>
            <Text>Address</Text>
            <Text>{user ? user.address : null}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.OptionsContainer}
          onPress={handleUpdate}>
          <Text style={styles.textOption}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.OptionsContainer}
          onPress={handleLogOut}>
          <Text style={styles.textOption}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: 'yellow',
    padding: 10,
  },
  OptionsContainer: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AuthenticationWrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 70,
    height: windowHeight / 4,
    width: '100%',
    backgroundColor: '#2e475c',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tinyLogoIC: {
    height: 40,
    width: 40,
  },
  TextHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 24,
    marginLeft: 30,
  },
  MainContainer: {
    paddingTop: 15,
    height: (windowHeight * 2) / 2 - 180,
    width: windowWidth - 20,
    borderRadius: 5,
    marginTop: -70,
    padding: 20,
    marginBottom: 7,
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
  textOption: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: 'bold',
  },
  Information: {
    height: 370,
  },
  titleInformation: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dataLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
export default Contact;
