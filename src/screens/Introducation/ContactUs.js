import React, { memo, useState, useCallback } from 'react';
import { View, Text, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { getHeightByPercent, scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import TextInputHealer from '@components/TextInputHealer';
import SvgUser from '@svgs/SignIn/SvgUser';
import SvgLock from '@svgs/SignIn/SvgLock';
import SvgEmail from '@svgs/SignUp/SvgEmail';
import SvgLine from '@svgs/SignIn/SvgLine';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import ROUTES from '@ultis/routes';
import SvgSignUp from '@svgs/SignUp/SvgSignUp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from '@ultis/StatusBar';
import { widthScreen } from '@ultis/dimensions';
import SvgPhone from '@svgs/MapsDoctors/SvgPhone';
import { Menu } from 'react-native-paper';
import SvgCall from '@svgs/SignIn/SvgCall';
import SvgNote from '@svgs/SignIn/SvgNote';

const ContactUs = memo(({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [number, onChangeNumber] = useState('');

  // const onSignUp = useCallback(() => {
  //   navigation.navigate(ROUTES.Menu);
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.svgView} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        <SvgSmallHeart style={styles.svgHeart} color={colors.white} />
        <SvgSignUp style={styles.svg} />
        <View style={[styles.contentView]}>
          <Text style={styles.txtJoin}>Get in Touch!</Text>
          {/* <Text style={styles.txtVacation}>Vacation Home Rental Success</Text> */}
          <TextInputHealer
            style={styles.txtInput1}
            svg={<SvgUser />}
            placeholder={'Name'}
            value={userName}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgEmail />}
            placeholder={'Email'}
            value={email}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgCall />}
            placeholder={'Phone No.'}
            value={number}
            keyboardType="numeric"
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgNote />}
            placeholder={'Description'}
          />
          <ButtonPrimary
            // onPress={Menu}
            style={styles.signUp}
            title={'Submit'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
});

export default ContactUs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgHeart: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(14)
        : scaleHeight(14),
    left: scaleWidth(32),
  },
  svg: {
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : scaleHeight(0),
    marginBottom: scaleHeight(-3),
  },
  signIn: {
    fontFamily: FONTS.HIND.semiBold,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    color: colors.white,
    position: 'absolute',
    top: scaleHeight(56),
    right: scaleWidth(21),
  },
  contentView: {
    backgroundColor: colors.white,
    borderTopRightRadius: scaleWidth(24),
    borderTopLeftRadius: scaleWidth(24),
    flex: 1,
  },
  txtJoin: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
    marginLeft: scaleWidth(40),
    marginTop: scaleHeight(29),
  },
  txtVacation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    marginLeft: scaleWidth(31),
    marginTop: scaleHeight(4),
  },
  txtInput1: {
    marginTop: scaleHeight(27),
  },
  txtInput2: {
    marginTop: scaleHeight(16),
  },
  signUp: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(24),
  },
  txtOr: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    color: colors.dimGray,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  svgView: {
    backgroundColor: colors.green,
    position: 'absolute',
    width: widthScreen,
    height: getHeightByPercent(56),
  },
});
