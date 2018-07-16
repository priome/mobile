import { StyleSheet } from 'react-native'
import { fonts, colors, metrics } from '../../styles/'

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: metrics.section,
    marginVertical: metrics.baseMargin,
    backgroundColor: colors.charcoal,
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fonts.size.medium,
    marginVertical: metrics.baseMargin
  }
})
