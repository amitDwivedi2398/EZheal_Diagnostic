import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgBackArrow from '@svgs/SvgBackArrow';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';

interface Props {
  children?: any;
  onPress?: () => void;
}

const ButtonHeader = memo((props: Props) => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    if (props.onPress) {
      props.onPress();
    } else {
      navigation.goBack();
    }
  }, [navigation, props]);
  const btnStyle = {
    width: scaleWidth(50),
    height: scaleHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      {props.children ? props.children : <SvgBackArrow color={colors.green} />}
    </TouchableOpacity>
  );
});
export default ButtonHeader;
