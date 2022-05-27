import React from 'react';
import { View, Text, Image, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import colors from '@ultis/colors';

interface Props {
  style?: ViewStyle;
  imgDoctor?: any;
  title?: string;
  description?: string;
}

const StaticsHealthItem = (props: Props) => {
  const { style, imgDoctor, title, description } = props;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtDesciprion}>{description}</Text>
      <Image style={styles.imgDoctor} source={imgDoctor} />
    </View>
  );
};

export default StaticsHealthItem;

const styles = ScaledSheet.create({
  container: {
    width: scaleWidth(343),
    height: scaleHeight(99),
    paddingLeft: scaleWidth(36),
    paddingTop: scaleHeight(21),
    backgroundColor: colors.orange,
    borderRadius: scaleWidth(16),
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
  },
  imgDoctor: {
    width: scaleWidth(56),
    height: scaleWidth(70),
    position: 'absolute',
    right: scaleWidth(36),
    bottom: 0,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.white,
  },
  txtDesciprion: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    color: colors.white,
  },
});
