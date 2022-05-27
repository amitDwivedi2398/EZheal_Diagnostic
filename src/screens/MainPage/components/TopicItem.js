import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';

interface PropsTopicItem {
  svg?: any;
  title?: string;
  color?: string;
}

const TopicItem = (props: PropsTopicItem) => {
  return (
    <View style={[styles.topicItem, { backgroundColor: props.color }]}>
      <View style={styles.svg}>{props.svg}</View>
      <Text style={styles.txtTitle}>{props.title}</Text>
    </View>
  );
};
export default TopicItem;

const styles = ScaledSheet.create({
  topicItem: {
    width: scaleWidth(280),
    height: scaleHeight(150),
    marginRight: scaleWidth(16),
    borderRadius: scaleWidth(16),
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
    left: scaleWidth(16),
    marginTop: scaleHeight(16),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: scaleHeight(21),
    lineHeight: scaleHeight(25),
    color: colors.white,
    marginRight: scaleWidth(16),
    textAlign: 'center',
  },
});
