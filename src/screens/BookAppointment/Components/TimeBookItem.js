import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import colors from '@ultis/colors';

interface Props {
  id?: number;
  time?: string;
  onChoose?: (index: number) => null;
  active?: any;
}

const TimeBookItem = (props: Props) => {
  const { id, time, active, onChoose } = props;
  const backgroundColor = active === id ? colors.blueAccent : colors.white;
  const textColor = active === id ? colors.white : colors.semiBlack;

  const onPress = useCallback(() => {
    onChoose(id);
  }, [id, onChoose]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.txtTime, { color: textColor }]}>{time}</Text>
    </TouchableOpacity>
  );
};
export default TimeBookItem;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: scaleHeight(20),
    paddingTop: scaleHeight(12),
    paddingBottom: scaleHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(16),
    borderRadius: scaleWidth(8),
    width: scaleWidth(104),
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
  },
});
