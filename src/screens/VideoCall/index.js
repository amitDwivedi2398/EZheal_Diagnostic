import React, { memo, useCallback, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { heightScreen, widthScreen } from '@ultis/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts';
import SvgChat from '@svgs/VideoCall/SvgChat';
import SvgClose from '@svgs/VideoCall/SvgClose';
import SvgLink from '@svgs/VideoCall/SvgLink';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const DOCTORDATA = {
  imgDoctor: require('@assets/VideoCall/Doctor.png'),
  imgUser: require('@assets/VideoCall/User.png'),
  doctorName: 'Dr. Ann Carlson',
};

const VideoCall = memo(({ navigation }) => {
  const [doctorData, setDoctorData] = useState(DOCTORDATA);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onChat = useCallback(() => {}, []);

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onLink = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgDoctor} source={doctorData.imgDoctor} />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.0001)', 'rgba(0, 0, 0, 0.95)']}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 1 }}
        style={styles.linearGradient}
      />
      <View style={styles.btmView}>
        <Text style={styles.txtDoctorName}>{doctorData.doctorName}</Text>
        <Text style={styles.txtTime}>15:25</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={onChat}
            activeOpacity={0.6}
            style={styles.messageView}>
            <SvgChat />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.6}
            style={styles.closeView}>
            <SvgClose />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onLink}
            activeOpacity={0.6}
            style={styles.linkView}>
            <SvgLink />
          </TouchableOpacity>
        </View>
      </View>
      <Image style={styles.imgUser} source={doctorData.imgUser} />
    </View>
  );
});

export default VideoCall;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  imgDoctor: {
    width: widthScreen,
    height: heightScreen,
  },
  linearGradient: {
    width: widthScreen,
    height: heightScreen,
    position: 'absolute',
  },
  imgUser: {
    width: scaleWidth(88),
    height: scaleHeight(88),
    borderRadius: scaleWidth(44),
    borderWidth: scaleWidth(2),
    borderColor: colors.white,
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(31)
        : scaleHeight(31),
    right: scaleWidth(24),
    position: 'absolute',
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.white,
    alignSelf: 'center',
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    opacity: 0.5,
    color: colors.white,
    alignSelf: 'center',
    marginTop: scaleHeight(7),
  },
  btmView: {
    position: 'absolute',
    width: widthScreen,
    bottom: 0,
    height: getBottomSpace() + scaleHeight(200),
  },
  messageView: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  closeView: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    borderRadius: scaleWidth(32),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondRed,
  },
  linkView: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
  },
  arrowBack: {
    width: scaleWidth(50),
    height: scaleWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(40),
  },
  btnView: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(60),
    alignItems: 'center',
  },
});
