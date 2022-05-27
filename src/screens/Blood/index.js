import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import BloodItem from '@screens/Blood/components/BloodItem';
import SvgBlood from '@svgs/Blood/SvgBlood';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@ultis/routes';

const data = [
  {
    id: '0',
    blood: 'A',
  },
  {
    id: '1',
    blood: 'O',
  },
  {
    id: '2',
    blood: 'B',
  },
  {
    id: '3',
    blood: 'AB',
  },
  {
    id: '4',
    blood: 'Other',
  },
];

const Blood = memo(() => {
  const [isChoose, setChoose] = useState(1);

  const navigation = useNavigation();

  const onWeight = useCallback(() => {
    navigation.navigate(ROUTES.Weight);
  }, [navigation]);

  const onChoose = useCallback((index) => {
    setChoose(index);
  }, []);

  const renderBloodItem = useCallback(() => {
    return data.map((item, index) => {
      const { id, blood } = item;
      return (
        <BloodItem
          isChoose={isChoose}
          onChoose={onChoose}
          id={id}
          blood={blood}
          key={index}
        />
      );
    });
  }, [isChoose, onChoose]);

  return (
    <View style={styles.container}>
      <View style={styles.svgBlood}>
        <SvgBlood />
      </View>
      <View>{renderBloodItem()}</View>
      <ButtonPrimary
        style={styles.buttonPrimary}
        title={'next'}
        onPress={onWeight}
      />
    </View>
  );
});

export default Blood;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: scaleWidth(40),
  },
  svgBlood: {
    width: scaleWidth(48),
    height: scaleHeight(48),
    marginTop: scaleHeight(34),
    marginBottom: scaleHeight(110),
    backgroundColor: colors.frame,
    borderRadius: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
  },
});
