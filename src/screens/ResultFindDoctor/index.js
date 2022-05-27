import React, { memo, useCallback, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';
import DoctorItem from '@components/DoctorItem';
import keyExtractor from '@ultis/keyExtractor';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const DATA_NAVIGAGTE = {
  location: 'New York',
};

const RESULTDATA = [
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

const ResultFindDoctor = memo(() => {
  const [data, setData] = useState(DATA_NAVIGAGTE);
  const [resultData, setResultData] = useState(RESULTDATA);

  const listHeaderComponent = useCallback(() => {
    return (
      <Text style={styles.txtFound}>
        Found <Text style={styles.txtNumberResult}> {resultData.length} </Text>
        doctors near
        <Text style={styles.txtPlace}> {data.location} </Text>
      </Text>
    );
  }, [data.location, resultData.length]);

  const renderItem = useCallback(({ item }) => {
    const { imgDoctor, doctorName, specialized, rating, location } = item;
    return (
      <DoctorItem
        imgDoctor={imgDoctor}
        doctorName={doctorName}
        specialized={specialized}
        rating={rating}
        location={location}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={resultData}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

export default ResultFindDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
    paddingRight: scaleWidth(24),
  },
  txtFound: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.brown,
    marginBottom: scaleHeight(16),
    marginLeft: scaleWidth(24),
  },
  txtNumberResult: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.black1,
  },
  txtPlace: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.black1,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(16),
    paddingBottom: getBottomSpace(),
  },
});
