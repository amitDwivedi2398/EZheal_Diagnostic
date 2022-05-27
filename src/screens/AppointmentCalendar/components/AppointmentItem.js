import React from 'react';
import { View, Text, Image, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';

interface Props {
  style?: ViewStyle;
  imgDoctor?: any;
  time?: string;
  title?: string;
  color?: string;
}
const AppointmentItem = (props: Props) => {
  const { style, title, time, imgDoctor, color } = props;
  return (
    <View style={[styles.appointmentItem, style]}>
      <View style={styles.content}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtTime}>{time}</Text>
      </View>
      <Image style={styles.imgDoctor} source={imgDoctor} />
      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
};
export default AppointmentItem;

const styles = ScaledSheet.create({
  appointmentItem: {
    width: scaleWidth(327),
    height: scaleHeight(76),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
    backgroundColor: colors.white,
    marginBottom: scaleHeight(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: scaleWidth(8),
    flexDirection: 'row',
  },
  content: {},
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(12),
    fontWeight: '500',
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
    marginTop: scaleHeight(5),
  },
  imgDoctor: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(24),
    overflow: 'hidden',
  },
  line: {
    position: 'absolute',
    width: scaleWidth(4),
    height: scaleHeight(44),
    borderTopRightRadius: scaleWidth(10),
    borderBottomRightRadius: scaleWidth(10),
    left: 0,
    alignSelf: 'center',
  },
});
