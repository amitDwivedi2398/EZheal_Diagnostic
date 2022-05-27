import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import ButtonPrimary from '@components/ButtonPrimary';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '@ultis/routes';
import colors from '@ultis/colors';

const BirthDay = memo(({ navigation }) => {
  const onBlood = useCallback(() => {
    navigation.navigate(ROUTES.Blood);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ButtonPrimary
        style={styles.buttonPrimary}
        title={'Next'}
        onPress={onBlood}
      />
    </View>
  );
});

export default BirthDay;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dateTimePicker: {
    backgroundColor: 'red',
    flex: 1,
  },
  buttonPrimary: {
    width: scaleWidth(295),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
    marginHorizontal: scaleWidth(40),
  },
});
