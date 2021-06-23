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
import {useNavigation} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';

import icAI from '../../Assets/Images/chip.png';
import icResult from '../../Assets/Images/notepad.png';
import AuthenticationService from '../../Config/API/User/AuthenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from '../../Config/API/User/User.service';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UpdateInformation = ({route}) => {
  const navigation = useNavigation();
  const {address, NAME, sex, age, id, idRole} = route.params;

  const [nameInput, setName] = useState(NAME);
  const [ageInput, setAge] = useState(age.toString() || '20');
  const [addressInput, setAddress] = useState(address);
  const [checked, setChecked] = useState(1);

  const CheckRoll = roll => {
    if (roll === 2) {
      return 'USER';
    }
    if (roll === 1) {
      return 'ADMIN';
    }
  };

  const handleUpdate = () => {
    UserService.UpdateUser({
      idStudent: id,
      name: nameInput,
      age: ageInput,
      address: addressInput,
      sex: checked,
    }).then(res => {
      navigation.navigate('Home');
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
            <TextInput
              style={styles.InputContainer}
              onChangeText={setName}
              value={nameInput}
              fontFamily={'sans-serif'}
            />
          </View>
          <View style={styles.dataLine}>
            <Text>Age</Text>
            <TextInput
              style={styles.InputContainer}
              onChangeText={setAge}
              value={ageInput}
              fontFamily={'sans-serif'}
            />
          </View>

          <View style={styles.dataLine}>
            <Text>Gender</Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                width: 150,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  width: 75,
                  alignItems: 'center',
                }}>
                <Text>MALE</Text>
                <RadioButton
                  value="MALE"
                  status={checked === 1 ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(1)}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  width: 75,
                }}>
                <Text>FEMALE</Text>
                <RadioButton
                  value="FEMALE"
                  status={checked === 2 ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(2)}
                />
              </View>
            </View>
          </View>

          <View style={styles.dataLine}>
            <Text>Role</Text>
            <Text style={styles.textRole}>{CheckRoll(idRole)}</Text>
          </View>

          <View style={styles.dataLine}>
            <Text>Address</Text>
            <TextInput
              style={styles.InputContainer}
              onChangeText={setAddress}
              value={addressInput}
              fontFamily={'sans-serif'}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.OptionsContainer}
          onPress={handleUpdate}>
          <Text style={styles.textOption}>Save</Text>
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
    marginTop: 65,
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
    alignItems: 'center',
    marginTop: 20,
  },
  InputContainer: {
    height: 30,
    width: 150,
    justifyContent: 'flex-end',
    paddingBottom: -8,
    borderBottomWidth: 2,
    color: '#2e475c',
    borderBottomColor: '#2e475c',
    paddingBottom: 4,
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
  textRole: {
    width: 150,
  },
});
export default UpdateInformation;
