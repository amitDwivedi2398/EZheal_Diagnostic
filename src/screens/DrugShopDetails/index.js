import React, { memo, useCallback, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import keyExtractor from '@ultis/keyExtractor';
import DrugDetailItem from '@components/DrugDetailItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FONTS from '@ultis/fonts';
import { widthScreen } from '@ultis/dimensions';
import ButtonPrimary from '@components/ButtonPrimary';
import ROUTES from '@ultis/routes';
import { useNavigation } from '@react-navigation/native';

const DRUGDETAILSDATA = {
  drugPrice: '29.00',
  imgDrug: require('@assets/DrugDetails/MockUp.png'),
  content: [
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
  ],
};

const DrugShopDetails = memo(({ navigation }) => {
  const [drugDetailsData, setDrugDetailsData] = useState(DRUGDETAILSDATA);

  const { setOptions } = useNavigation();
  React.useLayoutEffect(() => {
    setOptions({
      title: 'Amoxicillin',
    });
  }, []);

  const onBuyNow = useCallback(() => {
    navigation.navigate(ROUTES.Cart);
  }, [navigation]);

  const renderItem = useCallback(({ item }) => {
    const { title, description } = item;
    return <DrugDetailItem title={title} description={description} />;
  }, []);

  const listHeaderComponent = useCallback(() => {
    return (
      <>
        <Text style={styles.txtDrugPrice}>${drugDetailsData.drugPrice}</Text>
        <Image source={drugDetailsData.imgDrug} style={styles.imgDrug} />
      </>
    );
  }, [drugDetailsData.imgDrug, drugDetailsData.drugPrice]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={drugDetailsData.content}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <ButtonPrimary
        onPress={onBuyNow}
        title={'Buy now'}
        style={styles.buttonPrimary}
      />
    </View>
  );
});

export default DrugShopDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  flatList: {
    marginHorizontal: scaleWidth(24),
  },
  imgDrug: {
    width: widthScreen / 1.12,
    height: widthScreen / 1.6,
    overflow: 'hidden',
    marginBottom: scaleHeight(24),
    alignSelf: 'center',
  },
  txtDrugPrice: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(48),
    color: colors.semiBlack,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(16),
    paddingBottom: getBottomSpace() + scaleHeight(60),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    position: 'absolute',
    alignSelf: 'center',
    bottom: getBottomSpace() + scaleHeight(12),
  },
});
