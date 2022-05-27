import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import AppointmentListTab from '@navigation/AppointmentListTab';
import { ScaledSheet } from 'react-native-size-matters';
import ButtonPrimary from '@components/ButtonPrimary';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '@ultis/routes';

const AppointmentList = memo(({ navigation }) => {
  const onCreateAppointment = useCallback(() => {
    navigation.navigate(ROUTES.CreateAppointment);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AppointmentListTab upcoming={2} past={14} />
      <ButtonPrimary
        onPress={onCreateAppointment}
        title={'Book Appointment'}
        style={styles.buttonPrimary}
      />
    </View>
  );
});

export default AppointmentList;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  buttonPrimary: {
    width: scaleWidth(297),
    alignSelf: 'center',
    marginBottom: getBottomSpace() + scaleHeight(8),
  },
});
