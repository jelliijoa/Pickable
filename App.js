import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignInScreen from './android/screens/SignInScreen';
import HomeScreen from './android/screens/HomeScreen';
import LikeScreen from './android/screens/LikeScreen';
import CafeScreen from './android/screens/CafeScreen';
import RestaurantScreen from './android/screens/RestaurantScreen';
import DrinkScreen from './android/screens/DrinkScreen';
import EtcScreen from './android/screens/EtcScreen';
import PlaceDetailScreen from './android/screens/PlaceDetailScreen';
import MapScreen from './android/screens/MapScreen';
import CourseScreen from './android/screens/CourseScreen';
import MyPageScreen from './android/screens/MyPageScreen';
import PlaceScreen from './android/screens/PlaceScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{tabBarActiveTintColor: '#77A5FF'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarIcon: ({color, size}) => (
            <Icon name="place" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={CourseScreen}
        options={{
          title: 'Course',
          tabBarIcon: ({color, size}) => (
            <Icon name="check" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Page"
        component={MyPageScreen}
        options={{
          title: 'My Page',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Like"
          component={LikeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cafe"
          component={CafeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drink"
          component={DrinkScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Etc"
          component={EtcScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Random"
          component={PlaceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={PlaceDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
