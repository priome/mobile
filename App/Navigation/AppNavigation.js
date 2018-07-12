import { StackNavigator } from 'react-navigation'
import DashboardScreen from '../Containers/DashboardScreen'

export const AppNavigator = StackNavigator({
  DashboardScreen: { screen: DashboardScreen }
})

export default AppNavigator
