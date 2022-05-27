import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ROUTES from '@ultis/routes';
import Nearby from '@screens/Nearby';
import ListAll from '@screens/ListAll';
import Favorites from '@screens/Favorites';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const DoctorsTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.ListAll}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.dimGray,
        activeBackgroundColor: colors.classicBlue,
        inactiveBackgroundColor: colors.white,
        tabStyle: {
          borderRadius: scaleHeight(40),
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontFamily: FONTS.HIND.Regular,
          fontWeight: '500',
          fontSize: scaleHeight(13),
        },
        style: {
          marginHorizontal: scaleWidth(24),
          marginTop:
            Platform.OS === 'ios'
              ? getStatusBarHeight() + scaleHeight(74)
              : scaleHeight(74),
          position: 'absolute',
          top: 0,
          borderTopWidth: 0,
          borderRadius: scaleHeight(40),
          height: scaleHeight(40),
          backgroundColor: colors.white,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.Nearby}
        component={Nearby}
        options={{ title: 'Nearby' }}
      />
      <Tab.Screen
        name={ROUTES.ListAll}
        component={ListAll}
        options={{ title: 'List All' }}
      />
      <Tab.Screen
        name={ROUTES.Favorites}
        component={Favorites}
        options={{ title: 'Favorites' }}
      />
    </Tab.Navigator>
  );
});
export default DoctorsTab;
