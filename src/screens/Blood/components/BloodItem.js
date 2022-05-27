import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@ultis/fonts/index';

interface PropsBlood {
  blood?: string;
  onChoose?: (index: number) => void;
  id?: number;
  isChoose?: number;
}
const BloodItem = (props: PropsBlood) => {
  const { id, blood, onChoose, isChoose } = props;
  const backgroundColor = isChoose === id ? colors.secondRed : colors.frame;

  const onPress = useCallback(() => {
    onChoose(id);
  }, [id, onChoose]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.bloodItem, { backgroundColor: backgroundColor }]}>
      <Text style={styles.txtBlood}>{blood}</Text>
    </TouchableOpacity>
  );
};

export default BloodItem;

const styles = ScaledSheet.create({
  bloodItem: {
    borderRadius: scaleHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(24),
    width: scaleWidth(295),
    height: scaleHeight(48),
  },
  txtBlood: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.oldBurgundy,
    textAlign: 'center',
  },
});
