import { StackNavigator } from 'react-navigation';
import Wizard from '../Containers/Wizard';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    Wizard: { screen: Wizard },
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Wizard',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default PrimaryNav;