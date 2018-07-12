import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import FBSDK from 'react-native-fbsdk'
import Button from '../Components/RoundedButton'
import styles from './Styles/LoginScreenStyle'

const { LoginManager, AccessToken } = FBSDK

class LoginScreen extends Component {
  doFBlogin = () => {
    const { firebase } = this.props
    LoginManager.logInWithReadPermissions([
      'public_profile',
      'email',
      'user_birthday'
    ])
      .then(result => {
        if (result.isCancelled) {
          return Promise.resolve('cancelled')
        } else {
          return AccessToken.getCurrentAccessToken()
        }
      })
      .then(data => {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken
        )
        return firebase.auth().signInWithCredential(credential)
      })
      .then(currentUser => {
        if (currentUser === 'cancelled') {
          console.puts('Login cancelled')
        } else {
          console.puts('now signed in')
          console.puts(JSON.stringify(currentUser.toJSON()))
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>LoginScreen</Text>
        <Button onPress={this.doFBlogin}>FB Login</Button>
      </ScrollView>
    )
  }
}

export default LoginScreen
