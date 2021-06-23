import React, {useState, useEffect} from 'react';
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

import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ResultService from '../../../Config/API/Result/ResultService';
import {setDataResult} from '../../../Config/Redux/Action';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Dashboard = props => {
  const navigation = useNavigation();
  const [result, setResult] = useState();
  const [resultBack, setBackResult] = useState();
  const [ResultWarning, setResultWarning] = useState();
  const [student, setStudent] = useState();

  useEffect(() => {
    async function getData() {
      ResultService.getResult().then(res => {
        if (res.dataString === 'Success') {
          setResult(res.data);
          setBackResult(res.data);
          props.setDataResult(res.data);
        }
      });

      ResultService.getResultWarning().then(res => {
        if (res.dataString === 'Success') {
          setResultWarning(res.data);
        }
      });

      ResultService.getStudents().then(res => {
        if (res.dataString === 'Success') {
          setStudent(res.data);
        }
      });
    }

    getData();
  }, [student]);

  const handleTranferPage = (data, title) => {
    navigation.navigate('ResultDetail', {data, title});
  };

  const handleTranferPageGetStudent = (data, title) => {
    navigation.navigate('GetStudents', {data, title});
  };

  return (
    <View style={styles.AuthenticationWrapper}>
      <View style={styles.header}>
        <Image style={styles.tinyLogoIC} source={icAI} />
        <Text style={styles.TextHeader}>Dashboard</Text>
      </View>

      <ScrollView style={styles.MainContainer}>
        <View style={styles.resultWrapper}>
          <View style={styles.resultContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.tinyLogo} source={icResult} />
            </View>

            <View style={styles.textResultContainer}>
              <Text style={styles.textHeadStyleResult}>Results</Text>
              <Text style={styles.textStyleResult}>
                {result ? result.length : null}
              </Text>
            </View>
          </View>
          <View style={styles.lineBottom} />
          <TouchableOpacity
            onPress={() =>
              handleTranferPage(result, 'Temperature measurement results')
            }>
            <Text style={styles.Seemore}>See more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultWrapper}>
          <View style={styles.resultContainer}>
            <View style={styles.imageContainerStudent}>
              <Image style={styles.tinyLogo} source={icResult} />
            </View>

            <View style={styles.textResultContainer}>
              <Text style={styles.textHeadStyleResult}>Students</Text>
              <Text style={styles.textStyleResult}>
                {student ? student.length : null}
              </Text>
            </View>
          </View>
          <View style={styles.lineBottom} />
          <TouchableOpacity
            onPress={() =>
              handleTranferPageGetStudent(student, 'Student Results')
            }>
            <Text style={styles.Seemore}>See more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultWrapper}>
          <View style={styles.resultContainer}>
            <View style={styles.imageContainerResult}>
              <Image style={styles.tinyLogo} source={icResult} />
            </View>

            <View style={styles.textResultContainer}>
              <Text style={styles.textHeadStyleResult}>Special results</Text>
              <Text style={styles.textStyleResult}>
                {ResultWarning ? ResultWarning.length : null}
              </Text>
            </View>
          </View>
          <View style={styles.lineBottom} />
          <TouchableOpacity
            onPress={() => handleTranferPage(ResultWarning, 'Special results')}>
            <Text style={styles.Seemore}>See more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
  resultWrapper: {
    height: 125,
    borderWidth: 0.1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 6,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  resultAllWrapper: {
    // height: 125,
    borderWidth: 0.1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 6,
    marginHorizontal: 15,
    shadowColor: '#000',
    paddingBottom: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  lineBottom: {
    marginTop: 10,
    marginHorizontal: 25,
    borderBottomWidth: 0.7,
    borderBottomColor: '#C0C0C0',
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  imageContainer: {
    backgroundColor: '#2e475c',
    height: 70,
    width: 70,
    marginLeft: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  imageContainerStudent: {
    backgroundColor: '#2e475c',
    height: 70,
    width: 70,
    marginLeft: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  imageContainerResult: {
    backgroundColor: '#2e475c',
    height: 70,
    width: 70,
    marginLeft: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
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
    paddingTop: 15,
    // height: (windowHeight * 2) / 3 - 20,
    width: windowWidth - 20,
    borderRadius: 5,
    marginTop: -70,
    // alignItems: 'center',
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
  tinyLogo: {
    height: 30,
    width: 30,
  },
  TextHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 24,
    marginLeft: 30,
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
  textResultContainer: {
    marginRight: 20,
    alignItems: 'flex-end',
    marginTop: 10,
  },
  textStyleResult: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    marginTop: 5,
  },
  textHeadStyleResult: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
  },
  Seemore: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 20,
    marginTop: 5,
    color: '#000000',
  },
  tinyLogoIC: {
    height: 40,
    width: 40,
  },
  headContainer: {
    marginTop: 10,
    height: 60,
    marginHorizontal: 10,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#2e475c',
  },
  headTempContainer: {
    marginTop: 2,
    // height: 260,
    // marginHorizontal: 10,
    marginLeft: 2,
    // paddingTop: 10,
    backgroundColor: '#2e475c',
  },
  headResultContainer: {
    // marginHorizontal: 10,
    // paddingLeft: 10,
    marginTop: 2,
    backgroundColor: '#3C4C34',
  },
  textHeadStyleTable: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  textTempStyleTable: {
    marginTop: 15,
    marginLeft: 15,
    fontFamily: 'sans-serif',
    // fontWeight: 'bold',
    fontSize: 15,
  },

  textStyleTable: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: 'white',
  },
  textHeadTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginHorizontal: 10,
    marginTop: 20,
  },
  textTitleID: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '15%',
  },
  textTitleName: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '40%',
  },
  textTitleAge: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '15%',
  },
  textTitleTemp: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '25%',
  },
});
export default connect(null, {setDataResult})(Dashboard);
