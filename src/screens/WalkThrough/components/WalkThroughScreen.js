import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthScreen } from '@ultis/dimensions';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';
import { scaleHeight } from '@ultis/size';

interface Props {
  Svg?: any;
  description?: string;
  description1?: string;
}

const WalkThroughScreen = (props: Props) => {
  const { Svg, description, description1 } = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.svg}>{Svg}</View>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.txtTitle}>{description1}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  svg: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    color: colors.bluePrimary,
    textAlign: 'center',
    marginTop: scaleHeight(24),
    lineHeight: scaleHeight(32),
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textAlign: 'center',
    marginTop: scaleHeight(14),
  },
  content: {
    alignItems: 'center',
    height: '50%',
    width: widthScreen,
  },
  bottomContent: {
    marginTop: scaleHeight(52),
  },
});
