// Import a library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

// Create a compnoent
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBw5BGHHYf0a23sohz9UqWAh57zwghnzC8",
      authDomain: "reactnativeauthapp-b9d0a.firebaseapp.com",
      databaseURL: "https://reactnativeauthapp-b9d0a.firebaseio.com",
      projectId: "reactnativeauthapp-b9d0a",
      storageBucket: "",
      messagingSenderId: "773620874228",
      appId: "1:773620874228:web:2b0f1185ff269215"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm/>
      </View>
    );
  }
}

export default App;