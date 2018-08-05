import React from 'react'
import { Text } from 'react-native-tailwind'

const Title = ({ children }) => (
  <Text className='text-white mb-4 text-xl'>
    {children}
  </Text>
)

export default Title
