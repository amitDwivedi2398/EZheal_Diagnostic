import React, { memo, useCallback } from 'react';
import { View, Text, Platform,Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import ButtonPrimary from '@components/ButtonPrimary';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@ultis/routes';
import SvgResetSuccess from '@svgs/ResetPasswordSuccess/SvgResetSuccess';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const ResetPasswordSuccess = memo(({ navigation }) => {
  const onSignIn = useCallback(() => {
    navigation.navigate(ROUTES.SignIn);
  }, [navigation]);

  return (
    <View>
      {/* <SvgSmallHeart style={styles.svgHeart} /> */}
      <Image
        style={styles.svgHeart}
        source={require('../../assets/logo/ezheal_icon.png')}
      />
      <SvgResetSuccess style={styles.svg} />
      <Text style={styles.txtCongratulations}>Congratulations!</Text>
      <Text style={styles.txtDescription}>
        Huraaaaa!!!! your password has been updated 🎉
      </Text>
      <ButtonPrimary
        onPress={onSignIn}
        style={styles.buttonPrimary}
        title={'Back To Sign In'}
      />
    </View>
  );
});

export default ResetPasswordSuccess;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
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
  svg: {
    alignSelf: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(110)
        : scaleHeight(110),
  },
  txtCongratulations: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    lineHeight: scaleHeight(32),
    fontSize: scaleHeight(24),
    color: colors.bluePrimary,
    textAlign: 'center',
    marginTop: scaleHeight(22),
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.dimGray,
    textAlign: 'center',
    marginHorizontal: scaleWidth(60),
  },
  buttonPrimary: {
    width: scaleWidth(235),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
});
