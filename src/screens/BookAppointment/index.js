import React, { memo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgVideo from '@svgs/SvgVideo';
import SvgMessage from '@svgs/SvgMessage';
import FONTS from '@ultis/fonts';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import ROUTES from '@ultis/routes';
import ButtonPrimary from '@components/ButtonPrimary';
import TimeBookItem from '@screens/BookAppointment/Components/TimeBookItem';
import SvgDoctorImg from '@svgs/BookAppointment/SvgDoctorImg';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const DATA = {
  imgDoctor: require('@assets/BookAppointment/Doctor.png'),
  doctorName: 'Alexander Wolfe',
};

const TIMEBOOKDATA = ['10:00 AM', '11:30 AM', '13:20 AM'];

const BookAppointment = memo(({ navigation }) => {
  const date = moment().format();
  const [bookAppointmentData, setBookAppointmentData] = useState(DATA);
  const [bookTimeData, setBookTimeData] = useState(TIMEBOOKDATA);
  const [dateSelect, setDateSelect] = useState(date);
  const [active, setActive] = useState(1);

  const onChoose = useCallback((index) => {
    setActive(index);
  }, []);

  const onVideoCall = useCallback(() => {
    navigation.navigate(ROUTES.VideoCall);
  }, [navigation]);

  const onMessage = useCallback(() => {
    navigation.navigate(ROUTES.DoctorMessage);
  }, [navigation]);

  const onBookNow = useCallback(() => {}, []);

  const markedDay = {
    [dateSelect.dateString]: {
      selected: true,
      marked: true,
      dotColor: colors.blueAccent,
    },
  };

  LocaleConfig.locales.en = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };
  LocaleConfig.defaultLocale = 'en';

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.topview}>
        <TouchableOpacity
          onPress={onVideoCall}
          activeOpacity={0.6}
          style={styles.svgVideo}>
          <SvgVideo />
        </TouchableOpacity>
        <View style={styles.svgDoctorImg}>
          <SvgDoctorImg />
        </View>
        <TouchableOpacity
          onPress={onMessage}
          activeOpacity={0.6}
          style={styles.svgMessage}>
          <SvgMessage />
        </TouchableOpacity>
      </View>
      <Text style={styles.doctorName}>{bookAppointmentData.doctorName}</Text>
      <Calendar
        style={styles.calendarView}
        firstDay={1}
        startFromMonday={true}
        current={date}
        headerStyle={styles.headerStyle}
        markedDates={markedDay}
        onDayPress={(dateChose) => setDateSelect(dateChose)}
        theme={{
          arrowColor: '#FFF',
          'stylesheet.calendar.header': {
            week: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: scaleWidth(16),
              marginBottom: scaleHeight(8),
            },
            dayHeader: {
              color: colors.white,
              fontFamily: FONTS.HIND.SemiBold,
              fontSize: scaleHeight(14),
              textAlign: 'center',
            },
          },
          calendarBackground: colors.white,
          selectedDayBackgroundColor: colors.blueAccent,
          textDayFontFamily: FONTS.HIND.Regular,
          textDayFontSize: scaleHeight(12),
          textMonthFontFamily: FONTS.HIND.Regular,
          textMonthFontWeight: '500',
          textMonthFontSize: scaleHeight(18),
          textDayHeaderFontFamily: FONTS.HIND.Regular,
          textDayHeaderFontSize: scaleHeight(12),
          monthTextColor: colors.white,
          dayTextColor: colors.black2,
          todayTextColor: colors.blueAccent,
          textDisabledColor: '#C8C8C8',
          selectedDayTextColor: colors.white,
        }}
      />
      <View style={styles.timeView}>
        {bookTimeData.map((item, index) => {
          return (
            <TimeBookItem
              active={active}
              onChoose={onChoose}
              key={index}
              id={index}
              time={item}
            />
          );
        })}
      </View>
      <ButtonPrimary
        style={styles.buttonPrimary}
        onPress={onBookNow}
        title={'Book Now'}
      />
    </ScrollView>
  );
});
export default BookAppointment;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  topview: {
    flexDirection: 'row',
    marginTop: scaleHeight(32),
    marginHorizontal: scaleWidth(44),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svgVideo: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgMessage: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgDoctorImg: {
    width: scaleWidth(120),
    height: scaleWidth(120),
    borderRadius: scaleWidth(60),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorName: {
    textAlign: 'center',
    marginTop: scaleHeight(10),
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
    marginBottom: scaleHeight(22),
  },
  calendarView: {
    marginHorizontal: scaleWidth(16),
    borderRadius: scaleWidth(6),
    overflow: 'hidden',
  },
  headerStyle: {
    backgroundColor: colors.blueAccent,
    marginHorizontal: scaleWidth(-6),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(24),
  },
  timeView: {
    flexDirection: 'row',
    marginTop: scaleHeight(16),
    marginHorizontal: scaleWidth(16),
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
});
