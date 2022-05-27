import React, { memo, useCallback, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import keyExtractor from '@ultis/keyExtractor';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { scaleHeight } from '@ultis/size';
import IndicatorItem from '@screens/Indicator/components/IndicatorItem';

const INDICATORDATA = [
  {
    imgIndicator: require('@assets/Indicator/img.png'),
    nameIndicator: 'Weight',
    desciprion: '+2kg this week',
  },
  {
    imgIndicator: require('@assets/Indicator/img1.png'),
    nameIndicator: 'Foot Step',
    desciprion: '25,679 steps this week',
  },
  {
    imgIndicator: require('@assets/Indicator/img2.png'),
    nameIndicator: 'Glueco',
    desciprion: 'Tracking your glueco',
  },
  {
    imgIndicator: require('@assets/Indicator/img3.png'),
    nameIndicator: 'Desinfectant',
    desciprion: 'Tracking your eye-sight',
  },
  {
    imgIndicator: require('@assets/Indicator/img4.png'),
    nameIndicator: 'Desinfectant',
    desciprion: 'Tracking you hearing-aid',
  },
  {
    imgIndicator: require('@assets/Indicator/img5.png'),
    nameIndicator: 'Weight',
    desciprion: 'That good now!',
  },
];

const Indicator = memo(() => {
  const [indicatorData, setIndicatorData] = useState(INDICATORDATA);

  const renderItem = useCallback(({ item }) => {
    const { imgIndicator, nameIndicator, desciprion } = item;
    return (
      <IndicatorItem
        imgIndicator={imgIndicator}
        nameIndicator={nameIndicator}
        desciprion={desciprion}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={indicatorData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + scaleHeight(55),
  },
});
