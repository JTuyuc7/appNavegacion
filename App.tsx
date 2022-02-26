import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './src/navigator/Stack.Navigator';
import MenuLateral from './src/navigator/MenuLateral';

const App = () => {

  return(
    <NavigationContainer>
        {/*<MyStackNavigator />*/}
        {<MenuLateral />}
    </NavigationContainer>
  )
}

export default App;