import React, { memo, useCallback } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import SvgCamera from '@svgs/AddDrugs/SvgCamera';
import { scaleHeight, scaleWidth } from '@ultis/size';
import DropInput from '@components/DropInput';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const AddDrugs = memo(({ navigation }) => {
  const onSubmit = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} style={styles.svgCamera}>
        <SvgCamera />
      </TouchableOpacity>
      <DropInput style={styles.dropInput} title={'Medication Name'} />
      <DropInput style={styles.dropInput} title={'Dosage'} />
      <DropInput style={styles.dropInput} title={'Unit'} />
      <DropInput style={styles.dropInput} title={'Appearance'} />
      <DropInput style={styles.dropInput} title={'Infomation'} />
      <ButtonPrimary
        onPress={onSubmit}
        title={'Submit'}
        style={styles.buttonPrimary}
      />
    </ScrollView>
  );
});

export default AddDrugs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgCamera: {
    alignSelf: 'center',
    marginBottom: scaleHeight(40),
  },
  dropInput: {
    alignSelf: 'center',
    marginBottom: scaleHeight(32),
  },
  buttonPrimary: {
    marginHorizontal: scaleWidth(40),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(52),
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
});
