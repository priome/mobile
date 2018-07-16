import fonts from './fonts'
import metrics from './metrics'
import colors from './colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const app = {
  mainContainer: {
    flex: 1,
    backgroundColor: colors.transparent
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    paddingTop: metrics.baseMargin,
    backgroundColor: colors.transparent
  },
  section: {
    margin: metrics.section,
    padding: metrics.baseMargin
  },
  sectionText: {
    ...fonts.style.normal,
    paddingVertical: metrics.doubleBaseMargin,
    color: colors.snow,
    marginVertical: metrics.smallMargin,
    textAlign: 'center'
  },
  subtitle: {
    color: colors.snow,
    padding: metrics.smallMargin,
    marginBottom: metrics.smallMargin,
    marginHorizontal: metrics.smallMargin
  },
  titleText: {
    ...fonts.style.h2,
    fontSize: 14,
    color: colors.text
  },
  darkLabelContainer: {
    padding: metrics.smallMargin,
    paddingBottom: metrics.doubleBaseMargin,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    marginBottom: metrics.baseMargin
  },
  darkLabel: {
    fontFamily: fonts.type.bold,
    color: colors.snow
  },
  groupContainer: {
    margin: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...fonts.style.h4,
    color: colors.coal,
    backgroundColor: colors.ricePaper,
    padding: metrics.smallMargin,
    marginTop: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin,
    borderWidth: 1,
    borderColor: colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default app
