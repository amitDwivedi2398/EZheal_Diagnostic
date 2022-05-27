import React, { useState, memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';
import SvgCheck from '@svgs/SvgCheck';

interface Props {
  imgIndicator?: any;
  nameIndicator?: string;
  desciprion?: string;
}

const IndicatorItem = memo((props: Props) => {
  const [choose, setChoose] = useState(false);

  const onChose = () => {
    setChoose(!choose);
  };

  const viewCheck = choose ? styles.active : styles.inactive;

  const { imgIndicator, nameIndicator, desciprion } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onChose}
      style={styles.indicatorItem}>
      <Image style={styles.imgDevice} source={imgIndicator} />
      <View>
        <Text style={styles.txtNameDeive}>{nameIndicator}</Text>
        <Text style={styles.txtDesciprion}>{desciprion}</Text>
      </View>
      <View style={[styles.viewCheck, viewCheck]}>
        {choose ? <SvgCheck /> : null}
      </View>
    </TouchableOpacity>
  );
});

export default IndicatorItem;

const styles = ScaledSheet.create({
  indicatorItem: {
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(16),
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(8),
    alignItems: 'center',
    height: scaleHeight(80),
  },
  imgDevice: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(6),
    overflow: 'hidden',
  },
  txtNameDeive: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    color: colors.semiBlack,
    marginLeft: scaleWidth(16),
    textTransform: 'uppercase',
  },
  active: {
    backgroundColor: colors.blueAccent,
  },
  inactive: {
    borderWidth: scaleWidth(1),
    borderColor: '#B3B3B3',
  },
  viewCheck: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(12),
    position: 'absolute',
    right: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDesciprion: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    color: colors.silverChalice,
    marginLeft: scaleWidth(16),
  },
});
