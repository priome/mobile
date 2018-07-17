import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native-tailwind'
import ExamplesRegistry from '../services/ExamplesRegistry'

ExamplesRegistry.addComponentExample('Rounded Button', () => (
  <Button
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
))

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string
  }

  render () {
    return (
      <TouchableOpacity
        className='bg-blue p-3 rounded-sm w-auto'
        onPress={this.props.onPress}
      >
        <Text className='text-white'>
          {this.props.children || this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
