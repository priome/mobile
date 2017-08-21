import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import Wizard from '../Containers/Wizard'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen
  },
  Wizard: { screen: Wizard }
}, {
    // Default config for all screens
    headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header
    }
  })