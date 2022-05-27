import React, { memo, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import SvgNotification from '@svgs/SvgNotification';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import SvgHeartBlue from '@svgs/UserProfile/SvgHeartBlue';
import UserProfileItem from '@screens/UserProfile/components/UserProfileItem';
import SvgMultiBlood from '@svgs/UserProfile/SvgMultiBlood';
import SvgTapeMeasure from '@svgs/SvgTapeMeasure';
import SvgScale from '@svgs/SvgScale';
import UserNotificationItem from '@screens/UserProfile/components/UserNotificationItem';
import TopicItem from '@components/TopicItem';
import SvgMyHeart from '@svgs/DoctorInformation/SvgMyHeart';
import SvgFire from '@svgs/SvgFire';
import SvgStar from '@svgs/AppointmentList/SvgStar';
import ROUTES from '@ultis/routes';
import SvgMenu from '@svgs/SvgMenu';
import SvgAvatar from '@svgs/Menu/SvgAvatar';
import SvgDoctor from '@svgs/UserProfile/SvgDoctor';

const USERDATA = {
  userName: 'Virginia Fowler',
  career: 'Art Director',
  imgUser: require('@assets/UserProfile/Avatar.png'),
};

const USERNOTIFICATIONDATA = {
  Svg: <SvgDoctor />,
  title: 'Checking your healthcare',
  doctorName: 'Dr. Ann Carlson',
  time: '8am - 9am',
};

const UserProfile = memo(({ navigation }) => {
  const [userData, setUserData] = useState(USERDATA);
  const [notiData, setNotiData] = useState(USERNOTIFICATIONDATA);

  const onMenu = useCallback(() => {
    navigation.navigate(ROUTES.Menu, { index: 5 });
  }, [navigation]);

  const onNotification = useCallback(() => {}, []);

  const onGoalSettings = useCallback(() => {
    navigation.navigate(ROUTES.GoalSettings);
  }, [navigation]);

  const onDoctorFavorites = useCallback(() => {}, []);

  const onInsurance = useCallback(() => {
    navigation.navigate(ROUTES.Insurance);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.btnView}>
          <TouchableOpacity onPress={onMenu} style={styles.svgOption}>
            <SvgMenu />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onNotification}
            style={styles.svgNotification}>
            <SvgNotification />
            <View style={styles.numberNotification} />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtUserName}>{userData.userName}</Text>
        <Text style={styles.txtCareer}>{userData.career}</Text>
        <SvgAvatar style={styles.svgAvatar} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.userProfile}>
          <UserProfileItem
            title={'Age'}
            Svg={<SvgHeartBlue />}
            parameter={'24'}
            unitOfMeasure={'year old'}
          />
          <UserProfileItem
            title={'Blood'}
            Svg={<SvgMultiBlood />}
            parameter={'AB'}
          />
          <UserProfileItem
            title={'Height'}
            Svg={<SvgTapeMeasure />}
            parameter={'180'}
            unitOfMeasure={'cm'}
          />
          <UserProfileItem
            title={'Weight'}
            Svg={<SvgScale />}
            parameter={'64'}
            unitOfMeasure={'kg'}
          />
          <View style={styles.lineVertical} />
          <View style={styles.lineHorizontal} />
        </View>
        <UserNotificationItem
          Svg={notiData.Svg}
          title={notiData.title}
          doctorName={notiData.doctorName}
          time={notiData.time}
        />
        <TopicItem
          Svg={<SvgFire />}
          title={'Goal Settings'}
          onPress={onGoalSettings}
        />
        <TopicItem
          Svg={<SvgMyHeart color={colors.orange} width={24} height={24} />}
          title={'Doctor Favorites'}
          onPress={onDoctorFavorites}
        />
        <TopicItem
          Svg={<SvgStar color={colors.orange} width={24} height={24} />}
          title={'Insurance'}
          onPress={onInsurance}
        />
      </ScrollView>
    </View>
  );
});
export default UserProfile;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(94),
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    paddingBottom: scaleHeight(26),
    backgroundColor: colors.blueAccent,
    borderBottomLeftRadius: scaleWidth(24),
    borderBottomRightRadius: scaleWidth(24),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtUserName: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.white,
    marginLeft: scaleWidth(32),
    marginTop: scaleHeight(31),
  },
  txtCareer: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.white,
    marginTop: scaleHeight(4),
    marginLeft: scaleWidth(32),
    textTransform: 'uppercase',
  },
  svgAvatar: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    borderRadius: scaleWidth(32),
    position: 'absolute',
    right: scaleWidth(24),
    bottom: scaleHeight(21),
    overflow: 'hidden',
  },
  svgOption: {
    width: scaleWidth(50),
    height: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgNotification: {
    width: scaleWidth(50),
    height: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberNotification: {
    width: scaleWidth(8),
    height: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondRed,
    borderRadius: scaleWidth(4),
    position: 'absolute',
    top: 12,
    right: 17,
  },
  userProfile: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(16),
    marginHorizontal: scaleWidth(16),
    marginTop: scaleHeight(16),
    paddingTop: scaleHeight(16),
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: scaleHeight(208),
    marginBottom: scaleHeight(16),
  },
  lineVertical: {
    width: 1,
    height: scaleHeight(170),
    backgroundColor: colors.pageBackGround,
    alignSelf: 'center',
    position: 'absolute',
    right: scaleWidth(171),
    top: scaleHeight(24),
  },
  lineHorizontal: {
    width: scaleWidth(295),
    left: scaleWidth(24),
    height: 1,
    backgroundColor: colors.pageBackGround,
    alignSelf: 'center',
    position: 'absolute',
  },
});
