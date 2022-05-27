import React, { useState } from 'react';
import { View, Text, TextInput, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import SvgCheck from '@svgs/SvgCheck';
import FONTS from '@ultis/fonts';

interface Props {
  inputRef?: any;
  svg?: any;
  placeholder?: string;
  style?: ViewStyle;
  secure?: boolean;
  editable?: boolean;
  value?: string;
  returnKeyType?: any;
  onSubmitEditing?: any;
  blurOnSubmit?: boolean;
}

const TextInputHealer = (props: Props) => {
  const [changeText, setChangeText] = useState(props.value);
  return (
    <View style={[styles.textInputHealer, props.style]}>
      {props.svg ? <Text style={styles.svg}>{props.svg}</Text> : null}
      <TextInput
        ref={props.inputRef}
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        placeholderTextColor={colors.dimGray}
        editable={props.editable}
        returnKeyType={props.returnKeyType}
        onChangeText={(text) => setChangeText(text)}
        value={changeText}
        onSubmitEditing={props.onSubmitEditing}
        blurOnSubmit={props.blurOnSubmit}
      />
      {/*{changeText !== '' ? <SvgCheck style={styles.svgCheck} /> : null}*/}
    </View>
  );
};

export default TextInputHealer;

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
  svg: {
    marginLeft: scaleWidth(16),
  },
  input: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginLeft: scaleWidth(16),
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.semiBlack,
  },
  svgCheck: {
    marginRight: scaleWidth(16),
  },
});
