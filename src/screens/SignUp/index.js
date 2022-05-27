import React, { memo, useState, useCallback } from 'react';
import { View, Text, Platform,Image } from 'react-native';
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
import axios from 'axios';

const SignUp = memo(({ navigation }) => {
  const [name, setName] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('user_id', data);
      console.log('ID saved success');
    } catch (error) {
      console.log('Some error in setting ID');
    }
  };
  const register = (name,mobile_no, email, password, repassword) => {
    console.log(name,mobile_no, email, password, repassword);
    axios
      .post(`https://ezheal.ai/api/ApiCommonController/userRegister`, {
        name: name,
        mobile_no: mobile_no,
        email: email,
        password: password,
        repassword: repassword,
      })
      .then(function(response) {
        console.log(response);
        // if (response.data.msg === 'success' || response.data.msg == 'success') {
        //   ToastAndroid.show('Register Successfull....', ToastAndroid.SHORT);
        // }
        // console.log(response.data);

        if (response.data != null) {
          _storeData(response.data);
          //navigation.navigate('Otp');
        } else {
          console.log('no token!');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const onSignIn = useCallback(() => {
    navigation.navigate(ROUTES.SignIn);
  }, [navigation]);
  const Otp = useCallback(() => {
    navigation.navigate(ROUTES.Otp);
  }, [navigation]);

  // const onSignUp = useCallback(() => {
  //   navigation.navigate(ROUTES.SignIn);
  // }, [navigation]);

  const onFaceBook = useCallback(() => {}, []);
  const onGoogle = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.svgView} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        {/* <SvgSmallHeart style={styles.svgHeart} color={colors.white} /> */}
        <Image style={styles.svgHeart} source={require('../../assets/logo/ezheal_icon.png')} />
        <SvgSignUp style={styles.svg} />
        <View style={[styles.contentView]}>
          <Text style={styles.txtJoin}>Join to EZscan!</Text>
          {/* <Text style={styles.txtVacation}>Vacation Home Rental Success</Text> */}
          <TextInputHealer
            style={styles.txtInput1}
            svg={<SvgUser />}
            placeholder={'Username'}
            textContentType="name"
            value={name}
            onChangeText={setName}
          />
          <TextInputHealer
            style={styles.txtInput1}
            svg={<SvgUser />}
            placeholder={'Mobile'}
            textContentType="phone"
            value={mobile_no}
            onChangeText={setMobile_no}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgEmail />}
            placeholder={'Email'}
            textContentType="email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgLock />}
            placeholder={'Password'}
            textContentType="password"
            secure={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInputHealer
            style={styles.txtInput2}
            svg={<SvgLock />}
            placeholder={'Re-Password'}
            textContentType="repassword"
            secure={true}
            value={repassword}
            onChangeText={setRepassword}
          />
          <ButtonPrimary
         onPress={() => {
          register(name, email, mobile_no, password, repassword);
        }}
            style={styles.signUp}
            title={'Sign Up'}

          />
          
          <View style={styles.lineView}>
            <SvgLine />
            <Text style={styles.txtOr}>or</Text>
            <SvgLine />
          </View>
          <Text onPress={onSignIn} style={styles.signIn}>
            Sign In
          </Text>
          <View style={styles.bottomView}>
            <ButtonPrimary
              onPress={onFaceBook}
              style={styles.facebook}
              title={'Facebook'}
            />
            <ButtonPrimary
              onPress={onGoogle}
              style={styles.google}
              title={'Google'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
});

export default SignUp;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgHeart: {
    width:scaleWidth(50),
    height:scaleHeight(50),
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
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scaleWidth(40),
    alignItems: 'center',
    marginTop: scaleHeight(17),
  },
  bottomView: {
    flexDirection: 'row',
    marginHorizontal: scaleWidth(40),
    marginTop: scaleHeight(15),
    justifyContent: 'space-between',
  },
  facebook: {
    width: scaleWidth(142),
  },
  google: {
    width: scaleWidth(142),
    backgroundColor: colors.secondRed,
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
