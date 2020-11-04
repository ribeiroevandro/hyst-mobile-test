import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/screens/Home';
import SignIn from '~/screens/SignIn';

const createRootNavigator = () =>
  createAppContainer(createStackNavigator({
    SignIn,
    Home
  }));

export default createRootNavigator;
