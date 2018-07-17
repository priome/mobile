import React from 'react'
import { View, Text } from 'react-native-tailwind'
import Button from '../../components/Button'
import Layout from '../../components/layouts/Middle'

const Screen1 = props => (
  <Layout>
    <View className='items-center'>
      <Text className='text-white mb-4'>Screen1</Text>
      <Button onPress={() => props.navigation.navigate('Screen2')}>
        Let's go
      </Button>
    </View>
  </Layout>
)

export default Screen1
