import React, { memo } from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts';
import SvgRightArrow from '@svgs/SvgRightArrow';
interface Props {
  style?: ViewStyle;
  Svg?: any;
  title?: string;
  onPress?: any;
}

const TopicItem = memo((props: Props) => {
  const { Svg, title, onPress, style } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}>
      <View style={styles.svgView}>{Svg}</View>
      <Text style={styles.txtTitle}>{title}</Text>
      <SvgRightArrow style={styles.svg} />
    </TouchableOpacity>
  );
});

export default TopicItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(16),
    paddingLeft: scaleWidth(10),
    paddingVertical: scaleHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
  },
  svgView: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    marginRight: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    color: colors.semiBlack,
  },
  svg: {
    position: 'absolute',
    right: scaleWidth(21),
  },
});
