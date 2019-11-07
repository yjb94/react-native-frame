import {Platform} from 'react-native';
import colors from '../colors/colors';

const headerHeight = Platform.select({
  ios: 44,
  android: 44,
});

export const StackNavOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    height: headerHeight,
  },

  headerTintColor: colors.main,
  headerTitleStyle: {
    fontWeight: 'normal',
    alignSelf: 'center',
    fontSize: 20,
  },
};
