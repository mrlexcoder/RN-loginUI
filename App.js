import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginUi from './components/LoginUi';
import SignUpUi from './components/SignUpUi';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginUi} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={SignUpUi} options={{ title: 'Sign Up' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
