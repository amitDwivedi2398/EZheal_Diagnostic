import React, { memo, useState, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DeviceItem from '@screens/Devices/components/DeviceItem';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight } from '@ultis/size';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const DEVICESDATA = [
  {
    imgDivice: require('@assets/Devices/img.png'),
    nameDivice: 'Apple Health',
  },
  {
    imgDivice: require('@assets/Devices/img1.png'),
    nameDivice: 'Fitbit',
  },
  {
    imgDivice: require('@assets/Devices/img2.png'),
    nameDivice: 'Withings',
  },
  {
    imgDivice: require('@assets/Devices/img3.png'),
    nameDivice: 'iHealh',
  },
  {
    imgDivice: require('@assets/Devices/img4.png'),
    nameDivice: 'MiBand',
  },
  {
    imgDivice: require('@assets/Devices/img5.png'),
    nameDivice: 'Cerner',
  },
  {
    imgDivice: require('@assets/Devices/img6.png'),
    nameDivice: 'Cerner',
  },
];

const Devices = memo(() => {
  const [devicesData, setDevicesData] = useState(DEVICESDATA);

  const renderItem = useCallback(({ item }) => {
    const { imgDivice, nameDivice } = item;
    return <DeviceItem imgDivice={imgDivice} nameDivice={nameDivice} />;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={devicesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default Devices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + scaleHeight(55),
  },
});
