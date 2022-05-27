import React, { memo, useCallback, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import SvgCalendar from '@svgs/MainPage/SvgCalendar';
import ButtonPrimary from '@components/ButtonPrimary';

const DATA = {
  desciption: 'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
  imgDoctor: require('@assets/AppointmentCalendar/01.png'),
  doctorName: 'John Smith',
  specialized: 'Cardiologist',
  rating: '5.0',
  title: 'The Advantages Of\nMinimal Repair Technique',
  location: '949 Satterfield Fort Suite 520',
  date: 'Jan 01, 2017',
  time: '12:00AM - 02:30PM',
  total: 393,
  orderServices: [
    {
      title: 'Overall examination',
      time: '55 mins',
      price: 150,
    },
    {
      title: 'Blood tests',
      time: '12 mins',
      price: 243,
    },
  ],
};

const AppointmentDetails = memo(({ navigation }) => {
  const [appointmentData, setAppointmentData] = useState(DATA);

  const {
    imgDoctor,
    doctorName,
    specialized,
    date,
    time,
    total,
    orderServices,
  } = appointmentData;

  const onReschedule = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCancelAppointment = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <View style={styles.infoView}>
        <Image style={styles.imgDoctor} source={imgDoctor} />
        <View>
          <Text style={styles.txtDoctorName}>{doctorName}</Text>
          <Text style={styles.txtSpecialized}>{specialized}</Text>
        </View>
      </View>
      <View style={styles.dateView}>
        <View style={styles.svgView}>
          <SvgCalendar color={colors.green} />
        </View>
        <Text style={styles.txtDate}>{date}</Text>
      </View>
      <View style={styles.timeView}>
        <View style={styles.svgView}>
          <SvgCalendar color={colors.green} />
        </View>
        <Text style={styles.txtTime}>{time}</Text>
      </View>
      <View style={styles.contentView}>
        <View style={styles.orderView}>
          <Text style={styles.txtOrderServices}>Order Services</Text>
        </View>
        <View>
          {orderServices.map((item, index) => {
            const { title, price, time } = item;
            return (
              <View key={index} style={styles.desciptionView}>
                <View style={styles.flexRow}>
                  <Text style={styles.textDescription}>{title}</Text>
                  <Text style={styles.price}>${price}</Text>
                </View>
                <Text style={styles.textTime}>{time}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.totalView}>
          <Text style={styles.txtTotal}>TOTAL</Text>
          <Text style={styles.txtTotal}>${total}</Text>
        </View>
      </View>
      <ButtonPrimary
        onPress={onReschedule}
        style={styles.btn1}
        title={'Reschedule'}
      />
      <ButtonPrimary
        onPress={onCancelAppointment}
        titleStyle={styles.txtBtn2}
        style={styles.btn2}
        title={'Cancel Appointment'}
      />
    </ScrollView>
  );
});

export default AppointmentDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  infoView: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginTop: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
    paddingVertical: scaleHeight(22),
    paddingHorizontal: scaleWidth(20),
    borderRadius: scaleWidth(8),
    alignItems: 'center',
  },
  imgDoctor: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(24),
    overflow: 'hidden',
    marginRight: scaleWidth(16),
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(27),
    color: colors.black1,
  },
  txtSpecialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: colors.brown,
  },
  dateView: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginTop: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
    paddingVertical: scaleHeight(8),
    paddingHorizontal: scaleWidth(8),
    borderRadius: scaleWidth(8),
    alignItems: 'center',
  },
  timeView: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginTop: scaleHeight(16),
    marginHorizontal: scaleWidth(24),
    paddingVertical: scaleHeight(8),
    paddingHorizontal: scaleWidth(8),
    borderRadius: scaleWidth(8),
    alignItems: 'center',
  },
  svgView: {
    backgroundColor: colors.pageBackGround,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtDate: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    letterSpacing: 0.3,
    lineHeight: scaleHeight(29),
    color: colors.black1,
    marginLeft: scaleWidth(17),
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    letterSpacing: 0.3,
    lineHeight: scaleHeight(27),
    color: colors.black1,
    marginLeft: scaleWidth(17),
  },
  contentView: {
    backgroundColor: colors.white,
    marginTop: scaleHeight(16),
    marginBottom: scaleHeight(32),
    marginHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(8),
  },
  orderView: {
    borderBottomWidth: 1,
    borderColor: colors.line,
  },
  txtOrderServices: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.black1,
    marginLeft: scaleWidth(17),
    marginBottom: scaleHeight(11),
    marginTop: scaleHeight(16),
  },
  desciptionView: {
    borderBottomWidth: 1,
    borderColor: colors.line,
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
  },
  textDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    color: colors.brown1,
  },
  price: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    color: colors.black1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(22),
    color: colors.classicBlue,
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
  },
  txtTotal: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: colors.black1,
    textTransform: 'uppercase',
  },
  btn1: {
    marginHorizontal: scaleWidth(40),
    width: scaleWidth(295),
    alignSelf: 'center',
  },
  btn2: {
    marginHorizontal: scaleWidth(40),
    width: scaleWidth(295),
    alignSelf: 'center',
    backgroundColor: colors.pageBackGround,
    marginTop: scaleHeight(6),
    marginBottom: scaleHeight(16),
  },
  txtBtn2: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.classicBlue,
  },
});
