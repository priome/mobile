import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { firebaseConnect } from 'react-redux-firebase'
import Button from '../Components/RoundedButton'

import styles from './Styles/DashboardScreenStyle'

class DashboardScreen extends Component {
  logout = () => {
    this.props.firebase.logout()
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>Dashboard</Text>
        <Button onPress={this.logout}>Logout</Button>
      </ScrollView>
    )
  }
}

export default firebaseConnect()(DashboardScreen)
