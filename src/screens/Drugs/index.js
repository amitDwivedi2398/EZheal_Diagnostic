import React, { memo, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgNurse from '@svgs/SvgNurse';
import SvgDrugInactive from '@svgs/MainBottomTab/SvgDrugInactive';
import SvgDoctor from '@svgs/MainPage/SvgDoctor';
import SvgCalendar from '@svgs/MainPage/SvgCalendar';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DrugButton from '@screens/Drugs/components/DrugButton';
import ROUTES from '@ultis/routes';

const Drugs = memo(({ navigation }) => {
  const onPillsLibrary = useCallback(() => {
    navigation.navigate(ROUTES.ListDrugs);
  }, [navigation]);

  const onDrugShop = useCallback(() => {
    navigation.navigate(ROUTES.DrugShop);
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      <Text style={styles.txtHi}>Hi! Gordon Aguilar,</Text>
      <Text style={styles.txtToday}>Have you taken medicine today?</Text>
      <View style={styles.topicView}>
        <Text style={styles.txtTitle}>Stay Home Covid-19</Text>
        <SvgNurse style={styles.svgNurse} />
      </View>
      <DrugButton
        Svg={<SvgDrugInactive color={colors.secondBlue} />}
        title={'Pills Library'}
        description={'128 Pills'}
        onPress={onPillsLibrary}
      />
      <DrugButton
        Svg={<SvgDoctor height={28} width={28} color={colors.secondBlue} />}
        title={'Pills Shops'}
        description={'128 Pills'}
        onPress={onDrugShop}
      />
      <DrugButton
        Svg={<SvgCalendar height={24} width={24} color={colors.secondBlue} />}
        title={'Pills Reminders'}
        description={'128 Pills'}
      />
    </ScrollView>
  );
});

export default Drugs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(107),
    paddingBottom: getBottomSpace() + scaleHeight(84),
  },
  txtHi: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(38),
    color: colors.semiBlack,
    marginLeft: scaleWidth(24),
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    color: colors.brown,
    marginLeft: scaleWidth(24),
    marginBottom: scaleHeight(20),
  },
  topicView: {
    marginHorizontal: scaleWidth(24),
    height: scaleHeight(130),
    backgroundColor: colors.green,
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: scaleHeight(24),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: scaleHeight(21),
    lineHeight: scaleHeight(25),
    textAlign: 'center',
    color: colors.white,
    marginRight: scaleWidth(49),
  },
  svgNurse: {
    position: 'absolute',
    bottom: 0,
    left: scaleWidth(16),
  },
});
