import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from 'native-base';
import * as firebase from 'firebase';


export default class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      name:'',
      email:''
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(res=>{
      if(res)this.setState({
        name:res.displayName,
        email:res.email
      });
      else this.props.navigation.replace('SignInScreen');
    });
  }

  signOutUser=()=>{
    firebase.auth()
    .signOut()
    .then(()=>console.log('Signd Out'))
    .catch(err=>Alert.alert(err.message));
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')}/>
          <Text>Learn To Code</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Hey {this.state.name}</Text>
          <Text>You are signed in as: {this.state.email}</Text>
        </View>
        <Button style={styles.button} full rounded success
          onPress={()=>this.signOutUser()}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </Button>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
