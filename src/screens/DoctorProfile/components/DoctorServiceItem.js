import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts';

interface Props {
  title?: string;
  onPress?: any;
}

const DoctorServiceItem = memo((props: Props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
});

export default DoctorServiceItem;

const styles = ScaledSheet.create({
  container: {
    height: scaleHeight(48),
    backgroundColor: colors.pageBackGround,
    borderRadius: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(16),
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(21),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(15),
    lineHeight: scaleHeight(20),
    color: colors.semiBlack,
    textAlign: 'center',
  },
});
