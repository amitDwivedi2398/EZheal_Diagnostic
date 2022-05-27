import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  useMemo,
} from 'react';
import {
  Animated,
  Easing,
  LayoutAnimation,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  ViewStyle,
  YellowBox,
} from 'react-native';
import SvgBlood from '@svgs/Blood/SvgBlood';
import SvgPen from '@svgs/StaticHealth/SvgPen';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts';
import SvgCircle from '@svgs/StaticHealth/SvgCircle';

const Y = ['100', '50', '10', '0'];
const Y1 = ['250', '150', '100', '50', '10', '0'];
const X = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const VALUE = [16, 32, 48, 24, 40, 80, 64];
const VALUE1 = [26, 52, 78, 39, 65, 130, 104];

interface Props {
  style?: ViewStyle;
  onSeeDetails?: any;
  onSeeGoals?: any;
  percentage?: number;
  glycemicIndex?: number;
  onPress?: any;
}

const StaticsHealthChart = memo((props: Props) => {
  const {
    onSeeDetails,
    onSeeGoals,
    style,
    percentage,
    glycemicIndex,
    onPress,
  } = props;
  const [viewState, setViewState] = useState(true);
  const [startAnim, setStartAnim] = useState(false);
  const [axisY, setAxisY] = useState(Y);
  const [axisX, setAxisX] = useState(X);
  const [value, setValue] = useState(VALUE);

  const heightAnim = useRef(new Animated.Value(scaleHeight(240))).current;
  const circleOpacity = useRef(new Animated.Value(0)).current;
  const editOpacity = useRef(new Animated.Value(1)).current;

  const heightStyle = {
    height: heightAnim,
  };
  const opacityStyle = {
    opacity: circleOpacity,
  };
  const editOpacityStyle = {
    opacity: editOpacity,
  };

  useEffect(() => {
    YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  }, []);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onChart = () => {
    viewState
      ? LayoutAnimation.configureNext(LayoutAnimation.Presets.spring.delete)
      : LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setViewState(!viewState);
    toggleAnimation();
    startAnimationOpacity();
  };

  const toggleAnimation = useCallback(() => {
    setStartAnim(true);
    if (viewState === true) {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(359),
        timing: 1500,
      }).start(() => {
        setViewState(false);
        setAxisY(Y1);
        setValue(VALUE1);
      });
    } else {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(240),
        timing: 1500,
      }).start(() => {
        setViewState(true);
        setAxisY(Y);
        setValue(VALUE);
        setStartAnim(false);
      });
    }
  }, [heightAnim, viewState]);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(circleOpacity, {
        toValue: 1,
        timing: 1500,
      }).start();
      Animated.timing(editOpacity, {
        toValue: 0,
        timing: 1500,
      }).start();
    } else {
      Animated.timing(circleOpacity, {
        toValue: 0,
        duration: 400,
      }).start();
      Animated.timing(editOpacity, {
        toValue: 1,
        timing: 1500,
      }).start();
    }
  }, [circleOpacity, viewState, editOpacity]);

  const renderChartItem = useMemo(() => {
    return value.map((item, index) => {
      const heightAnimation = new Animated.Value(0);
      Animated.timing(heightAnimation, {
        easing: Easing.linear,
        toValue: item,
        duration: 200,
        useNativeDriver: false,
      }).start();
      return (
        <Animated.View
          key={index}
          style={[styles.chartItem, { height: heightAnimation }]}
        />
      );
    });
  }, [value]);

  const bottomX = viewState
    ? { bottom: scaleHeight(42) }
    : { bottom: scaleHeight(13) };
  const bottomY = viewState
    ? { bottom: scaleHeight(50) }
    : { bottom: scaleHeight(24) };
  const bottomChart = viewState
    ? { bottom: scaleHeight(64) }
    : { bottom: scaleHeight(42) };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        onChart();
        onPress();
      }}>
      <Animated.View style={[styles.chartView, style, heightStyle]}>
        <View style={styles.svgLeft}>
          <SvgBlood width={12} height={16} />
        </View>
        <Animated.View style={[styles.svgRight, editOpacityStyle]}>
          <SvgPen />
        </Animated.View>
        <View style={[styles.axisYView, bottomY]}>
          {axisY.map((item, index) => {
            return (
              <Text style={styles.txtAxisY} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
        <View style={[styles.chartItemView, bottomChart]}>
          {renderChartItem}
        </View>
        <View style={[styles.axisXView, bottomX]}>
          {axisX.map((item, index) => {
            return (
              <Text key={index} style={styles.txtAxisX}>
                {item}
              </Text>
            );
          })}
        </View>
        <Animated.View style={[styles.svgCircle, opacityStyle]}>
          <SvgCircle startAnim={startAnim} percentage={percentage} />
          <Text style={styles.txtGlycemicIndex}>
            {glycemicIndex}
            <Text style={styles.txtMgdl}>mg/dl</Text>
          </Text>
        </Animated.View>
        {viewState && (
          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={onSeeDetails}
              activeOpacity={0.6}
              style={styles.btn1}>
              <Text style={styles.txtSeeDetails}>See Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSeeGoals}
              activeOpacity={0.6}
              style={styles.btn2}>
              <Text style={styles.txtSetGoals}>Set Goals</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
});

export default StaticsHealthChart;

const styles = ScaledSheet.create({
  chartView: {
    marginHorizontal: scaleWidth(16),
    height: scaleHeight(240),
    backgroundColor: colors.white,
    borderRadius: scaleWidth(16),
    overflow: 'hidden',
  },
  svgLeft: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(16),
    left: scaleWidth(16),
    backgroundColor: colors.pageBackGround,
  },
  svgRight: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(16),
    right: scaleWidth(16),
    backgroundColor: colors.secondBlue,
  },
  txtAxisY: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
    marginBottom: scaleHeight(13),
    width: scaleWidth(24),
    height: scaleHeight(16),
  },
  axisYView: {
    marginLeft: scaleWidth(16),
    width: scaleHeight(24),
    position: 'absolute',
  },
  axisXView: {
    marginTop: scaleHeight(11),
    flexDirection: 'row',
    marginLeft: scaleWidth(39),
    position: 'absolute',
  },
  chartItemView: {
    flexDirection: 'row',
    marginLeft: scaleWidth(39),
    position: 'absolute',
    alignItems: 'flex-end',
  },
  txtAxisX: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
    marginRight: scaleWidth(20),
    width: scaleWidth(24),
    height: scaleHeight(16),
  },
  btnView: {
    width: '100%',
    height: scaleHeight(40),
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.pageBackGround,
    flexDirection: 'row',
  },
  btn1: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.pageBackGround,
  },
  btn2: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.pageBackGround,
  },
  txtSeeDetails: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
    color: colors.silverChalice,
  },
  txtSetGoals: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
    color: colors.classicBlue,
  },
  chartItem: {
    width: scaleWidth(4),
    backgroundColor: colors.secondBlue,
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(9),
    borderRadius: scaleWidth(4),
  },
  svgCircle: {
    alignSelf: 'center',
    marginTop: scaleHeight(24),
    width: scaleWidth(140),
    height: scaleWidth(140),
    alignItems: 'center',
  },
  txtGlycemicIndex: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(51),
    textAlign: 'center',
    color: colors.classicBlue,
    position: 'absolute',
    top: scaleHeight(45),
  },
  txtMgdl: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(17),
    color: colors.silverChalice,
  },
});
