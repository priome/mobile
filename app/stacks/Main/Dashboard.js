import React, { Component } from 'react'
import { Text, View } from 'react-native-tailwind'
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
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
          <Text className='text-white mb-4'>Dashboard</Text>
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
