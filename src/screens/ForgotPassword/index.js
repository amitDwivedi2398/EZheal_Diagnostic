import React, { memo, useCallback } from 'react';
import { Text, TouchableOpacity, View, Platform, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import SvgDelete from '@svgs/ForgotPassword/SvgDelete';
import SendItem from '@screens/ForgotPassword/components/SendItem';
import ROUTES from '@ultis/routes';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { heightScreen, widthScreen } from '@ultis/dimensions';

const ForgotPassword = memo(({ navigation }) => {
  const onVerifyEmail = useCallback(() => {
    navigation.navigate(ROUTES.VerifyEmail);
  }, [navigation]);

  const onVerifyMobile = useCallback(() => {
    navigation.navigate(ROUTES.VerifyMobile);
  }, [navigation]);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSignUp = useCallback(() => {
    navigation.navigate(ROUTES.SignUp);
  }, [navigation]);

  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      {/* <SvgSmallHeart style={styles.svgHeart} /> */}
      <Image style={styles.svgHeart} source={require('../../assets/logo/ezheal_icon.png')} />
      <TouchableOpacity onPress={onGoBack} style={styles.viewDelete}>
        <SvgDelete />
      </TouchableOpacity>
      <Image
        style={styles.imgLock}
        source={require('@assets/ForgotPassword/Lock.png')}
      />
      <Text style={styles.txtForgotPassword}>Forgot Password?</Text>
      <Text style={styles.txtWorry}>
        {'Do not worry! We will help you recover your password 🔑'}
      </Text>
      <SendItem
        onPress={onVerifyEmail}
        style={styles.sendItem}
        title={'Send Your Email️'}
        icon={'✉️'}
        description={'We will send new password your email:\n'}
        content={'t***9@gmail.com'}
      />
      <SendItem
        onPress={onVerifyMobile}
        style={styles.sendItem1}
        title={'Send Your Phone Number'}
        icon={'📲️️'}
        description={'We will send new password your \nphone number:'}
        content={' +8*******90'}
      />
      <TouchableOpacity onPress={onSignUp} style={styles.SignUpView}>
        <Text style={styles.txtSignUp}>Don’t Have Account? Sign UP</Text>
      </TouchableOpacity>
    </View>
  );
});

export default ForgotPassword;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgHeart: {
    height:scaleHeight(40),
    width:scaleWidth(40),
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
    left: scaleWidth(32),
  },
  viewDelete: {
    position: 'absolute',
    width: scaleWidth(32),
    height: scaleHeight(32),
    borderRadius: scaleHeight(16),
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
    right: scaleWidth(16),
    backgroundColor: colors.dimGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLock: {
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(40)
        : scaleHeight(40),
    alignSelf: 'center',
    width: widthScreen / 2.05,
    height: widthScreen / 2.3,
  },
  txtForgotPassword: {
    fontFamily: FONTS.HIND.semiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
    textAlign: 'center',
    marginTop: scaleHeight(35),
  },
  txtWorry: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.dimGray,
    textAlign: 'center',
    marginTop: scaleHeight(4),
    marginHorizontal: scaleWidth(50),
  },
  sendItem: {
    marginHorizontal: scaleWidth(24),
    marginTop: scaleHeight(40),
  },
  sendItem1: {
    marginHorizontal: scaleWidth(24),
    marginTop: scaleHeight(24),
  },
  SignUpView: {
    alignSelf: 'center',
    width: scaleWidth(200),
    height: scaleHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(8),
  },
  txtSignUp: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: colors.classicBlue,
    textTransform: 'uppercase',
  },
});
