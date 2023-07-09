import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';
import Home from './Views/Home'
import Details from './Views/Details';
import Add from './Views/Add';
import Retos from './Views/Retos';
import PlaceRetos from './Views/PlaceRetos';
import DetailsRetos from './Views/DetailsRetos';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="TourPilot"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <Text style={{ color: '#fff', marginRight: 20 }}>Add</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#8e22bb',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          })}
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
        <Stack.Screen
          name="Retos"
          component={Retos}
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
          name="Detalles del Reto"
          component={DetailsRetos}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#8e22bb',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          })}
        />
        <Stack.Screen
          name="Lugares Para el Reto"
          component={PlaceRetos}
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
