import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import store from './src/Config/Redux';
import Authentication from './src/Page/Authentication/Authentication';
import Home from './src/Page/Home/Home';
import ResultDetail from './src/Page/ResultDetail/ResultDetail';
import GetStudents from './src/Page/GetStudents/GetStudents';
import StudentDetail from './src/Page/StudentDetail/StudentDetail';
import UpdateInformation from './src/Page/UpdateInformation/UpdateInformation';

console.disableYellowBox = true;

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ResultDetail" component={ResultDetail} />
          <Stack.Screen name="GetStudents" component={GetStudents} />
          <Stack.Screen name="StudentDetail" component={StudentDetail} />
          <Stack.Screen
            name="UpdateInformation"
            component={UpdateInformation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
