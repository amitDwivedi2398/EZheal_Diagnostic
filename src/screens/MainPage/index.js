import React, { memo, useState, useCallback } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import TopicItem from '@screens/MainPage/components/TopicItem';
import SvgNurse from '@svgs/SvgNurse';
import SvgDoctor from '@svgs/MainPage/SvgDoctor';
import SvgHospital from '@svgs/MainPage/SvgHospital';
import SvgCalendar from '@svgs/MainPage/SvgCalendar';
import SvgPoint from '@svgs/MainPage/SvgPoint';
import ServiceItem from '@screens/MainPage/components/ServiceItem';
import ROUTES from '@ultis/routes';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { Button, Card } from 'react-native-paper';
import SvgExrcise from '@svgs/MainPage/SvgExercise';
import SvgExercise from '@svgs/MainPage/SvgExercise';
import SvgChat from '@svgs/MainPage/SvgChat';
import SvgDiet from '@svgs/MainPage/SvgDiet';
import SvgSocial from '@svgs/MainPage/SvgSocial';
import Category from './components/Category';
import SvgBlood from '@svgs/Blood/SvgBlood';
import SvgMedical from '@svgs/MainPage/SvgMedical';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgLocation from '@svgs/MainPage/SvgLocation';
const TOPICDATA = [
  {
    color: colors.green,
    svg: <SvgNurse />,
    title: 'Stay Home\nCovid-19',
  },
  {
    color: colors.orange,
    svg: <SvgNurse />,
    title: 'Stay Home\nCovid-19',
  },
  {
    color: colors.classicBlue,
    svg: <SvgNurse />,
    title: 'Stay Home\nCovid-19',
  },
];

const MainPage = memo(({ navigation }) => {
  const [topicData, setTopicData] = useState(TOPICDATA);

  const onFindDoctor = useCallback(() => {
    navigation.navigate(ROUTES.FindDoctors);
  }, [navigation]);

  const onFindHospital = useCallback(() => {
    navigation.navigate(ROUTES.FindHospital);
  }, [navigation]);

  const onAppointment = useCallback(() => {
    navigation.navigate(ROUTES.AppointmentList);
  }, [navigation]);

  const onPriceServices = useCallback(() => {
    navigation.navigate(ROUTES.PricePlan);
  }, [navigation]);

  const renderTopicItem = () => {
    return topicData.map((item, index) => {
      const { color, svg, title } = item;
      return <TopicItem svg={svg} title={title} color={color} key={index} />;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}>
        {/* <View style={styles.location}>
          <SvgLocation style={styles.img} />
          <Text style={styles.txtHi}> Current Address</Text>
        </View>
        <Text style={styles.txtToday}>
          80,Behind C21 Mall, Scheme 54 PU4,Indore
        </Text> */}
        <ScrollView
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          {renderTopicItem()}
        </ScrollView>
        <View style={styles.flexWrap}>
          <View style={styles.counter}>
            <ServiceItem
              // onPress={onFindDoctor}
              // onPress={Symptoms}
              svg={<SvgPoint color={colors.red} />}
              title={'Total Patient'}
              content={'234'}
            />
          </View>
          <View style={styles.counter1}>
            <ServiceItem
              // onPress={onFindHospital}
              // onPress={Diagnostic}
              svg={<SvgPoint color={colors.blueAccent} />}
              title={'Total Appointment'}
              content={'9332'}
            />
          </View>
          <View style={styles.counter2}>
            <ServiceItem
              // onPress={onAppointment}
              // onPress={Symptoms}
              svg={<SvgPoint color={colors.green} />}
              title={'Prescription'}
              content={'346'}
            />
          </View>
          <View style={styles.counter3}>
            <ServiceItem
              // onPress={onPriceServices}
              // onPress={onAppointment}
              // onPress={Symptoms}
              svg={<SvgPoint color={colors.red} />}
              title={'Massager'}
              content={'346'}
            />
          </View>

          {/* <ServiceItem
            onPress={onAppointment}
            svg={<SvgCalendar />}
            title={'Appointment'}
            content={'05 doctors'}
          /> */}
          {/* <ServiceItem
            onPress={onPriceServices}
            svg={<SvgPoint />}
            title={'Price Services'}
            content={'03 Plans'}
          /> */}
        </View>
        {/* <View>
          <Text style={styles.patient}>Patient Bot</Text>
          <View style={styles.flexWrap}>
            <ServiceItem
              // onPress={onAppointment}
              onPress={ChatBot}
              svg={<SvgChat />}
              title={'Chat Bot'}
              // content={'05 doctors'}
            />
            <ServiceItem
              // onPress={onAppointment}
              onPress={ExerciseVideos}
              svg={<SvgExercise />}
              title={'Exercise Bot'}
              // content={'05 doctors'}
            />
            <ServiceItem
              // onPress={onAppointment}
              onPress={Symptoms}
              svg={<SvgDiet />}
              title={'Diet Bot'}
              // content={'05 doctors'}
            />
            <ServiceItem
              // onPress={onAppointment}
              onPress={GroupChat}
              svg={<SvgSocial />}
              title={'Social Bot'}
              // content={'05 doctors'}
            />
          </View>
        </View>
        <View>
          <Text style={styles.patient}>Category</Text>
          <View style={styles.flexWrap1}>
            <ScrollView horizontal={true}>
              <Category svg={<SvgBlood />} title={'Back Pain'} />
              <Category svg={<SvgBlood />} title={'Blood Pressure'} />
              <Category svg={<SvgBlood />} title={'Chest Chekup'} />
              <Category svg={<SvgBlood />} title={'Hair Fall'} />
              <Category svg={<SvgBlood />} title={'Head Ache'} />
            </ScrollView>
          </View>
        </View>
        <View>
          <Text style={styles.patient1}>Medical Shop</Text>
          <View style={styles.flexWrap2}>
            <ScrollView horizontal={true}>
              <TouchableOpacity>
                <Card style={styles.card}>
                  <Image
                    style={styles.imgMedical}
                    source={require('../../assets/MainPage/medical.png')}
                  />
                  <Card.Actions></Card.Actions>
                  <Button>Medi World</Button>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card style={styles.card}>
                  <Image
                    style={styles.imgMedical}
                    source={require('../../assets/MainPage/medical.png')}
                  />
                  <Card.Actions></Card.Actions>
                  <Button>Medi World</Button>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card style={styles.card}>
                  <Image
                    style={styles.imgMedical}
                    source={require('../../assets/MainPage/medical.png')}
                  />
                  <Card.Actions></Card.Actions>
                  <Button>Medi World</Button>
                </Card>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
});
export default MainPage;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  txtHi: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(38),
    color: colors.blue,
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(30),
    color: colors.brown,
    marginLeft: scaleWidth(40),
    marginBottom: scaleHeight(20),
  },
  contentContainerStyle: {
    paddingLeft: scaleWidth(16),
    marginBottom: scaleHeight(24),
  },
  contentContainerFlatList: {
    paddingBottom: scaleHeight(80),
  },
  header: {
    backgroundColor: colors.classicBlue,
    borderBottomLeftRadius: scaleWidth(16),
    borderBottomRightRadius: scaleWidth(16),
    height: getStatusBarHeight() + scaleHeight(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '800',
    fontSize: scaleHeight(17),
    color: colors.bluePrimary,
  },
  btnClose: {
    position: 'absolute',
    bottom: scaleHeight(11),
    left: scaleWidth(16),
  },
  btnOption: {
    position: 'absolute',
    bottom: scaleHeight(11),
    right: scaleWidth(16),
  },
  svgCarer: {
    position: 'absolute',
    bottom: scaleHeight(11),
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexWrap1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.white,
  },
  flexWrap2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  contentStyle: {
    paddingTop: scaleHeight(21),
    paddingBottom: getBottomSpace() + scaleHeight(90),
  },
  patient: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(38),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
  },
  patient1: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(38),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
    marginTop: scaleWidth(20),
  },
  card: {
    borderRadius: 25,
    margin: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    marginLeft: scaleWidth(10),
  },
  imgMedical: {
    width: scaleWidth(250),
    height: scaleHeight(150),
  },
  counter: {
    width: scaleWidth(163),
    borderRadius: scaleWidth(16),
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(17),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  counter1: {
    backgroundColor: colors.blue,
    width: scaleWidth(163),
    borderRadius: scaleWidth(16),
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter2: {
    backgroundColor: colors.green,
    width: scaleWidth(163),
    borderRadius: scaleWidth(16),
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter3: {
    backgroundColor: colors.brown1,
    width: scaleWidth(163),
    borderRadius: scaleWidth(16),
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
