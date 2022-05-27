import React, { memo } from 'react';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ROUTES from '@ultis/routes';
import Day from '@screens/Day';
import Month from '@screens/Month';
import Year from '@screens/Year';
import Week from '@screens/Week';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Tab = createMaterialTopTabNavigator();

const StaticsHealthTab = memo(({ navigation }) => {
  return (
    <Tab.Navigator
      swipeEnabled={true}
      tabBarOptions={{
        activeTintColor: colors.semiBlack,
        inactiveTintColor: colors.silverChalice,
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.white,
        labelStyle: {
          fontFamily: FONTS.HIND.Regular,
          fontSize: scaleHeight(12),
          textTransform: 'uppercase',
        },
        style: {
          marginTop:
            Platform.OS === 'ios'
              ? getStatusBarHeight() + scaleHeight(74)
              : scaleHeight(74),
          position: 'absolute',
          alignSelf: 'center',
          width: scaleWidth(343),
          borderRadius: scaleHeight(16),
          height: scaleHeight(48),
          backgroundColor: colors.white,
          shadowColor: 'transparent',
        },
        indicatorStyle: {
          width: scaleWidth(16),
          height: scaleHeight(4),
          alignSelf: 'center',
          marginLeft: scaleWidth(34),
          borderTopRightRadius: scaleWidth(200),
          borderTopLeftRadius: scaleWidth(200),
          backgroundColor: colors.classicBlue,
        },
      }}>
      <Tab.Screen
        name={ROUTES.Day}
        component={Day}
        options={{ title: 'Day' }}
      />
      <Tab.Screen
        name={ROUTES.Week}
        component={Week}
        options={{ title: 'Week' }}
      />
      <Tab.Screen
        name={ROUTES.Month}
        component={Month}
        options={{ title: 'Month' }}
      />
      <Tab.Screen
        name={ROUTES.Year}
        component={Year}
        options={{ title: 'Year' }}
      />
    </Tab.Navigator>
  );
});
export default StaticsHealthTab;
