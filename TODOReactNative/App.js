import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';         //main

import {Stack} from './src/Navigation';

import {Login} from './src/srceens/Login';
import {Register} from './src/srceens/Register';

import {Todo} from './src/srceens/TODOS';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Todo"   screenOptions={{ headerShown: false,    }}>
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

       
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
