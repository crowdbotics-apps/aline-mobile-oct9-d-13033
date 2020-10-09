import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212052Navigator from '../features/BlankScreen212052/navigator';
import BlankScreen112051Navigator from '../features/BlankScreen112051/navigator';
import BlankScreen012046Navigator from '../features/BlankScreen012046/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212052: { screen: BlankScreen212052Navigator },
BlankScreen112051: { screen: BlankScreen112051Navigator },
BlankScreen012046: { screen: BlankScreen012046Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
