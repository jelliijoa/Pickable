import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import SignInScreen from './android/screens/SignInScreen';
import HomeScreen from './android/screens/HomeScreen';
import LikeScreen from './android/screens/LikeScreen'
import PlaceScreen from './android/screens/PlaceScreen';
import MapScreen from './android/screens/MapScreen';
import CourseScreen from './android/screens/CourseScreen';
import MyPageScreen from './android/screens/MyPageScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main(){
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarActiveTintColot: '#fd8c00'}}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
            title: 'Home',
            tabBarIcon: ({color, size}) => (
                <Icon name="Home" color={color} size={size} />
            ),
            headerShown: false
            }}/>
            <Tab.Screen name="Map" component={MapScreen} options={{
            title: 'Map',
            tabBarIcon: ({color, size}) => (
                <Icon name="Place" color={color} size={size} />
            ),
            }}/>
            <Tab.Screen name="Course" component={CourseScreen} options={{
            title: 'Course',
            tabBarIcon: ({color, size}) => (
                <Icon name="Check" color={color} size={size} />
            ),
            }}/>
            <Tab.Screen name="My Page" component={MyPageScreen} options={{
            title: 'My Page',
            tabBarIcon: ({color, size}) => (
                <Icon name="Person" color={color} size={size} />
            ),
            }}/>
      </Tab.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Sign In"
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
        />
        <Stack.Screen
          name="Cafe"
          component={PlaceScreen}
        />
        <Stack.Screen
          name="Restaurant"
          component={PlaceScreen}
        />
        <Stack.Screen
          name="Drink"
          component={PlaceScreen}
        />
        <Stack.Screen
          name="Etc"
          component={PlaceScreen}
        />
        <Stack.Screen
          name="Random"
          component={PlaceScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
