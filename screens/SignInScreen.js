import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,
  KeyboardAvoidingView, Image, TouchableOpacity, Alert } from 'react-native';
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

  signInUser=(email,pass)=>{
    firebase.auth().signInWithEmailAndPassword(email,pass)
    .then(res=>console.log('Signed In'))
    .catch(err=>Alert.alert(err.message));
  }

  render(){
    return (
      <KeyboardAvoidingView style={styles.container}
        behavior='position' enabled>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')}/>
          <Text>Learn To Code</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCorrect={false} autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={email=>this.setState({email})}/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} autoCorrect={false} autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={pass=>this.setState({pass})}/>
          </Item>
          <Button style={styles.button} full rounded onPress={()=>{
            this.signInUser(this.state.email,this.state.pass);
          }}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Button>
        </Form>
        <View style={styles.footer}><Text>Or</Text>
        <TouchableOpacity onPress={()=>
            this.props.navigation.navigate('SignUpScreen')}>
        <Text>Create a new account?</Text>
      </TouchableOpacity></View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
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
