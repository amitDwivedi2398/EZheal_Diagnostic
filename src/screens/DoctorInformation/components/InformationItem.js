import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';

interface Props {
  title?: string;
  description?: any;
}

const InformationItem = memo((props: Props) => {
  const { title, description } = props;

  const renderItem = useCallback((item) => {
    return item.map((content, index) => {
      return (
        <Text style={styles.description} key={index}>
          {content}
        </Text>
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
      <View style={styles.contentView}>{renderItem(description)}</View>
    </View>
  );
});

export default InformationItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  description: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginBottom: scaleHeight(6),
  },
  contentView: {
    flexDirection: 'column',
    marginTop: scaleHeight(8),
  },
});
