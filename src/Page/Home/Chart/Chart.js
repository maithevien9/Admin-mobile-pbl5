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

import {BarChart, LineChart} from 'react-native-chart-kit';

import icAI from '../../../Assets/Images/chip.png';
import {useNavigation} from '@react-navigation/native';
import getCountResult from '../../../Config/API/Result/ResultService';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Chart = () => {
  const [chart, setChart] = useState();
  const [day, setDay] = useState();

  useEffect(() => {
    var resultDay = setDate();

    getCountResult.getCountResult().then(res => {
      let data = res.data;
      for (let i = 0; i < resultDay.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (resultDay[i].result.getDate() === data[j].Day) {
            resultDay[i].Counted = data[j].Counted;
          }
        }
      }
      setChart(resultDay);
    });
  }, []);

  const setDate = () => {
    var resultDay = [];
    var Day = [];
    var result = new Date();
    for (let i = 0; i < 7; i++) {
      result.setDate(result.getDate() - i);
      resultDay.push({result: result});
      const month = result.getMonth() + 1;

      Day.push(result.getDate() + '-' + month);
      result = new Date();
    }
    setDay(Day.reverse());

    return resultDay;
  };
  const data = {
    labels: day ? day : [1, 2, 3],
    legend: ['L1', 'L2', 'L3'],
    datasets: [
      {
        data: chart
          ? [
              chart[6].Counted ? chart[6].Counted : 0,
              chart[5].Counted ? chart[5].Counted : 0,
              chart[4].Counted ? chart[4].Counted : 0,
              chart[3].Counted ? chart[3].Counted : 0,
              chart[2].Counted ? chart[2].Counted : 0,
              chart[1].Counted ? chart[1].Counted : 0,
              chart[0].Counted ? chart[0].Counted : 0,
            ]
          : [0, 0, 0, 0, 0, 0, 0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Temperature in Days'], // optional
  };

  return (
    <View style={styles.AuthenticationWrapper}>
      <View style={styles.header}>
        <Image style={styles.tinyLogoIC} source={icAI} />
        <Text style={styles.TextHeader}>Chart</Text>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.headResultContainer}>
          <LineChart
            data={data}
            width={windowWidth - 59}
            height={410}
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>
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
  resultAllWrapper: {
    borderWidth: 0.1,
    marginBottom: 6,
    // marginHorizontal: 15,
    // shadowColor: '#000',
    paddingBottom: 15,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    // elevation: 2,
  },

  headResultContainer: {
    marginTop: 2,
    backgroundColor: '#3C4C34',
  },
  textTempStyleTable: {
    marginTop: 15,
    marginLeft: 15,
    fontFamily: 'sans-serif',
    fontSize: 15,
  },
});
export default Chart;
