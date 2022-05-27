import React, { memo, useCallback, useState, useRef, useEffect } from 'react';
import { Animated, Platform, ScrollView, YellowBox } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import StaticsHealthItem from '@screens/Day/Components/StaticsHealthItem';
import { scaleHeight } from '@ultis/size';
import SvgNurse from '@svgs/SvgNurse';
import StaticsHealthChart from '@components/StaticsHealthChart';
import ROUTES from '@ultis/routes';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const NOTIFICATIONDATA = {
  title: 'Good Healh 👍',
  description: 'Keep track it everyday!',
  Svg: <SvgNurse />,
};

const Day = memo(({ navigation }) => {
  const [notificationData, setNotitficationData] = useState(NOTIFICATIONDATA);
  const [viewState, setViewState] = useState(false);
  const [show, setShow] = useState(true);
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const opacityStyle = {
    opacity: opacityAnim,
  };

  useEffect(() => {
    YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  }, []);

  const onSeeDetails = useCallback(() => {
    startAnimationOpacity();
    setViewState(!viewState);
    setShow(false);
  }, [setShow, startAnimationOpacity, viewState]);

  const onChart = useCallback(() => {
    startAnimationOpacity();
    setViewState(!viewState);
    viewState === false ? setShow(false) : setShow(true);
  }, [startAnimationOpacity, setShow, viewState]);

  const onSeeGoals = useCallback(() => {
    navigation.navigate(ROUTES.GoalSettings);
  }, [navigation]);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        timing: 400,
      }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [opacityAnim, viewState]);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <StaticsHealthItem
        style={styles.staticsHealthItem}
        title={notificationData.title}
        description={notificationData.description}
        Svg={notificationData.Svg}
      />
      <StaticsHealthChart
        glycemicIndex={89}
        percentage={73}
        style={[styles.staticsHealthChart]}
        onSeeGoals={onSeeGoals}
        onSeeDetails={onSeeDetails}
        onPress={onChart}
      />
      {show && (
        <StaticsHealthChart
          glycemicIndex={89}
          percentage={25}
          style={opacityStyle}
        />
      )}
    </ScrollView>
  );
});
export default Day;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  staticsHealthItem: {
    marginTop: scaleHeight(166),
  },
  staticsHealthChart: {
    marginBottom: scaleHeight(16),
  },
  contentContainerStyle: {
    paddingBottom:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(130)
        : scaleHeight(130),
  },
});
