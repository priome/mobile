import { StackNavigator } from 'react-navigation'
import Dashboard from './Dashboard'

export const AppNavigator = StackNavigator({
  Dashboard: { screen: Dashboard }
}, { headerMode: 'none' })

export default AppNavigator
