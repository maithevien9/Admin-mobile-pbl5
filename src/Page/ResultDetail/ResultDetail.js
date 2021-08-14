import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import icAI from '../../Assets/Images/chip.png';

import _ from 'lodash';
import ResultService from '../../Config/API/Result/ResultService';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ResultDetail = ({route}) => {
  const [results, setResults] = useState(route.params.data);
  const convertDate = date => {
    var ts = new Date(date);
    ts.setHours(ts.getHours() + 7);
    return ts.toUTCString();
  };

  const handleSearch = async text => {
    ResultService.getResultByUser(text).then(res => {
      setResults(res.data);
    });
  };

  return (
    <View style={styles.AuthenticationWrapper}>
      <View style={styles.header}>
        <Image style={styles.tinyLogoIC} source={icAI} />
        <Text style={styles.TextHeader}>Results</Text>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.resultAllWrapper}>
          <View style={styles.headContainer}>
            <Text style={styles.textHeadStyleTable}>Result</Text>
            <Text style={styles.textStyleTable}>{route.params.title}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TextInput
              style={styles.InputContainer}
              onChangeText={handleSearch}
              placeholderTextColor="#666666"
              placeholder="Search result by Name"
              fontFamily={'sans-serif'}
            />
          </View>
          <View style={styles.textHeadTitle}>
            <Text style={styles.textTitleID}>STT</Text>
            <Text style={styles.textTitleName}>Name</Text>
            <Text style={styles.textTitleTemp}>Temp</Text>
            <Text style={styles.textTitleAge}>Time</Text>

            {/* createAtTime */}
          </View>
          <ScrollView>
            {results
              ? results.map((result, index) => (
                  <View style={styles.textHeadTitle} key={index}>
                    <Text style={styles.textTitleID}>{index}</Text>
                    <Text style={styles.textTitleName}>{result.NAME}</Text>
                    <Text style={styles.textTitleTemp}>
                      {result.temperature}
                    </Text>
                    <Text style={styles.textTitleAge}>
                      {/* {moment(result.createAtTime).format(
                        'DD MM YYYY hh:mm:ss',
                      )} */}

                      {convertDate(result.createAtTime)}
                    </Text>
                  </View>
                ))
              : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleTable: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: 'white',
  },
  textHeadTitle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginHorizontal: 10,
    marginTop: 20,
  },
  textHeadStyleTable: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  headContainer: {
    marginTop: 10,
    height: 60,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#2e475c',
    borderRadius: 10,
  },
  wrapper: {
    flex: 1,
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
  icSearch: {
    height: 20,
    width: 20,
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
    height: (windowHeight * 2) / 2 - 130,
    width: windowWidth - 20,
    borderRadius: 5,
    marginTop: -70,
    padding: 20,
    paddingBottom: 90,

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
  InputContainer: {
    height: 40,
    width: '95%',
    margin: 10,
    justifyContent: 'flex-end',
    paddingBottom: -2,
    borderBottomWidth: 2,
    color: '#2e475c',
    borderBottomColor: '#2e475c',
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
  resultAllWrapper: {
    marginBottom: 6,
    paddingBottom: 15,
  },
  textTitleID: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '11%',
    textAlign: 'center',
  },
  textTitleName: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '40%',
    textAlign: 'center',
  },
  textTitleAge: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '35%',
    textAlign: 'center',
    paddingLeft: 20,
  },
  textTitleTemp: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    width: '15%',
    textAlign: 'center',
  },
});

export default ResultDetail;
