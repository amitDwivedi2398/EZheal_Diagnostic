import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import ButtonsSecondary from '@components/ButtonsSecondary';
import RLSlider from '@components/RLSlider';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '@ultis/routes';
import SvgTapeMeasure from '@svgs/SvgTapeMeasure';

const Height = memo(({ navigation }) => {
  const [enable, setEnable] = useState(false);
  const [unitOfMeasure, setUnitOfMeasure] = useState('cm');

  const onMainPage = useCallback(() => {
    navigation.navigate(ROUTES.CreatAccount);
  }, [navigation]);

  const onInch = useCallback(() => {
    setEnable(true);
    setUnitOfMeasure('inch');
  }, []);

  const onCm = useCallback(() => {
    setEnable(false);
    setUnitOfMeasure('cm');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.svgScale}>
          <SvgTapeMeasure width={24} height={24} color={colors.orange} />
        </View>
        <ButtonsSecondary
          enable={enable}
          labelButton1={'inch'}
          labelButton2={'cm'}
          onPressButton1={onInch}
          onPressButton2={onCm}
        />
      </View>
      <RLSlider
        unitOfMeasure={unitOfMeasure}
        minValue={0}
        maxValue={3000}
        value={4000}
        ratio={1}
      />
      <ButtonPrimary
        onPress={onMainPage}
        title={'Update'}
        style={styles.buttonPrimary}
      />
    </View>
  );
});

export default Height;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scaleWidth(32),
    marginRight: scaleWidth(40),
    marginTop: scaleHeight(34),
    alignItems: 'center',
  },
  svgScale: {
    height: scaleWidth(48),
    width: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
  },
});
