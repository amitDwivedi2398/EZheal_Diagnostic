import React, { memo, useCallback } from 'react';
import { Text, TouchableOpacity, Platform ,Image} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import SvgLeftArrow from '@svgs/ResetPassword/SvgLeftArrow';
import CodeInput from '@components/CodeInput';
import ButtonPrimary from '@components/ButtonPrimary';
import ROUTES from '@ultis/routes';
import SvgEmail from '@svgs/VerifyEmail/SvgEmail';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const VerifyEmail = memo(({ navigation }) => {
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onConfirm = useCallback(() => {
    navigation.navigate(ROUTES.ResetPassword);
  }, [navigation]);

  return (
    <KeyboardAwareScrollView
      extraHeight={scaleHeight(100)}
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      {/* <SvgSmallHeart style={styles.svgHeart} /> */}
      <Image
        style={styles.svgHeart}
        source={require('../../assets/logo/ezheal_icon.png')}
      />
      <TouchableOpacity onPress={onGoBack} style={styles.svgLeftArrow}>
        <SvgLeftArrow />
      </TouchableOpacity>
      <SvgEmail style={styles.svg} />
      <Text style={styles.txtVerifyEmail}>Verify Email!</Text>
      <Text style={styles.txtPlease}>
        Please enter the number code send your email xxx@company.com ✉️
      </Text>
      <CodeInput sellCount={5} />
      <ButtonPrimary
        style={styles.signUp}
        title={'Confirm'}
        onPress={onConfirm}
      />
      <TouchableOpacity style={styles.ResendCodeView}>
        <Text style={styles.txtResendCode}>Resend Code!</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
});

export default VerifyEmail;

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
    left: scaleWidth(48),
  },
  svgLeftArrow: {
    height: scaleHeight(40),
    width: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
  },
  svg: {
    alignSelf: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(60)
        : scaleHeight(60),
  },
  txtVerifyEmail: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
    textAlign: 'center',
    marginTop: scaleHeight(22),
  },
  txtPlease: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.dimGray,
    textAlign: 'center',
    marginHorizontal: scaleWidth(60),
    marginTop: scaleHeight(4),
  },
  codeInputStyle: {
    color: colors.semiBlack,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    borderWidth: scaleHeight(1),
    width: scaleWidth(48),
    height: scaleHeight(48),
    borderColor: colors.frame,
    borderRadius: scaleHeight(4),
  },
  containerStyle: {
    marginHorizontal: scaleHeight(45),
  },
  signUp: {
    width: scaleWidth(215),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
  ResendCodeView: {
    alignSelf: 'center',
    width: scaleWidth(100),
    height: scaleHeight(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(15),
  },
  txtResendCode: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(12),
    color: colors.classicBlue,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  codeFieldRoot: {
    marginTop: scaleHeight(29),
    marginHorizontal: scaleWidth(45),
  },
  cell: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    backgroundColor: colors.pageBackGround,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    paddingTop: scaleHeight(13),
    marginRight: 13,
    color: colors.semiBlack,
  },
  focusCell: {
    borderColor: colors.semiBlack,
  },
});
