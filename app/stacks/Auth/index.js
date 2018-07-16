import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { LoginManager, AccessToken } from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
import Button from '../../components/RoundedButton'

class LoginScreen extends Component {
  doFBlogin = () => {
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
      <ScrollView>
        <Text>LoginScreen</Text>
        <Button onPress={this.doFBlogin}>FB Login</Button>
      </ScrollView>
    )
  }
}

export default LoginScreen
