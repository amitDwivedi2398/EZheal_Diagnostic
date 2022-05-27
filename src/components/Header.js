import React, { memo, useCallback, useEffect } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import colors from '@ultis/colors';
import ThemeUtils from '@ultis/themeUtils';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import SvgLeftArrow from '@svgs/SvgLeftArrow';

interface Props {
  scrollY?: any;
  opacity?: boolean;
  title?: string;
  svg?: any;
  svgGoBack?: boolean;
  onPress?: () => void;
}

const Header = memo((props: Props) => {
  useEffect(() => {
    YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  }, []);

  const opacity = props.scrollY.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 1],
  });
  const headerTitleOpacity = props.scrollY.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Animated.View style={[styles.headerStyle, { opacity: opacity }]}>
      {props.svgGoBack && (
        <TouchableOpacity onPress={onBack} style={styles.headerLeftIcon}>
          <SvgLeftArrow />
        </TouchableOpacity>
      )}
      <Animated.Text
        style={[
          styles.headerTitle,
          {
            opacity: props.opacity ? 1 : headerTitleOpacity,
          },
        ]}>
        {props.title}
      </Animated.Text>
      <TouchableOpacity onPress={props.onPress} style={styles.headerRightIcon}>
        {props.svg}
      </TouchableOpacity>
    </Animated.View>
  );
});
export default Header;
const styles = StyleSheet.create({
  headerLeftIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleWidth(50),
    height: scaleWidth(50),
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(10)
        : scaleHeight(16),
    left: scaleWidth(0),
  },
  headerRightIcon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: ThemeUtils.relativeWidth(4),
    zIndex: 2,
  },
  headerStyle: {
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(34)
        : scaleHeight(34),
    width: '100%',
    flexDirection: 'row',
    zIndex: 100,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.classicBlue,
    borderBottomRightRadius: scaleWidth(16),
    borderBottomLeftRadius: scaleWidth(16),
    paddingBottom: scaleHeight(10),
  },
  headerTitle: {
    color: colors.white,
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: scaleWidth(24),
    marginTop: Platform.OS === 'ios' ? scaleHeight(-8) : 0,
  },
});
