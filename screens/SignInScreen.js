import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class SignInScreen extends Component {
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
