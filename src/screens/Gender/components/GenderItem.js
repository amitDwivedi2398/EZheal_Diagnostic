import React, { memo } from 'react';
import { Text, View } from 'react-native';
import FONTS from '@ultis/fonts';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import { ScaledSheet } from 'react-native-size-matters';

interface Props {
  Svg?: any;
  gender?: string;
}

const RenderItem = memo((props: Props) => {
  const { Svg, gender } = props;
  return (
    <View>
      <View style={styles.svg}>{Svg}</View>
      <Text style={styles.txtGender}>{gender}</Text>
    </View>
  );
});

export default RenderItem;

const styles = ScaledSheet.create({
  svg: {
    marginLeft: scaleWidth(50),
  },
  txtGender: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(48),
    color: colors.semiBlack,
    textAlign: 'center',
    marginTop: scaleHeight(40),
  },
});
