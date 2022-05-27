import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import SvgArrowRight from '@svgs/Insurance/SvgArrowRight';
import SvgAdd from '@svgs/SvgAdd';

interface Props {
  logoHospital?: any;
  insurance?: string;
  name?: string;
  price?: price;
  enrolleeID?: string;
  expDate?: string;
  onPress?: any;
}

const InsuranceItem = memo((props: Props) => {
  const { logoHospital, insurance, name,price, enrolleeID, expDate, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {logoHospital}
        <Text style={styles.txtInsurance}>{insurance}</Text>
      </View>
      <Text style={styles.txtName}>{name}</Text>
      <Text style={styles.txtName}>{price}</Text>
      <View style={styles.btmView}>
        <View>
          <Text style={styles.enrolleeID}>Enrollee ID</Text>
          <Text style={styles.txtEnrolleeID}>{enrolleeID}</Text>
        </View>
        <View>
          <Text style={styles.expDate}>Exp Date</Text>
          <Text style={styles.txtExpDate}>{expDate}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.viewButton}>
        <SvgAdd />
      </TouchableOpacity>
    </View>
  );
});
export default InsuranceItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(8),
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
    paddingBottom: scaleHeight(18),
  },
  txtInsurance: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    fontWeight: '500',
    marginLeft: scaleWidth(12),
    marginTop: scaleHeight(4),
    textTransform: 'uppercase',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(24),
  },
  txtName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(48),
    color: colors.semiBlack,
    marginBottom: scaleHeight(22),
    textAlign: 'center',
  },
  btmView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  enrolleeID: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
  },
  txtEnrolleeID: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: colors.semiBlack,
    marginTop: scaleHeight(2),
  },
  expDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
  },
  txtExpDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: colors.semiBlack,
    marginTop: scaleHeight(2),
  },
  viewButton: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(32),
    backgroundColor: colors.classicBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(16),
    right: scaleWidth(24),
  },
});
