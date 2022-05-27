import React, { memo } from 'react';
import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '@ultis/routes';
import SvgIndicatorInactive from '@svgs/MainBottomTab/SvgIndicatorInactive';
import SvgStethoscopeInactive from '@svgs/MainBottomTab/SvgStethoscopeInactive';
import colors from '@ultis/colors';
import SvgDoctorInactive from '@svgs/MainBottomTab/SvgDoctorInactive';
import SvgDrugInactive from '@svgs/MainBottomTab/SvgDrugInactive';
import UserProfile from '@screens/UserProfile';
import SvgUserProfileInactive from '@svgs/MainBottomTab/SvgUserProfileInactive';
import { scaleHeight, scaleWidth } from '@ultis/size';
import StaticsHealthStack from '@navigation/StaticsHealthStack';
import DoctorsStack from '@navigation/DoctorsStack';
import MainPageStack from '@navigation/MainPageStack';
import { ScaledSheet } from 'react-native-size-matters';
import DrugsStack from '@navigation/DrugsStack';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const MainBottomTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.MainPage}
      tabBarOptions={{
        style: styles.tabBarOptions,
        showLabel: false,
        activeTintColor: colors.classicBlue,
        inactiveTintColor: colors.silverChalice,
      }}>
      {/* <Tab.Screen
        name={ROUTES.StaticsHealth}
        component={StaticsHealthStack}
        options={{
          tabBarIcon: ({ color }) => <SvgIndicatorInactive color={color} />,
        }}
      /> */}
      {/* <Tab.Screen
        name={ROUTES.Doctors}
        component={DoctorsStack}
        options={{
          tabBarIcon: ({ color }) => <SvgDoctorInactive color={color} />,
        }}
      /> */}
      <Tab.Screen
        name={ROUTES.MainPage}
        component={MainPageStack}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.viewTabBarIcon}>
              <SvgStethoscopeInactive color={color} />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name={ROUTES.Drugs}
        component={DrugsStack}
        options={{
          tabBarIcon: ({ color }) => <SvgDrugInactive color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.UserProfile}
        component={UserProfile}
        options={{
          tabBarIcon: ({ color }) => <SvgUserProfileInactive color={color} />,
        }}
      /> */}
    </Tab.Navigator>
  );
});
export default MainBottomTab;

const styles = ScaledSheet.create({
  viewTabBarIcon: {
    backgroundColor: colors.classicBlue,
    borderWidth: scaleWidth(4),
    borderColor: colors.pageBackGround,
    height: scaleWidth(56),
    width: scaleWidth(56),
    borderRadius: scaleWidth(56),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getBottomSpace() + scaleHeight(-60)
        : scaleHeight(-20),
  },
  tabBarOptions: {
    backgroundColor: colors.white,
    height: getBottomSpace() + scaleHeight(49),
    borderTopEndRadius: scaleWidth(24),
    borderTopStartRadius: scaleWidth(24),
    borderTopWidth: 0,
    position: 'absolute',
    bottom: 0,
  },
});
