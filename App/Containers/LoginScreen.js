import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken } = FBSDK;
import Button from '../Components/RoundedButton';

// Styles
import styles from './Styles/LoginScreenStyle';

class LoginScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  doFBlogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_birthday']).then(
      (result) => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            + result.grantedPermissions.toString());
        }
      },
      (error) => {
        alert('Login fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>LoginScreen</Text>
        <Button onPress={this.doFBlogin}>FB Login</Button>
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
