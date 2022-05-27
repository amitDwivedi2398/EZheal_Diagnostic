import React, { memo, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';
import InputButton from '@screens/CreateAccount/components/InputButton';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const FindHospital = memo(() => {
  const onChooseHospital = useCallback(() => {}, []);
  const onDoctor = useCallback(() => {}, []);
  const onDate = useCallback(() => {}, []);
  const onTime = useCallback(() => {}, []);
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>How can we take care yourself?</Text>
      <InputButton onPress={onChooseHospital} title={'Choose Hospital'} />
      <InputButton
        style={styles.inputButton}
        onPress={onDoctor}
        title={'Doctor'}
      />
      <InputButton style={styles.inputButton} onPress={onDate} title={'Date'} />
      <InputButton style={styles.inputButton} onPress={onTime} title={'Time'} />
      <ButtonPrimary style={styles.buttonPrimacy} title={'Find Now'} />
    </View>
  );
});

export default FindHospital;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(28),
    fontWeight: '700',
    lineHeight: scaleHeight(36),
    marginTop: scaleHeight(36),
    marginHorizontal: scaleWidth(40),
    color: colors.brown,
    marginBottom: scaleHeight(39),
  },
  inputButton: {
    marginTop: scaleHeight(24),
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(79),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
  },
});
