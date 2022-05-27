import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import FONTS from '@ultis/fonts';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgSpeechBubble from '@svgs/NewsDetails/SvgSpeechBubble';
import SvgPhone from '@svgs/MapsDoctors/SvgPhone';
import SvgStar from '@svgs/AppointmentList/SvgStar';
import SvgLocation from '@svgs/SvgLocation';

interface LocationViewProps {
  style?: ViewStyle;
  Svg?: any;
  doctorName?: string;
  specialized?: string;
  rating?: string;
  location?: string;
  onCall?: any;
  onMessage?: any;
}

const LocationView = memo((props: LocationViewProps) => {
  const {
    style,
    Svg,
    doctorName,
    specialized,
    rating,
    location,
    onCall,
    onMessage,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topView}>
        <View style={styles.imgDoctor}>{Svg}</View>
        <View style={styles.contentView}>
          <Text style={styles.txtDoctorName}>{doctorName}</Text>
          <View style={styles.setRow}>
            <Text style={styles.txtSpecialized}>{specialized}</Text>
            <View style={styles.flexDirection}>
              <SvgStar style={styles.svgStart} />
              <Text style={styles.txtRating}>{rating}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.locationView}>
        <SvgLocation width={16} height={16} color={colors.classicBlue} />
        <Text style={styles.txtLocation}>{location}</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={onCall}
          activeOpacity={0.6}
          style={styles.btnCall}>
          <SvgPhone />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onMessage}
          activeOpacity={0.6}
          style={styles.btnMessage}>
          <SvgSpeechBubble width={16} height={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default LocationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: scaleWidth(240),
    height: scaleHeight(152),
    borderRadius: scaleWidth(8),
    overflow: 'hidden',
  },
  textLocation: {
    fontSize: 16,
    fontFamily: FONTS.HIND.Regular,
    color: '#353B48',
    lineHeight: 20,
    marginTop: 8,
  },
  btnView: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.white,
    height: scaleHeight(40),
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    flexDirection: 'row',
  },
  btnMessage: {
    width: '50%',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCall: {
    width: '50%',
    backgroundColor: colors.classicBlue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDoctor: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    fontWeight: '500',
    color: colors.semiBlack,
    textTransform: 'uppercase',
    paddingRight: scaleWidth(16),
  },
  txtSpecialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    fontWeight: '500',
    color: colors.silverChalice,
    marginTop: scaleHeight(4),
    marginBottom: scaleHeight(4),
  },
  svgStart: {
    marginRight: scaleWidth(5),
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: colors.orange,
  },
  topView: {
    flexDirection: 'row',
    marginTop: scaleHeight(16),
    marginLeft: scaleWidth(16),
  },
  contentView: {
    marginTop: scaleHeight(4),
    marginLeft: scaleWidth(8),
    flex: 1,
    paddingRight: scaleWidth(16),
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleHeight(6),
    marginLeft: scaleWidth(16),
  },
  txtLocation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.classicBlue,
    marginBottom: scaleHeight(-6),
    marginLeft: scaleWidth(4),
  },
});
