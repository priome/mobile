import React, { Component } from 'react'
import { Text } from 'react-native-tailwind'
import { LoginManager, AccessToken } from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
import Button from '../../components/Button'
import Layout from '../../components/layouts/Middle'

class LoginScreen extends Component {
  doFBlogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
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
      <Layout>
        <Text className='text-white mb-4'>Priome</Text>
        <Button onPress={this.doFBlogin}>Login with Facebook</Button>
      </Layout>
    )
  }
}

export default LoginScreen
