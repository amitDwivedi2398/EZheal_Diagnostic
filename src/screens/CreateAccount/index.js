import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import { widthScreen } from '@ultis/dimensions';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import SvgAdd from '@svgs/CreateAccount/SvgAdd';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import ButtonPrimary from '@components/ButtonPrimary';
import InputButton from '@screens/CreateAccount/components/InputButton';
import ROUTES from '@ultis/routes';
import SvgAvatar from '@svgs/CreateAccount/SvgAvatar';

const CreateAccount = memo(({ navigation }) => {
  const onSkip = useCallback(() => {
    navigation.navigate(ROUTES.MainBottomTab);
  }, [navigation]);

  const onFullName = useCallback(() => {
    navigation.navigate(ROUTES.FullName);
  }, [navigation]);

  const onGender = useCallback(() => {
    navigation.navigate(ROUTES.Gender);
  }, [navigation]);

  const onBirthDay = useCallback(() => {
    navigation.navigate(ROUTES.BirthDay);
  }, [navigation]);

  const onBlood = useCallback(() => {
    navigation.navigate(ROUTES.Blood);
  }, [navigation]);

  const onWeight = useCallback(() => {
    navigation.navigate(ROUTES.Weight);
  }, [navigation]);

  const onHeight = useCallback(() => {
    navigation.navigate(ROUTES.Height);
  }, [navigation]);

  const onUpdate = useCallback(() => {
    navigation.navigate(ROUTES.MainBottomTab);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgSmallHeart color={colors.white} />
        <Text style={styles.txtCreateAccount}>Create Account</Text>
        <TouchableOpacity
          onPress={onSkip}
          activeOpacity={0.6}
          style={styles.skipView}>
          <Text style={styles.txtSkip}>Skip!</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <InputButton onPress={onFullName} title={'Fullname'} />
        <InputButton style={styles.input} onPress={onGender} title={'Gender'} />
        <InputButton
          style={styles.input}
          onPress={onBirthDay}
          title={'Birthday'}
        />
        <InputButton style={styles.input} onPress={onBlood} title={'Blood'} />
        <InputButton style={styles.input} onPress={onWeight} title={'Weight'} />
        <InputButton style={styles.input} onPress={onHeight} title={'Height'} />
        <ButtonPrimary
          style={styles.buttonPrimacy}
          title={'Update'}
          onPress={onUpdate}
        />
      </ScrollView>
      <View style={styles.avatar}>
        <SvgAvatar />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.addView}>
        <SvgAdd />
      </TouchableOpacity>
    </View>
  );
});

export default CreateAccount;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    width: widthScreen,
    flexDirection: 'row',
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(12)
        : scaleHeight(12),
    paddingBottom: scaleHeight(85),
    paddingLeft: scaleWidth(16),
    paddingRight: scaleWidth(24),
    alignItems: 'center',
    backgroundColor: colors.secondBlue,
    borderBottomRightRadius: scaleHeight(24),
    borderBottomLeftRadius: scaleHeight(24),
    justifyContent: 'space-between',
  },
  txtSkip: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: colors.classicBlue,
    textTransform: 'uppercase',
  },
  skipView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleWidth(48),
    height: scaleHeight(48),
  },
  txtCreateAccount: {
    fontFamily: FONTS.HIND.Regular,
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: colors.white,
  },
  avatar: {
    width: scaleWidth(80),
    height: scaleWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(100)
        : scaleHeight(124),
    borderWidth: scaleWidth(2),
    borderRadius: scaleWidth(40),
    borderColor: colors.white,
    shadowOffset: { height: 0, width: 4 },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.25,
    backgroundColor: colors.white,
  },
  addView: {
    backgroundColor: colors.oldBurgundy,
    height: scaleHeight(32),
    width: scaleHeight(32),
    borderRadius: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: scaleHeight(183),
    right: scaleWidth(150),
  },
  input: {
    marginTop: scaleHeight(24),
  },
  buttonView: {
    position: 'absolute',
    paddingBottom: getBottomSpace() + scaleHeight(24),
    width: widthScreen,
    bottom: 0,
    alignItems: 'center',
    paddingTop: scaleHeight(12),
    backgroundColor: colors.white,
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(69),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(71),
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
});
