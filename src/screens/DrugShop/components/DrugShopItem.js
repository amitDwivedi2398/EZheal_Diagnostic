import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts';

interface Props {
  imgDrug?: any;
  drugName?: string;
  drugPrice?: string;
  onPress?: any;
}

const DrugShopItem = (props: Props) => {
  const { imgDrug, drugName, drugPrice, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      <Image style={styles.imgDrug} source={imgDrug} />
      <Text style={styles.txtDrugName}>{drugName}</Text>
      <Text style={styles.txtPrice}>${drugPrice}</Text>
    </TouchableOpacity>
  );
};

export default DrugShopItem;

const styles = ScaledSheet.create({
  container: {
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleHeight(25),
    borderRadius: scaleWidth(8),
    backgroundColor: colors.white,
    alignItems: 'center',
    marginRight: scaleWidth(15),
    marginBottom: scaleHeight(16),
    width: scaleWidth(165),
    height: scaleHeight(220),
  },
  imgDrug: {
    width: scaleWidth(115),
    height: scaleHeight(115),
    marginBottom: scaleHeight(26),
  },
  txtDrugName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.dimGray,
    marginBottom: scaleHeight(5),
  },
  txtPrice: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    marginBottom: scaleHeight(5),
  },
});
