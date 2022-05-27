import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { Button } from 'react-native-paper';

interface PropsServiceItem {
  svg?: any;
  title?: string;
  content?: string;
  onPress?: any;
}
const ServiceItem = (props: PropsServiceItem) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={styles.serviceItem}>
      <View style={styles.svgView}>{props.svg}</View>
      <Text style={styles.txtTitle}>{props.title}</Text>
      <Text style={styles.txtContent}>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default ServiceItem;

const styles = ScaledSheet.create({
  serviceItem: {
    width: scaleWidth(163),
    borderRadius: scaleWidth(16),
    marginBottom: scaleHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgView: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    backgroundColor: colors.frame,
    marginTop: scaleHeight(14),
    marginBottom: scaleHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(22),
    lineHeight: scaleHeight(35),
    color: colors.white,
    textTransform: 'capitalize',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContent: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(22),
    lineHeight: scaleHeight(35),
    color: colors.white,
    textTransform: 'capitalize',
    marginBottom: scaleHeight(17),
    marginTop: scaleHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
