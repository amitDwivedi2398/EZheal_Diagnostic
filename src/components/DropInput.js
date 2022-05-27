import React, { memo } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import SvgArrowDown from '@svgs/AddDrugs/SvgArrowDown';

interface Props {
  style?: ViewStyle;
  title?: string;
  onPress?: any;
  nonArrow?: boolean;
}

const DropInput = memo((props: Props) => {
  const { title, onPress, style, nonArrow } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, style]}>
      <Text style={styles.txtTitle}>{title}</Text>
      {nonArrow ? null : <SvgArrowDown style={styles.svgArrowDown} />}
    </TouchableOpacity>
  );
});

export default DropInput;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    width: scaleWidth(303),
    borderRadius: scaleWidth(24),
    height: scaleHeight(48),
    paddingLeft: scaleWidth(22),
    paddingVertical: scaleHeight(12),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.dimGray,
    textTransform: 'capitalize',
  },
  svgArrowDown: {
    position: 'absolute',
    right: scaleWidth(24),
  },
});
