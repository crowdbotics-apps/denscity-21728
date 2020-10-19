import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile151124Navigator from '../features/UserProfile151124/navigator';
import Tutorial151123Navigator from '../features/Tutorial151123/navigator';
import NotificationList151095Navigator from '../features/NotificationList151095/navigator';
import Settings151094Navigator from '../features/Settings151094/navigator';
import Settings151086Navigator from '../features/Settings151086/navigator';
import UserProfile151084Navigator from '../features/UserProfile151084/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile151124: { screen: UserProfile151124Navigator },
Tutorial151123: { screen: Tutorial151123Navigator },
NotificationList151095: { screen: NotificationList151095Navigator },
Settings151094: { screen: Settings151094Navigator },
Settings151086: { screen: Settings151086Navigator },
UserProfile151084: { screen: UserProfile151084Navigator },

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
