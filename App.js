import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';



// var firebaseConfig = {
//     apiKey: "AIzaSyCW8qayppSOogT1LolD6EnNzYR3NheAS9Q",
//     authDomain: "rnbootcamp-a04ae.firebaseapp.com",
//     databaseURL: "https://rnbootcamp-a04ae.firebaseio.com",
//     projectId: "rnbootcamp-a04ae",
//     storageBucket: "rnbootcamp-a04ae.appspot.com",
//     messagingSenderId: "1068100926425",
//     appId: "1:1068100926425:web:7be56739506bcfe99fb7c8",
//     measurementId: "G-8V24XYCJTJ"
//   };
// firebase.initializeApp(firebaseConfig);
const Stack=createStackNavigator();

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoadingScreen'
          screenOptions={{
            headerStyle:{
              backgroundColor:'#EA7773'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
              textAlign:'center'
            }
          }}>
          <Stack.Screen name='HomeScreen' component={HomeScreen}
            options={{
              title:'Home'
            }}/>
          <Stack.Screen name='SignUpScreen' component={SignUpScreen}
            options={{
              title:'Sign Up'
            }}/>
          <Stack.Screen name='SignInScreen' component={SignInScreen}
            options={{
              title:'Sign In'
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
