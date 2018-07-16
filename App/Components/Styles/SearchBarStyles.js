import {StyleSheet} from 'react-native'
import { fonts, colors, metrics } from '../../styles/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.smallMargin,
    backgroundColor: colors.transparent,
    flexDirection: 'row',
    width: metrics.screenWidth - metrics.baseMargin
  },
  searchInput: {
    flex: 5,
    height: metrics.searchBarHeight,
    alignSelf: 'center',
    padding: metrics.smallMargin,
    textAlign: 'left',
    fontFamily: fonts.type.base,
    fontSize: fonts.size.instructions,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.snow,
    paddingLeft: 30,
    color: colors.snow,
    flexDirection: 'row'
  },
  searchIcon: {
    left: metrics.doubleBaseMargin,
    alignSelf: 'center',
    color: colors.snow,
    backgroundColor: colors.transparent
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: metrics.baseMargin
  },
  buttonLabel: {
    color: colors.snow,
    fontFamily: fonts.type.base,
    fontSize: fonts.size.regular
  }
})
