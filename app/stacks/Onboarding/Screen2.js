import React from 'react'
import { firebaseConnect } from 'react-redux-firebase'
import { View, Text } from 'react-native-tailwind'
import { DatePicker } from 'native-base'
import Button from '../../components/Button'
import Layout from '../../components/layouts/Middle'

class Screen2 extends React.Component {
  state = { birthDate: null }
  setDate = birthDate => {
    this.setState({ birthDate })
  }
  proceed = () => {
    const { props: { firebase, navigation }, state: { birthDate } } = this
    firebase.updateProfile({ birthDate }).then(() => {
      navigation.navigate('Screen2')
    })
  }
  render () {
    return (
      <Layout>
        <View className='items-center'>
          <Text className='text-white mb-4'>What's your birth date?</Text>
          <DatePicker
            defaultDate={new Date(2000, 1, 1)}
            minimumDate={new Date(1920, 1, 1)}
            maximumDate={new Date(2014, 12, 31)}
            locale='en'
            placeHolderText='Select date'
            textStyle={{ color: 'aqua' }}
            placeHolderTextStyle={{ color: '#FFF' }}
            onDateChange={this.setDate}
            mode='date'
            androidMode='spinner'
          />
          {this.state.birthDate &&
            <Button onPress={this.proceed}>
              Next
            </Button>}
        </View>
      </Layout>
    )
  }
}

export default firebaseConnect()(Screen2)
