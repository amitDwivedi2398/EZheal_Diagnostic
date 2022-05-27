import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ROUTES from '@ultis/routes';
import Upcoming from '@screens/Upcoming';
import Past from '@screens/Past';

const Tab = createBottomTabNavigator();

interface Props {
  upcoming?: number;
  past?: number;
}

const AppointmentListTab = memo((props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.UpComing}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.dimGray,
        activeBackgroundColor: colors.classicBlue,
        inactiveBackgroundColor: colors.pageBackGround,
        tabStyle: {
          borderRadius: scaleHeight(40),
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontFamily: FONTS.HIND.regular,
          fontSize: scaleHeight(13),
        },
        style: {
          marginHorizontal: scaleWidth(24),
          marginTop: scaleHeight(16),
          position: 'absolute',
          top: 0,
          borderTopWidth: 0,
          borderRadius: scaleHeight(40),
          height: scaleHeight(40),
          backgroundColor: colors.pageBackGround,
          shadowOffset: { width: 0, height: 7 },
          shadowRadius: 64,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOpacity: 0.5,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.UpComing}
        component={Upcoming}
        options={{ title: `Upcoming (${props.upcoming})` }}
      />
      <Tab.Screen
        name={ROUTES.Past}
        component={Past}
        options={{ title: `Past (${props.past})` }}
      />
    </Tab.Navigator>
  );
});
export default AppointmentListTab;
