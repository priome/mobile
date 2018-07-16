import { StyleSheet } from 'react-native'
import { colors, metrics, fonts } from '../../styles/'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: metrics.section
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  message: {
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    textAlign: 'center',
    fontFamily: fonts.type.base,
    fontSize: fonts.size.regular,
    fontWeight: 'bold',
    color: colors.steel
  },
  icon: {
    color: colors.steel
  }
})
