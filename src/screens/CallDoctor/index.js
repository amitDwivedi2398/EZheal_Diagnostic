import React, { memo, useCallback, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@ultis/fonts';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import { heightScreen, widthScreen } from '@ultis/dimensions';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import SvgClose from '@svgs/VideoCall/SvgClose';
import SvgAccept from '@svgs/CallDoctor';
import ROUTES from '@ultis/routes';

const DOCTORDATA = {
  imgDoctor: require('@assets/CallDoctor/Doctor.png'),
  imgUser: require('@assets/VideoCall/User.png'),
  doctorName: 'Dr. Ann Carlson',
};

const CallDoctor = memo(({ navigation }) => {
  const [doctorData, setDoctorData] = useState(DOCTORDATA);

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onAccept = useCallback(() => {
    navigation.navigate(ROUTES.VideoCall);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.txtCalling}>Calling…</Text>
      <Text style={styles.txtDoctorName}>{doctorData.doctorName}</Text>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <View style={styles.circle3}>
            <Image style={styles.imgDoctor} source={doctorData.imgDoctor} />
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onClose}
          style={styles.btnRefuse}>
          <SvgClose />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onAccept}
          style={styles.btnAccept}>
          <SvgAccept />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default CallDoctor;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtCalling: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    textAlign: 'center',
    color: colors.bluePrimary,
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(57)
        : scaleHeight(57),
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    textAlign: 'center',
    color: colors.black1,
    marginTop: scaleHeight(10),
  },
  imgDoctor: {
    width: scaleWidth(widthScreen / 2.3),
    height: scaleWidth(widthScreen / 2.3),
    borderRadius: scaleWidth(widthScreen / 2.3),
  },
  circle1: {
    width: scaleWidth(widthScreen / 1.25),
    height: scaleWidth(widthScreen / 1.25),
    borderRadius: scaleWidth(widthScreen / 1.25),
    borderWidth: 1,
    borderColor: 'rgba(45, 144, 245, 0.1)',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: heightScreen / 4,
  },
  circle2: {
    width: scaleWidth(widthScreen / 1.45),
    height: scaleWidth(widthScreen / 1.45),
    borderRadius: scaleWidth(widthScreen / 1.45),
    borderWidth: 1,
    borderColor: 'rgba(45, 144, 245, 0.2)',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle3: {
    width: scaleWidth(widthScreen / 1.75),
    height: scaleWidth(widthScreen / 1.75),
    borderRadius: scaleWidth(widthScreen / 1.75),
    borderWidth: 1,
    borderColor: 'rgba(45, 144, 245, 0.3)',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    position: 'absolute',
    width: widthScreen,
    flexDirection: 'row',
    paddingHorizontal: scaleWidth(110),
    bottom: 0,
    paddingBottom: getBottomSpace() + scaleHeight(50),
    justifyContent: 'space-between',
  },
  btnRefuse: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    borderRadius: scaleWidth(32),
    backgroundColor: colors.secondRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAccept: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    borderRadius: scaleWidth(32),
    backgroundColor: colors.classicBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
