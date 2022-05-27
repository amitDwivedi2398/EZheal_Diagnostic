import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  UIManager,
  LayoutAnimation,
  YellowBox,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import SvgStar from '@svgs/AppointmentList/SvgStar';
import SvgLocation from '@svgs/SvgLocation';
import SvgTime from '@svgs/WalkThought/SvgTime';
import ButtonPrimary from '@components/ButtonPrimary';
import SvgDone from '@svgs/AppointmentList/SvgDone';
import SvgCancel from '@svgs/AppointmentList/SvgCancel';

interface PropsAppointment {
  desciption?: string;
  imgDoctor?: any;
  svgDoctor?: any;
  doctorName?: string;
  specialized?: string;
  rating?: string;
  title?: string;
  shortTitle?: string;
  location?: string;
  time?: string;
  onCancel?: any;
  onReschedule?: any;
  disabled?: boolean;
  done?: boolean;
  cancel?: boolean;
}

const AppointmentListItem = (props: PropsAppointment) => {
  const {
    desciption,
    imgDoctor,
    svgDoctor,
    doctorName,
    specialized,
    rating,
    title,
    shortTitle,
    location,
    time,
    onCancel,
    onReschedule,
    disabled,
    done,
    cancel,
  } = props;

  const heightAnim = useRef(new Animated.Value(scaleHeight(112))).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const showAnim = useRef(new Animated.Value(1)).current;
  const [viewState, setViewState] = useState(true);
  const circleStyle = done ? styles.done : cancel ? styles.cancel : null;

  useEffect(() => {
    YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  }, []);

  const heightStyle = {
    height: heightAnim,
  };

  const opacityStyle = {
    opacity: opacityAnim,
  };
  const fadeAnim = {
    opacity: showAnim,
  };

  const toggleAnimation = useCallback(() => {
    if (viewState === true) {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(395),
        timing: 1500,
      }).start(() => {
        setViewState(false);
      }) &&
        Animated.timing(opacityAnim, {
          toValue: 1,
          timing: 400,
        }).start();
    } else {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(112),
        timing: 1500,
      }).start(setViewState(true));
    }
  }, [heightAnim, viewState, opacityAnim]);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        timing: 400,
      }).start() &&
        Animated.timing(showAnim, {
          toValue: 0,
          timing: 100,
        }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
      }).start() &&
        Animated.timing(showAnim, {
          toValue: 1,
          duration: 1500,
        }).start();
    }
  }, [opacityAnim, viewState, showAnim]);

  const onPress = () => {
    viewState
      ? LayoutAnimation.configureNext(LayoutAnimation.Presets.spring.delete)
      : LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setViewState(!viewState);
    toggleAnimation();
    startAnimationOpacity();
  };
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <Animated.View style={[styles.appointmentItem, heightStyle]}>
      <TouchableOpacity
        style={styles.flex}
        activeOpacity={0.6}
        onPress={onPress}>
        {!viewState ? (
          <Animated.View style={opacityStyle}>
            <Text style={styles.desciption}>{desciption}</Text>
            <View style={styles.line} />
            <View style={styles.contentView}>
              <Image style={styles.imgDoctor} source={imgDoctor} />
              <View style={styles.contentStyle}>
                <Text style={styles.doctorName}>{doctorName}</Text>
                <View style={styles.rateView}>
                  <Text style={styles.specialized}>{specialized}</Text>
                  <SvgStar style={styles.svgStart} />
                  <Text style={styles.txtRating}>{rating}</Text>
                </View>
                <Text style={styles.txtTitle}>{title}</Text>
              </View>
            </View>
            <View style={styles.locationView}>
              <View style={styles.svgView}>
                <SvgLocation />
              </View>
              <Text style={styles.txtLocation}>{location}</Text>
            </View>
            <View style={styles.timeView}>
              <View style={styles.svgView}>
                <SvgTime />
              </View>
              <Text style={styles.txtTime}>{time}</Text>
            </View>
            <View style={styles.btnView}>
              <ButtonPrimary
                disable={disabled}
                style={styles.btnCancel}
                title={'Cancel'}
                titleStyle={styles.txtBtnCancel}
                onPress={onCancel}
              />
              <ButtonPrimary
                disable={disabled}
                style={styles.btnReschedule}
                titleStyle={styles.txtReschedule}
                title={'Reschedule'}
                onPress={onReschedule}
              />
            </View>
          </Animated.View>
        ) : null}
        {viewState ? (
          <Animated.View style={[styles.container, fadeAnim]}>
            <Image style={styles.smallImg} source={imgDoctor} />
            <Text style={styles.shortTitle}>{shortTitle}</Text>
            <Text style={styles.nameDoctor}>{doctorName}</Text>
            <View style={styles.setRow}>
              <Text style={styles.timeStyle}>{time}</Text>
              <View style={styles.flexDirection}>
                <View style={circleStyle}>
                  {done ? <SvgDone /> : cancel ? <SvgCancel /> : null}
                </View>
                <Text style={styles.txtStatus}>
                  {' '}
                  {done ? 'done' : cancel ? 'cancel' : null}
                </Text>
              </View>
            </View>
          </Animated.View>
        ) : null}
      </TouchableOpacity>
      {!viewState && <View style={styles.base} />}
    </Animated.View>
  );
};

export default AppointmentListItem;

const styles = ScaledSheet.create({
  appointmentItem: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(16),
    marginHorizontal: scaleWidth(24),
    overflow: 'hidden',
    paddingHorizontal: scaleWidth(16),
    height: scaleHeight(395),
    marginBottom: scaleHeight(16),
  },
  desciption: {
    marginTop: scaleHeight(24),
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    textTransform: 'uppercase',
    color: colors.semiBlack,
  },
  base: {
    position: 'absolute',
    width: scaleWidth(4),
    height: scaleHeight(40),
    borderRadius: scaleWidth(16),
    backgroundColor: colors.classicBlue,
    top: scaleHeight(28),
  },
  line: {
    width: scaleWidth(295),
    height: 1,
    backgroundColor: colors.pageBackGround,
    borderRadius: scaleWidth(16),
    marginTop: scaleHeight(16),
    marginBottom: scaleHeight(26),
  },
  imgDoctor: {
    width: scaleWidth(72),
    height: scaleHeight(104),
    borderRadius: scaleWidth(12),
  },
  contentView: {
    flexDirection: 'row',
  },
  contentStyle: {
    marginLeft: scaleWidth(16),
  },
  doctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
  },
  specialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.silverChalice,
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: colors.orange,
  },
  svgStart: {
    marginBottom: scaleHeight(5),
    marginLeft: scaleWidth(7),
    marginRight: scaleWidth(5),
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginTop: scaleHeight(10),
    marginRight: scaleWidth(16),
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleHeight(26),
    marginBottom: scaleHeight(17),
  },
  svgView: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
    marginRight: scaleWidth(8),
  },
  txtLocation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(24),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(16),
  },
  btnCancel: {
    width: scaleWidth(140),
    height: scaleHeight(40),
    backgroundColor: colors.silverChaliceOpacity,
  },
  txtBtnCancel: {
    textTransform: 'capitalize',
    color: colors.silverChalice,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
  },
  btnReschedule: {
    width: scaleWidth(140),
    height: scaleHeight(40),
    backgroundColor: colors.secondBlueOpacity,
  },
  txtReschedule: {
    textTransform: 'capitalize',
    color: colors.secondBlue,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
  },
  container: {
    paddingVertical: scaleHeight(16),
    paddingLeft: scaleWidth(68),
    flex: 1,
  },
  smallImg: {
    width: scaleWidth(56),
    height: scaleHeight(80),
    borderRadius: scaleWidth(8),
    position: 'absolute',
    top: scaleHeight(16),
  },
  shortTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
    marginRight: scaleWidth(-10),
  },
  nameDoctor: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginTop: scaleHeight(7),
  },
  timeStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginTop: scaleHeight(8),
  },
  done: {
    width: scaleWidth(12),
    height: scaleWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.classicBlue,
    borderRadius: scaleWidth(12),
  },
  cancel: {
    width: scaleWidth(12),
    height: scaleWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(12),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#979797',
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtStatus: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.dimGray,
    marginTop: scaleHeight(2),
    textTransform: 'capitalize',
  },
});
