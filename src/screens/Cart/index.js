import React, { memo, createContext, useState, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import CartItem from '@screens/Cart/components/CartItem';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FONTS from '@ultis/fonts';
import { widthScreen } from '@ultis/dimensions';
import ButtonPrimary from '@components/ButtonPrimary';
import ROUTES from '@ultis/routes';

const CARTDATA = [
  {
    imgDrug: require('@assets/Cart/Drug.png'),
    drugName: 'Amoxicillin and Clavulanate',
    drugPrice: 29,
  },
  {
    imgDrug: require('@assets/Cart/Drug.png'),
    drugName: 'Acetaminophen and Hydrocodone',
    drugPrice: 29,
  },
  {
    imgDrug: require('@assets/Cart/Drug.png'),
    drugName: 'Buprenorphine and Naloxone',
    drugPrice: 29,
  },
  {
    imgDrug: require('@assets/Cart/Drug.png'),
    drugName: 'Calcium carbonate',
    drugPrice: 29,
  },
  {
    imgDrug: require('@assets/Cart/Drug.png'),
    drugName: 'Divalproex sodium',
    drugPrice: 29,
  },
];

export const TotalContext = createContext({
  total: 0,
  setTotal: () => {},
});

const Cart = memo(({ navigation }) => {
  const [cartData, setCartData] = useState(CARTDATA);
  const [total, setTotal] = useState(0);

  const onCheckOut = useCallback(() => {
    navigation.navigate(ROUTES.Billing);
  }, [navigation]);

  const renderItem = useCallback(({ item }) => {
    const { imgDrug, drugName, drugPrice } = item;

    return (
      <CartItem imgDrug={imgDrug} drugName={drugName} drugPrice={drugPrice} />
    );
  }, []);

  const paddingBottom = total !== 0 ? scaleHeight(100) : getBottomSpace();

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.contentContainerStyle,
            { paddingBottom: paddingBottom },
          ]}
          data={cartData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        {total !== 0 ? (
          <View style={styles.btmview}>
            <Text style={styles.txtTotal}>
              Total:
              <Text style={styles.txtNumberTotal}>
                {'  '}${total}.00
              </Text>
            </Text>
            <ButtonPrimary
              onPress={onCheckOut}
              title={'Check Out'}
              style={styles.buttonPrimary}
            />
          </View>
        ) : null}
      </View>
    </TotalContext.Provider>
  );
});

export default Cart;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
  },
  btmview: {
    position: 'absolute',
    height: scaleHeight(110),
    backgroundColor: colors.white,
    paddingHorizontal: scaleHeight(16),
    flexDirection: 'row',
    width: widthScreen,
    justifyContent: 'space-between',
    bottom: 0,
    borderTopRightRadius: scaleWidth(24),
    borderTopLeftRadius: scaleWidth(24),
    shadowOffset: { width: scaleWidth(2), height: scaleHeight(6) },
    shadowRadius: scaleHeight(15),
    shadowColor: '#000',
    shadowOpacity: 0.25,
  },
  txtTotal: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(27),
    color: colors.brown1,
    marginTop: scaleHeight(28),
  },
  txtNumberTotal: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(20),
    lineHeight: scaleHeight(32),
    color: colors.classicBlue,
  },
  buttonPrimary: {
    width: scaleWidth(148),
    marginTop: scaleHeight(16),
  },
});
