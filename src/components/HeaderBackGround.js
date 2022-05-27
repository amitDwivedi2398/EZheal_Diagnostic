import React, { memo } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleWidth } from '@ultis/size';

const HeaderBackGround = memo(() => {
  return <View style={styles.headerBackground} />;
});

export default HeaderBackGround;

const styles = ScaledSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: scaleWidth(16),
    borderBottomRightRadius: scaleWidth(16),
  },
});
