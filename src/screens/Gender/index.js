import React, { memo, useCallback } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  animatedStyles,
  scrollInterpolator,
} from '@screens/Gender/components/Animation';
import GenderItem from '@screens/Gender/components/GenderItem';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@ultis/routes';
import SvgWomen from '@svgs/Gender/SvgWomen';
import SvgOther from '@svgs/Gender/SvgOther';
import SvgMen from '@svgs/Gender/SvgMen';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.55);

const data = [
  {
    Svg: <SvgOther />,
    gender: 'Other',
  },
  {
    Svg: <SvgWomen />,
    gender: 'Women',
  },
  {
    Svg: <SvgMen />,
    gender: 'Men',
  },
];

const Gender = memo(() => {
  const navigation = useNavigation();

  const onBirthDay = useCallback(() => {
    navigation.navigate(ROUTES.BirthDay);
  }, [navigation]);

  const renderItem = ({ item }) => {
    const { Svg, gender } = item;
    return <GenderItem Svg={Svg} gender={gender} />;
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        firstItem={1}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        activeSlideAlignment={'center'}
        inactiveSlideOpacity={0.1}
      />
      <Text style={styles.txtIam}>I am a</Text>
      <ButtonPrimary
        style={styles.buttonPrimary}
        title={'Next'}
        onPress={onBirthDay}
      />
    </View>
  );
});

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  carouselContainer: {
    paddingTop: scaleHeight(100),
    backgroundColor: colors.white,
  },
  txtIam: {
    position: 'absolute',
    top: scaleHeight(40),
    alignSelf: 'center',
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
  },
  buttonPrimary: {
    width: scaleWidth(295),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
    marginHorizontal: scaleWidth(40),
  },
});
