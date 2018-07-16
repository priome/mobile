import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { firebaseConnect } from 'react-redux-firebase'
import Button from '../../components/RoundedButton'

class Dashboard extends Component {
  logout = () => {
    this.props.firebase.logout()
  }
  updateProfile = () => {
    this.props.firebase.updateProfile({ level: 1 })
  }
  render () {
    return (
      <View>
        <Text>Dashboard</Text>
        <Button onPress={this.logout}>Logout</Button>
        <Button onPress={this.updateProfile}>Update</Button>
      </View>
    )
  }
}

export default firebaseConnect()(Dashboard)
