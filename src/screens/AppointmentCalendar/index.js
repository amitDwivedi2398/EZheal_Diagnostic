import React, { memo, useState, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import AppointmentItem from '@screens/AppointmentCalendar/components/AppointmentItem';
import keyExtractor from '@ultis/keyExtractor';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import CalendarItem from '@screens/AppointmentCalendar/components/CalendarItem';
import { widthScreen } from '@ultis/dimensions';
import FONTS from '@ultis/fonts';
import SvgDelete from '@svgs/ForgotPassword/SvgDelete';

const APPOINTMENTDATA = [
  {
    imgDoctor: require('@assets/AppointmentCalendar/01.png'),
    time: '11:00AM - 01:25PM',
    title: 'Periodic health checks',
    color: '#0084F4',
  },
  {
    imgDoctor: require('@assets/AppointmentCalendar/02.png'),
    time: '11:00AM - 01:25PM',
    title: 'Dentist checks',
    color: '#00C48C',
  },
  {
    imgDoctor: require('@assets/AppointmentCalendar/03.png'),
    time: '11:00AM - 01:25PM',
    title: 'Blood Test day',
    color: '#F23A56',
  },
  {
    imgDoctor: require('@assets/AppointmentCalendar/04.png'),
    time: '11:00AM - 01:25PM',
    title: 'Fix medical time',
    color: '#FFCF5C',
  },
  {
    imgDoctor: require('@assets/AppointmentCalendar/01.png'),
    time: '11:00AM - 01:25PM',
    title: 'Periodic health checks',
    color: '#0084F4',
  },
  {
    imgDoctor: require('@assets/AppointmentCalendar/02.png'),
    time: '11:00AM - 01:25PM',
    title: 'Dentist checks',
    color: '#00C48C',
  },
];

const AppointmentCalendar = memo(({ navigation }) => {
  const [appomentData, setAppointmentData] = useState(APPOINTMENTDATA);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(({ item }) => {
    const { imgDoctor, time, title, color } = item;
    return (
      <AppointmentItem
        style={styles.appointmentItem}
        imgDoctor={imgDoctor}
        time={time}
        title={title}
        color={color}
      />
    );
  }, []);

  const listHeaderComponent = useCallback(() => {
    return (
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Appoinment Calendar</Text>
        <CalendarItem />
        <TouchableOpacity
          onPress={onGoBack}
          activeOpacity={0.6}
          style={styles.svgDelete}>
          <SvgDelete width={10} height={10} />
        </TouchableOpacity>
      </View>
    );
  }, [onGoBack]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
        data={appomentData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default AppointmentCalendar;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  flatListView: {
    marginHorizontal: scaleWidth(24),
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
  header: {
    width: widthScreen,
    backgroundColor: colors.classicBlue,
    flex: 1,
    borderBottomLeftRadius: scaleWidth(16),
    borderBottomRightRadius: scaleWidth(16),
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(29)
        : scaleHeight(29),
    marginBottom: scaleHeight(16),
  },
  appointmentItem: {
    alignSelf: 'center',
  },
  svgDelete: {
    position: 'absolute',
    width: scaleWidth(40),
    height: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(18)
        : scaleHeight(18),
  },
  txtHeader: {
    color: colors.white,
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
