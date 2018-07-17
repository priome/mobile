import React from 'react'
import { View, Text } from 'react-native-tailwind'
import { DatePicker } from 'native-base'
import Button from '../../components/Button'
import Layout from '../../components/layouts/Middle'

class Screen2 extends React.Component {
  setDate = val => {
    console.log(val)
  }
  render () {
    return (
      <Layout>
        <View className='items-center'>
          <Text className='text-white mb-4'>What's your birth date?</Text>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            placeHolderText='Select date'
            textStyle={{ color: 'green' }}
            placeHolderTextStyle={{ color: '#d3d3d3' }}
            onDateChange={this.setDate}
          />
          <Button onPress={() => this.props.navigation.navigate('Screen2')}>
            Next
          </Button>
        </View>
      </Layout>
    )
  }
}

export default Screen2
