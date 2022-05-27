import React, { memo, useState, useCallback } from 'react';
import { Dimensions, View, Text, LayoutAnimation } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import SvgNurse from '@svgs/SvgNurse';
import PlanItem from '@screens/PricePlan/components/PlanItem';
import Carousel from 'react-native-snap-carousel';
import { scaleHeight, scaleWidth } from '@ultis/size';
import keyExtractor from '@ultis/keyExtractor';
import FONTS from '@ultis/fonts/index';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ButtonPrimary from '@components/ButtonPrimary';
import ROUTES from '@ultis/routes';

const PRICEPLANDATA = [
  {
    color: colors.yellow,
    svg: <SvgNurse />,
    price: '68.00',
    frequency: 'per month',
    description: [
      '24h Call Doctor',
      '16 Book Appoiment',
      '32 Expert Doctors',
      '32 Expert Doctors',
      'Generic Drugs',
    ],
  },
  {
    color: colors.green,
    svg: <SvgNurse />,
    price: '68.00',
    frequency: 'per month',
    description: [
      '24h Call Doctor',
      '16 Book Appoiment',
      '32 Expert Doctors',
      '32 Expert Doctors',
      'Generic Drugs',
    ],
  },
  {
    color: colors.orange,
    svg: <SvgNurse />,
    price: '68.00',
    frequency: 'per month',
    description: [
      '24h Call Doctor',
      '16 Book Appoiment',
      '32 Expert Doctors',
      '32 Expert Doctors',
      'Generic Drugs',
    ],
  },
];

const PLANDATA = ['Basic', 'Standard', 'Premium'];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.76);

const PricePlan = memo(({ navigation }) => {
  const [pricePlanData, setPricePlanData] = useState(PRICEPLANDATA);
  const [planDate, setPlanDate] = useState(PLANDATA);
  const [id, setId] = useState(1);

  const renderItem = useCallback(({ item }) => {
    const { color, svg, price, frequency, description } = item;
    return (
      <PlanItem
        color={color}
        svg={svg}
        price={price}
        frequency={frequency}
        description={description}
      />
    );
  }, []);

  const onUpdate = useCallback(() => {
    navigation.navigate(ROUTES.Billing);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Carousel
        firstItem={1}
        data={pricePlanData}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        inactiveSlideOpacity={1}
        onSnapToItem={(index) => setId(index)}
        keyExtractor={keyExtractor}
      />
      <View style={styles.tabView}>
        {planDate.map((item, index) => {
          const backgroundColor =
            id === index ? colors.classicBlue : colors.white;
          const textColor = id === index ? colors.white : colors.dimGray;
          return (
            <View
              key={index}
              style={[styles.tabStyle, { backgroundColor: backgroundColor }]}>
              <Text style={[styles.txtLabel, { color: textColor }]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
      <ButtonPrimary
        style={styles.buttonPrimary}
        title={'Upgrade Now'}
        onPress={onUpdate}
      />
    </View>
  );
});

export default PricePlan;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  carouselContainer: {
    paddingTop: scaleHeight(100),
  },
  tabView: {
    backgroundColor: colors.white,
    width: scaleWidth(327),
    height: scaleHeight(40),
    position: 'absolute',
    alignSelf: 'center',
    top: scaleHeight(16),
    borderRadius: scaleWidth(20),
    flexDirection: 'row',
  },
  tabStyle: {
    width: scaleWidth(109),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(20),
  },
  txtLabel: {
    fontFamily: FONTS.HIND.regular,
    fontWeight: '500',
    fontSize: scaleHeight(13),
    lineHeight: scaleHeight(18),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
    alignSelf: 'center',
  },
});
