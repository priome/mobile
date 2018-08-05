import React, { Component } from 'react'
import { Text, View } from 'react-native-tailwind'
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Layout from '../../components/layouts/Middle'

class Dashboard extends Component {
  logout = () => {
    this.props.firebase.logout()
  }
  updateProfile = () => {
    this.props.firebase.updateProfile({ level: 1 }).then(r => console.put(r))
  }
  render () {
    return (
      <Layout>
        <View>
          <Title>Dashboard</Title>
          <Text className='text-white'>{`Your birth date is ${this.props.profile.birthDate}`}</Text>
          <Button onPress={this.logout}>Logout</Button>
        </View>
      </Layout>
    )
  }
}

const mapState = state => ({
  profile: state.firebase.profile
})

export default connect(mapState)(firebaseConnect()(Dashboard))
