import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '@ultis/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';

interface Props {
  cardColor?: string;
  colorLinear1?: string;
  colorLinear2?: string;
  cardNumber?: string;
  userName?: string;
  date?: string;
}

const CardItem = (props: Props) => {
  const {
    cardColor,
    colorLinear1,
    colorLinear2,
    cardNumber,
    userName,
    date,
  } = props;
  return (
    <View style={[styles.container, { backgroundColor: cardColor }]}>
      {colorLinear1 && colorLinear2 ? (
        <LinearGradient
          colors={[colorLinear1, colorLinear2]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        />
      ) : null}
      <Text style={styles.txtVisa}>Visa</Text>
      <Text style={styles.txtNumberCard}>{cardNumber}</Text>
      <View style={styles.btmCard}>
        <Text style={styles.txtName}>{userName}</Text>
        <Text style={styles.txtDate}>{date}</Text>
      </View>
      <Text style={styles.txtDebit}>debit</Text>
    </View>
  );
};

export default CardItem;

const styles = ScaledSheet.create({
  container: {
    width: scaleWidth(300),
    height: scaleHeight(180),
    borderRadius: scaleWidth(16),
    paddingHorizontal: scaleWidth(24),
    marginRight: scaleWidth(16),
  },
  linearGradient: {
    width: scaleWidth(300),
    height: scaleHeight(180),
    borderRadius: scaleWidth(16),
    position: 'absolute',
  },
  txtVisa: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(38),
    color: colors.white,
    marginTop: scaleHeight(20),
  },
  txtNumberCard: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(22),
    lineHeight: scaleHeight(35),
    color: colors.white,
    marginTop: scaleHeight(13),
    letterSpacing: 3.3,
  },
  txtName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    color: colors.white,
  },
  txtDate: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    color: colors.white,
  },
  btmCard: {
    marginTop: scaleHeight(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDebit: {
    position: 'absolute',
    top: scaleHeight(27),
    right: scaleWidth(29),
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.white,
    opacity: 0.5,
  },
});
