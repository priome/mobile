import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import AnotherAuthenticatedScreen from '../Containers/AnotherAuthenticatedScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
export default StackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen,
    },
    AnotherAuthenticatedScreen: { screen: AnotherAuthenticatedScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);
