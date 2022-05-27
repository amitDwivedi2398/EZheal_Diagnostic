import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import CardItem from '@screens/Billing/components/CardItem';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight, scaleWidth } from '@ultis/size';
import DropInput from '@components/DropInput';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const CARDDATA = [
  {
    colorLinear1: '#ECBC3A',
    colorLinear2: '#D4A73B',
    cardNumber: '1234 5678 90** ****',
    userName: 'Your name',
    date: '12/2025',
  },
  {
    cardColor: colors.brown,
    cardNumber: '1234 5678 90** ****',
    userName: 'Your name',
    date: '12/2025',
  },
];

const Billing = memo(() => {
  const [cardData, setCardData] = useState(CARDDATA);

  const renderItem = useCallback(({ item }) => {
    const {
      cardColor,
      cardNumber,
      userName,
      colorLinear1,
      colorLinear2,
      date,
    } = item;
    return (
      <CardItem
        cardColor={cardColor}
        cardNumber={cardNumber}
        userName={userName}
        colorLinear1={colorLinear1}
        colorLinear2={colorLinear2}
        date={date}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.flatList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.contentContainerStyle}
          data={cardData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
      <DropInput nonArrow={true} style={styles.dropInput} title={'Fullname'} />
      <DropInput nonArrow={true} style={styles.dropInput} title={'Address'} />
      <View style={styles.viewBtn}>
        <DropInput style={styles.btnDrop} title={'City'} />
        <DropInput nonArrow={true} style={styles.btnDrop} title={'Zipcode'} />
      </View>
      <View style={styles.viewBtn}>
        <DropInput style={styles.btnDrop} title={'State'} />
        <DropInput style={styles.btnDrop} title={'Country'} />
      </View>
      <ButtonPrimary style={styles.buttonPrimary} title={'Pay now'} />
    </View>
  );
});
export default Billing;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatList: {
    marginTop: scaleHeight(24),
    marginBottom: scaleHeight(40),
  },
  contentContainerStyle: {
    paddingLeft: scaleWidth(24),
    paddingRight: scaleWidth(8),
  },
  dropInput: {
    alignSelf: 'center',
    marginBottom: scaleHeight(24),
    width: scaleWidth(327),
  },
  btnDrop: {
    width: scaleWidth(156),
  },
  viewBtn: {
    flexDirection: 'row',
    marginHorizontal: scaleWidth(24),
    justifyContent: 'space-between',
    marginBottom: scaleHeight(24),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(12),
  },
});
