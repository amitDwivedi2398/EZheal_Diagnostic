import React, { memo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import SvgClose from '@svgs/Notification/SvgClose';
import SvgOption from '@svgs/Notification/SvgOption';
import SvgClient1 from '@svgs/Notification/SvgClient1';
import SvgClient2 from '@svgs/Notification/SvgClient2';
import SvgClient3 from '@svgs/Notification/SvgClient3';
import keyExtractor from '@ultis/keyExtractor';
import FONTS from '@ultis/fonts/index';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import NotificationItem from '@screens/Notification/components/NotificationItem';

const DATANOTIS = [
  {
    id: 0,
    name: 'Luke Casey',
    des: ' rate your work 5* \n' + '“Healer patient app UI KIT”',
    Svg: SvgClient1,
    active: true,
    time: '48 mins ago',
  },
  {
    id: 1,
    name: 'Luella Norton',
    des: 'follow you',
    Svg: SvgClient2,
    active: true,
    time: '6 hours ago',
    follow: true,
  },
  {
    id: 2,
    name: 'Dr. Luella Norton',
    des: 'send you in a comment in post ',
    Svg: SvgClient3,
    active: true,
    reply: true,
    time: '2 days ago',
  },
  {
    id: 3,
    name: 'Dr. Luke Casey',
    des: 'acceptn your book appointment ',
    Svg: SvgClient1,
    time: '48 mins ago',
  },
  {
    id: 5,
    name: 'Luke Casey',
    des: 'like your project \n' + '“Healer patient app UI KIT”',
    Svg: SvgClient1,
    time: '48 mins ago',
  },
];

const Notification = memo(({ navigation }) => {
  const [notificationData, setNotificationData] = useState(DATANOTIS);

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onOption = useCallback(() => {}, []);

  const renderItem = useCallback(({ item }) => {
    const { Svg, name, des, reply, time, follow, active, id } = item;
    return (
      <NotificationItem
        id={id}
        name={name}
        des={des}
        Svg={Svg}
        active={active}
        time={time}
        follow={follow}
        reply={reply}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Notification</Text>
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.6}
          style={styles.btnClose}>
          <SvgClose />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onOption}
          activeOpacity={0.6}
          style={styles.btnOption}>
          <SvgOption />
        </TouchableOpacity>
      </View>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={notificationData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});
export default Notification;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  header: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: scaleWidth(24),
    borderBottomRightRadius: scaleWidth(24),
    height:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(72)
        : scaleHeight(72),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    color: colors.semiBlack,
  },
  btnClose: {
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(28)
        : scaleHeight(28),
    left: scaleWidth(16),
  },
  btnOption: {
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(28)
        : scaleHeight(28),
    right: scaleWidth(16),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(16),
    paddingBottom: getBottomSpace(),
  },
});
