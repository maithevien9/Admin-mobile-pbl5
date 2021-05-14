import React from 'react';
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Dashboard = () => {
  const data = {
    labels: ['7h00', '9h00', '11h00', '13h00', '15h00', '17h00'],
    datasets: [
      {
        data: [30, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Result Days'], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: 'black',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'black',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const dataTable = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
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
              <Text style={styles.textHeadStyleResult}>Result</Text>
              <Text style={styles.textStyleResult}>3021 Result</Text>
            </View>
          </View>
          <View style={styles.lineBottom} />
          <Text style={styles.Seemore}>See more</Text>
        </View>

        <View style={styles.resultWrapper}>
          <View style={styles.resultContainer}>
            <View style={styles.imageContainerStudent}>
              <Image style={styles.tinyLogo} source={icResult} />
            </View>

            <View style={styles.textResultContainer}>
              <Text style={styles.textHeadStyleResult}>Student</Text>
              <Text style={styles.textStyleResult}>1020 Student</Text>
            </View>
          </View>
          <View style={styles.lineBottom} />
          <Text style={styles.Seemore}>See more</Text>
        </View>

        <View style={styles.resultWrapper}>
          <View style={styles.resultContainer}>
            <View style={styles.imageContainerResult}>
              <Image style={styles.tinyLogo} source={icResult} />
            </View>

            <View style={styles.textResultContainer}>
              <Text style={styles.textHeadStyleResult}>Special results</Text>
              <Text style={styles.textStyleResult}>102 Result</Text>
            </View>
          </View>
          <View style={styles.lineBottom} />
          <Text style={styles.Seemore}>See more</Text>
        </View>

        <View style={styles.resultAllWrapper}>
          <View style={styles.headContainer}>
            <Text style={styles.textHeadStyleTable}>Result</Text>
            <Text style={styles.textStyleTable}>Temperature student</Text>
          </View>
          <View style={styles.textHeadTitle}>
            <Text style={styles.textTitleID}>ID</Text>
            <Text style={styles.textTitleName}>Name</Text>
            <Text style={styles.textTitleAge}>Age</Text>
            <Text style={styles.textTitleTemp}>Temperature</Text>
          </View>
          <View style={styles.textHeadTitle}>
            <Text style={styles.textTitleID}>1</Text>
            <Text style={styles.textTitleName}>Tran Van Van Tran</Text>
            <Text style={styles.textTitleAge}>21</Text>
            <Text style={styles.textTitleTemp}>35</Text>
          </View>
          <View style={styles.textHeadTitle}>
            <Text style={styles.textTitleID}>2</Text>
            <Text style={styles.textTitleName}>Vien Mai The</Text>
            <Text style={styles.textTitleAge}>20</Text>
            <Text style={styles.textTitleTemp}>40</Text>
          </View>
        </View>
        <View style={styles.resultAllWrapper}>
          <View style={styles.headTempContainer}>
            <LineChart
              data={data}
              width={windowWidth - 53}
              height={220}
              bezier
              chartConfig={chartConfig}
            />
          </View>
          <Text style={styles.textTempStyleTable}>Result in day</Text>
        </View>

        <View style={styles.resultAllWrapper}>
          <View style={styles.headResultContainer}>
            <BarChart
              data={dataTable}
              width={windowWidth - 52}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
          <Text style={styles.textTempStyleTable}>Result In Year</Text>
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
    height: windowHeight / 3,
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
    backgroundColor: '#A3BCDB',
    height: 70,
    width: 70,
    marginLeft: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  imageContainerStudent: {
    backgroundColor: '#445C2C',
    height: 70,
    width: 70,
    marginLeft: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  imageContainerResult: {
    backgroundColor: '#A76C42',
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
    color: '#E19E2C',
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
    backgroundColor: '#3C4C34',
  },
  headTempContainer: {
    marginTop: 2,
    // height: 260,
    // marginHorizontal: 10,
    marginLeft: 2,
    // paddingTop: 10,
    backgroundColor: '#2C445C',
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
export default Dashboard;
