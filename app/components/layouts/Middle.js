import React from 'react'
import { View } from 'react-native-tailwind'

const MiddleLayout = ({ children }) => (
  <View className='flex-1 items-center justify-center bg-grey-darkest'>
    {children}
  </View>
)

export default MiddleLayout
