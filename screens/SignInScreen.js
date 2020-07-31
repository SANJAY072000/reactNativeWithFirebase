import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,
  KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import {Form, Item, Input, Label, Button} from 'native-base';


export default class SignInScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      pass:''
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to SignInScreen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});
