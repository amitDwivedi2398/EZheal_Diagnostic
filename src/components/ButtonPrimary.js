import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors/index';
import FONTS from '@ultis/fonts/index';
import { scaleHeight } from '@ultis/size';

interface Props {
  style?: ViewStyle;
  title?: string;
  titleStyle?: ViewStyle;
  onPress?: any;
  disable?: boolean;
}
const ButtonPrimary = (props: Props) => {
  return (
    <TouchableOpacity
      disable={props.disable}
      activeOpacity={props.disable ? 1 : 0.7}
      onPress={props.onPress}
      style={[styles.buttonPrimacy, props.style]}>
      <Text style={[styles.txtTitle, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = ScaledSheet.create({
  buttonPrimacy: {
    height: scaleHeight(48),
    borderRadius: scaleHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.classicBlue,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    color: colors.white,
  },
});
