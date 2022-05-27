import React from 'react';
import { Text, ViewStyle, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';

interface Props {
  onPress: () => null;
  title: string;
  style?: ViewStyle;
}

const InputButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={[styles.textInputHealer, props.style]}>
      <Text style={styles.txtTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default InputButton;

const styles = ScaledSheet.create({
  textInputHealer: {
    width: scaleWidth(295),
    height: scaleHeight(48),
    backgroundColor: colors.frame,
    borderRadius: scaleHeight(24),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.silverChalice,
    marginLeft: scaleWidth(16),
  },
});
