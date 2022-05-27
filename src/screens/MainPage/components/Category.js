import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { Button } from 'react-native-paper';

interface PropsCategory {
  svg?: any;
  title?: string;
  content?: string;
  onPress?: any;
}
const Category = (props: PropsCategory) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={styles.Category}>
      <View style={styles.svgView}>{props.svg}</View>
      <Text style={styles.txtTitle}>{props.title}</Text>
      <Text style={styles.txtContent}>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = ScaledSheet.create({
  Category: {
    width: scaleWidth(100),
    borderRadius: scaleWidth(16),
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgView: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    backgroundColor: colors.frame,
    marginTop: scaleHeight(25),
    marginBottom: scaleHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    color: colors.oldBurgundy,
    textTransform: 'capitalize',
  },
  txtContent: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(22),
    color: colors.silverChalice,
    textTransform: 'capitalize',
    marginBottom: scaleHeight(17),
    marginTop: scaleHeight(3),
  },
});
