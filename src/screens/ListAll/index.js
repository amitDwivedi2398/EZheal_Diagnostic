import React, { memo, useCallback, useState } from 'react';
import { View, FlatList, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import DoctorItem from '@components/DoctorItem';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ROUTES from '@ultis/routes';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import FONTS from '@ultis/fonts';

const LISTDOCTORSDATA = [
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/02.png'),
    doctorName: 'Jeremy Porter',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/03.png'),
    doctorName: 'Cecelia Boone',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/04.png'),
    doctorName: 'Jesse Burgess',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
];

const ListAll = memo(({ navigation }) => {
  const [listDoctorsData, setListDoctorsData] = useState(LISTDOCTORSDATA);
  const [visible, setVisible] = useState(false);

  const onTouchOutside = useCallback(() => {
    setVisible(false);
  }, []);

  const onDoctorProfile = useCallback(() => {
    navigation.navigate(ROUTES.DoctorProfile);
  }, [navigation]);

  const onCallDoctor = useCallback(() => {
    navigation.navigate(ROUTES.CallDoctor);
  }, [navigation]);

  const onDoctorMessage = useCallback(() => {
    navigation.navigate(ROUTES.DoctorMessage);
  }, [navigation]);

  const onLocation = useCallback(() => {
    navigation.navigate(ROUTES.MapsDoctors);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }) => {
      const { imgDoctor, doctorName, specialized, rating, location } = item;
      return (
        <DoctorItem
          activeRemove={true}
          imgDoctor={imgDoctor}
          doctorName={doctorName}
          specialized={specialized}
          rating={rating}
          location={location}
          onRemove={() => setVisible(!visible)}
          onPress={onDoctorProfile}
          onCall={onCallDoctor}
          onMessage={onDoctorMessage}
          onLocation={onLocation}
        />
      );
    },
    [onDoctorProfile, onDoctorMessage, onCallDoctor, visible],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listDoctorsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <ConfirmDialog
        dialogStyle={styles.dialogStyle}
        title="Delete Doctor"
        message="Do you want delele doctor
        Jose Holland on list?"
        visible={visible}
        messageStyle={styles.messageStyle}
        onTouchOutside={onTouchOutside}
        positiveButton={{
          title: 'Done',
          onPress: () => setVisible(false),
          style: styles.positiveButton,
          titleStyle: styles.txtPositiveButton,
        }}
        negativeButton={{
          title: 'Cancel',
          onPress: () => setVisible(false),
          style: styles.negativeButton,
          titleStyle: styles.txtNegativeButton,
        }}
      />
    </View>
  );
});
export default ListAll;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
    paddingRight: scaleWidth(24),
  },
  contentContainerStyle: {
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(130)
        : scaleHeight(130),
    paddingBottom: scaleHeight(84),
  },
  txtTitleAlert: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    color: colors.semiBlack,
  },
  dialogStyle: {
    width: scaleWidth(340),
    height: scaleHeight(190),
    borderRadius: scaleWidth(16),
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: scaleHeight(25),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.1,
  },
  messageStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.dimGray,
    textAlign: 'center',
    marginHorizontal: scaleWidth(50),
  },
  txtPositiveButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(14),
    color: colors.classicBlue,
    textAlign: 'center',
  },
  txtNegativeButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(14),
    color: colors.white,
    textAlign: 'center',
  },
  negativeButton: {
    backgroundColor: colors.classicBlue,
    height: scaleHeight(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  positiveButton: {
    backgroundColor: colors.white,
    height: scaleHeight(55),
  },
});
