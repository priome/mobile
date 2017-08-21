import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;

// Styles
import styles from './Styles/LoginScreenStyle';

class LoginScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>LoginScreen</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
