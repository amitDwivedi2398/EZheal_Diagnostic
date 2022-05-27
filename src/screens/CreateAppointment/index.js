import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgCalendar from '@svgs/MainPage/SvgCalendar';
import FONTS from '@ultis/fonts/index';
import InputButton from '@screens/CreateAccount/components/InputButton';
import ButtonPrimary from '@components/ButtonPrimary';
import ROUTES from '@ultis/routes';

const CreateAppointment = memo(({ navigation }) => {
  const onPress = useCallback(() => {}, []);

  const onBookNow = useCallback(() => {
    navigation.navigate(ROUTES.AppointmentDetails);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.svgView}>
        <SvgCalendar color={colors.secondBlue} />
      </View>
      <Text style={styles.txtTitle}>{'Do you want book\n'}appointment?</Text>
      <InputButton onPress={onPress} title={'Your Location'} />
      <InputButton
        onPress={onPress}
        style={styles.input}
        title={'Specialist'}
      />
      <InputButton onPress={onPress} style={styles.input} title={'Date'} />
      <InputButton onPress={onPress} style={styles.input} title={'Time'} />
      <ButtonPrimary
        style={styles.btn}
        title={'Book Now'}
        onPress={onBookNow}
      />
    </View>
  );
});

export default CreateAppointment;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgView: {
    backgroundColor: colors.pageBackGround,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: scaleHeight(35),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
    marginTop: scaleHeight(24),
    marginBottom: scaleHeight(32),
    textAlign: 'center',
  },
  input: {
    marginTop: scaleHeight(24),
  },
  btn: {
    width: scaleWidth(295),
    marginTop: scaleHeight(32),
    alignSelf: 'center',
  },
});
