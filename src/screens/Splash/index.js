import React, { memo } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SvgHealer from '@svgs/Splash/SvgHealer';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@ultis/routes';

const Splash = memo(() => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate(ROUTES.WalkThrough);
  }, 2000);

  return (
    <View style={styles.container}>
      <SvgHealer />
    </View>
  );
});

export default Splash;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
