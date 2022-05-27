import React, { memo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FONTS from '@ultis/fonts/index';
import ROUTES from '@ultis/routes';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgHoverLine from '@svgs/Menu/SvgHoverLine';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import SvgFakeScreens from '@svgs/Menu/SvgFakeScreens';
import SvgAvatar from '@svgs/Menu/SvgAvatar';

const SCREENS = [
  // 'Home',
  // 'Drugs',
  // 'Doctors',
  // 'Services',
  // 'Dashboard',
  // 'Profile',
  // 'News Healthly',
  'Price and UT Test',
  'Transaction History',
  'Report',
  'Privacy Policy',
  'Terms & Conditions',
  'Contact Us',
  'My Profile',
  'Log out',
];

const DATAUSER = {
  avatar: require('@assets/Menu/Avatar.png'),
  userName: 'Oscar Barrett',
  balance: '$1,359.00',
};

const Menu = memo(({ route }) => {
  const indexTab = route.params;
  const [index, setIndex] = useState(
    route && indexTab.index ? indexTab.index : 0,
  );
  const [user, setUser] = useState(DATAUSER);
  const navigation = useNavigation();

  const onPress = (key) => {
    onNavigate(key);
  };

  const onNavigate = (key) => {
    switch (key) {
      // case 'My Order':
      //   navigation.navigate(ROUTES.MyOrder);
      //   setIndex(0);
      //   break;
      // case 'Home':
      //   navigation.navigate(ROUTES.MainPage);
      //   setIndex(0);
      //   break;
      
      case 'Price and UT Test':
        navigation.navigate(ROUTES.PriceUtTest);
        setIndex(1);
        break;
      case 'Transaction History':
        navigation.navigate(ROUTES.TransactionHistory);
        setIndex(2);
        break;
      case 'Privacy Policy':
        navigation.navigate(ROUTES.PrivacyPolicy);
        setIndex(4);
        break;
      case 'Terms & Conditions':
        navigation.navigate(ROUTES.TermsConditions);
        setIndex(5);
        break;
      case 'Contact Us':
        navigation.navigate(ROUTES.ContactUs);
        setIndex(6);
        break;
      // case 'Drugs':
      //   navigation.navigate(ROUTES.Drugs);
      //   setIndex(1);
      //   break;

      // case 'Doctors':
      //   navigation.navigate(ROUTES.Doctors);
      //   setIndex(3);
      //   break;
      // case 'Services':
      //   navigation.navigate(ROUTES.Services);
      //   setIndex(3);
      //   break;
      // case 'Dashboard':
      //   navigation.navigate(ROUTES.DashBoard);
      //   setIndex(4);
      //   break;
      // case 'Profile':
      //   navigation.navigate(ROUTES.UserProfile);
      //   setIndex(5);
      //   break;
      // case 'News Healthly':
      //   navigation.navigate(ROUTES.News);
      //   setIndex(6);
      //   break;
      case 'Log out':
        navigation.navigate(ROUTES.SignIn);
        break;
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <View style={styles.avatar}>
        <SvgAvatar />
      </View>
      <Text style={styles.txtName}>{user.userName}</Text>
      <Text style={styles.txtBalance}>{/* Balance: {user.balance} */}</Text>
      {SCREENS.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={styles.btn}
            onPress={() => onPress(item)}>
            {index === key && <SvgHoverLine style={styles.svgHoverLine} />}
            <Text
              style={[
                styles.txt,
                {
                  color: index === key ? colors.classicBlue : colors.semiBlack,
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
      <SvgFakeScreens style={styles.svgFakeScreens} />
    </ScrollView>
  );
});

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btn: {
    height: scaleHeight(44),
    marginBottom: scaleHeight(20),
    justifyContent: 'center',
    paddingLeft: scaleWidth(40),
  },
  txt: {
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    fontFamily: FONTS.HIND.Medium,
    textTransform: 'uppercase',
  },
  txtBalance: {
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(22),
    color: colors.brown,
    fontFamily: FONTS.HIND.Regular,
    marginBottom: scaleHeight(44),
    marginLeft: scaleWidth(40),
  },
  txtName: {
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    fontWeight: '600',
    color: colors.black1,
    fontFamily: FONTS.HIND.SemiBold,
    textTransform: 'uppercase',
    marginTop: scaleHeight(9),
    letterSpacing: 0.5,
    marginLeft: scaleWidth(40),
  },
  svgHoverLine: {
    position: 'absolute',
    left: 0,
  },
  avatar: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(64),
    backgroundColor: colors.classicBlue,
    marginLeft: scaleWidth(40),
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(40)
        : scaleHeight(40),
  },
  svgFakeScreens: {
    position: 'absolute',
    right: 0,
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(103)
        : scaleHeight(103),
  },
});
