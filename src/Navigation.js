import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Views/Home'
import Details from './Views/Details';
import Add from './Views/Add';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="TourPilot"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#8e22bb',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: '#8e22bb',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          }}
          />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerStyle: {
              backgroundColor: '#8e22bb',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;
