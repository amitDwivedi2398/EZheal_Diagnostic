import React, { memo, useCallback } from 'react';
import { Platform, Text, TouchableOpacity ,Image} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import SvgLeftArrow from '@svgs/ResetPassword/SvgLeftArrow';
import CodeInput from '@components/CodeInput';
import ButtonPrimary from '@components/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@ultis/routes';
import SvgMobile from '@svgs/VerifyMobile/SvgMobile';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const VerifyMobile = memo(() => {
  const navigation = useNavigation();

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
      <SvgMobile style={styles.svg} />
      <Text style={styles.txtPhoneNumber}>Verify Phone Number!</Text>
      <Text style={styles.txtPlease}>
        Please enter the number code send your phone +8*******90 📲
      </Text>
      <CodeInput sellCount={5} />
      <ButtonPrimary
        style={styles.confirm}
        title={'Confirm'}
        onPress={onConfirm}
      />
      <TouchableOpacity style={styles.ResendCodeView}>
        <Text style={styles.txtResendCode}>Resend Code!</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
});

export default VerifyMobile;

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
  txtPhoneNumber: {
    fontFamily: FONTS.HIND.semiBold,
    fontWeight: '600',
    lineHeight: scaleHeight(32),
    fontSize: scaleHeight(24),
    color: colors.bluePrimary,
    textAlign: 'center',
    marginTop: scaleHeight(30),
  },
  txtPlease: {
    fontFamily: FONTS.HIND.Regular,
    marginTop: scaleHeight(4),
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.dimGray,
    textAlign: 'center',
    marginHorizontal: scaleWidth(60),
  },
  codeInputStyle: {
    color: colors.semiBlack,
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    fontWeight: '500',
    borderWidth: scaleHeight(1),
    width: scaleWidth(48),
    height: scaleHeight(48),
    borderColor: colors.frame,
    borderRadius: scaleHeight(4),
  },
  containerStyle: {
    marginHorizontal: scaleHeight(45),
  },
  confirm: {
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
    marginTop: 12,
  },
  txtResendCode: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: colors.classicBlue,
    textTransform: 'uppercase',
  },
});
