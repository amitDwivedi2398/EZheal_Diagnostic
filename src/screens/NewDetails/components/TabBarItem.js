import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleWidth } from '@ultis/size';

interface Props {
  Svg?: any;
  onPress?: any;
}

const TabBarItem = (props: Props) => {
  const { Svg, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      {Svg}
    </TouchableOpacity>
  );
};

export default TabBarItem;

const styles = ScaledSheet.create({
  container: {
    width: scaleWidth(70),
    height: scaleWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
