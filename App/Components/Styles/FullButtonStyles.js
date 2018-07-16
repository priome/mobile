import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../styles/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: colors.fire,
    borderBottomColor: colors.bloodOrange,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: colors.ember
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: colors.snow,
    fontSize: fonts.size.medium,
    fontFamily: fonts.type.bold
  }
})
