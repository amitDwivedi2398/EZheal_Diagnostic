import React, { memo } from 'react';
import FONTS from '@ultis/fonts';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@ultis/colors';
import { scaleHeight } from '@ultis/size';

interface TitleProps {
  title?: string;
  children?: any;
}
const HeaderTitle = memo((props: TitleProps) => {
  const { title, children } = props;
  return children ? (
    <View>{props.children}</View>
  ) : (
    <Text style={styles.title}>{title}</Text>
  );
});

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    color: colors.white,
  },
});
