import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgRightArrow from '@svgs/SvgRightArrow';
import FONTS from '@ultis/fonts';

interface Props {
  Svg?: any;
  drugName?: string;
  concentration?: string;
  onPress?: any;
}

const DrugItem = (props: Props) => {
  const { Svg, drugName, concentration, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      {Svg}
      <View style={styles.viewContent}>
        <Text style={styles.txtDrugName}>{drugName}</Text>
        <Text style={styles.txtConcentration}>{concentration}</Text>
      </View>
      <SvgRightArrow style={styles.viewArrow} />
    </TouchableOpacity>
  );
};

export default DrugItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    paddingVertical: scaleHeight(16),
    paddingLeft: scaleWidth(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scaleWidth(8),
    width: scaleWidth(327),
    height: scaleHeight(76),
  },
  viewContent: {
    marginLeft: scaleWidth(16),
  },
  txtDrugName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtConcentration: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginTop: scaleHeight(6),
  },
  viewArrow: {
    position: 'absolute',
    right: scaleWidth(12),
  },
});
