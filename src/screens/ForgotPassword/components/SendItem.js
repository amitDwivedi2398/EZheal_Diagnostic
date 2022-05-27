import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';

interface Props {
  style?: ViewStyle;
  title?: string;
  icon?: string;
  description?: string;
  content?: string;
  onPress?: () => null;
}

const SendItem = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={[styles.sendItem, props.style]}>
      <View style={styles.titleView}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <Text>{props.icon}</Text>
      </View>
      <Text style={styles.txtDescription}>
        {props.description}
        <Text style={styles.txtContent}>{props.content}</Text>
      </Text>
    </TouchableOpacity>
  );
};
export default SendItem;

const styles = ScaledSheet.create({
  sendItem: {
    backgroundColor: colors.frame,
    borderRadius: scaleHeight(16),
  },
  titleView: {
    flexDirection: 'row',
    marginTop: scaleHeight(24),
    marginLeft: scaleWidth(28),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.semiBold,
    fontWeight: '600',
    color: colors.bluePrimary,
    fontSize: scaleHeight(12),
    textTransform: 'uppercase',
    marginRight: scaleWidth(4),
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.silverChalice,
    marginTop: scaleHeight(9),
    marginLeft: scaleWidth(24),
    marginBottom: scaleHeight(23),
  },
  txtContent: {
    marginLeft: scaleWidth(24),
    lineHeight: scaleHeight(20),
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.semiBlack,
  },
});
