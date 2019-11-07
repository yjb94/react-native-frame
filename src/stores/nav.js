import {action} from 'mobx';
import {NavigationActions, StackActions} from 'react-navigation';

class NavigationStore {
  navigator = undefined;

  @action setNav = nav => {
    this.navigator = nav;
  };

  @action navTo = (routeName, params) =>
    this.navigator.dispatch(NavigationActions.navigate({routeName, params}));

  @action reset = (routeName, params, action, key) =>
    this.navigator.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({routeName, params, action})],
      }))

  @action replace = (routeName, params) =>
    this.navigator.dispatch(
      StackActions.replace({
        routeName,
        params,
      }))

  @action back = () => this.navigator.dispatch(NavigationActions.back())
}
export default new NavigationStore();