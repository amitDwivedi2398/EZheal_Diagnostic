import React from 'react';
import { Animated, Easing, View, Text } from 'react-native';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import PropTypes from 'prop-types';
export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: props.value,
    };

    this.widthAnimation = new Animated.Value(0);
    this.widthAnimationView = new Animated.Value(0);
    this.widthAnimationDot = new Animated.Value(0);
    this.backgroundAnimation = new Animated.Value(0);
    this.backgroundInterpolationValue = null;
  }

  componentDidMount() {
    if (this.state.progress > 0) {
      this.animateWidth();
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.value !== this.state.progress) {
      if (props.value >= 0 && props.value <= this.props.maxValue) {
        this.setState({ progress: props.value }, () => {
          if (this.state.progress === this.props.maxValue) {
            // Callback after complete the progress
            const callback = this.props.onComplete;
            if (callback) {
              setTimeout(callback, this.props.barAnimationDuration);
            }
          }
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.animateWidth();

      if (this.props.backgroundColorOnComplete) {
        if (this.props.value === this.props.maxValue) {
          this.animateBackground();
        }
      }
    }
  }

  animateWidth() {
    const toValue =
      scaleWidth(this.props.width * this.state.progress) / 100 -
      scaleWidth(this.props.borderWidth * 2);

    const toValueView =
      scaleWidth(this.props.width * this.state.progress) / 100 - scaleWidth(21);

    const toValueDot =
      scaleWidth(this.props.width * this.state.progress) / 100 -
      scaleWidth(this.props.isDotPrecent ? 13 : 7);

    Animated.timing(this.widthAnimation, {
      easing: Easing[this.props.barEasing],
      toValue: toValue > 0 ? toValue : 0,
      duration: this.props.barAnimationDuration,
      useNativeDriver: false,
    }).start();

    Animated.timing(this.widthAnimationView, {
      easing: Easing[this.props.barEasing],
      toValue: toValueView > 0 ? toValueView : 0,
      duration: this.props.barAnimationDuration,
      useNativeDriver: false,
    }).start();

    Animated.timing(this.widthAnimationDot, {
      easing: Easing[this.props.barEasing],
      toValue: toValueDot > 0 ? toValueDot : 0,
      duration: this.props.barAnimationDuration,
      useNativeDriver: false,
    }).start();
  }

  animateBackground() {
    Animated.timing(this.backgroundAnimation, {
      toValue: 1,
      duration: this.props.backgroundAnimationDuration,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const { progress } = this.state;
    const { displayValue, maxValue, style, isDotPrecent } = this.props;
    if (this.props.backgroundColorOnComplete) {
      this.backgroundInterpolationValue = this.backgroundAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          this.props.backgroundColor,
          this.props.backgroundColorOnComplete,
        ],
      });
    }

    return (
      <View style={[{ marginTop: scaleHeight(2) }, style]}>
        {this.props.numberSlider && (
          <Animated.View
            style={{
              marginLeft: this.widthAnimationView,
              marginBottom: scaleHeight(7),
              justifyContent: 'center',
              alignItems: 'center',
              width: scaleWidth(42),
            }}>
            {/*<Icon*/}
            {/*  name={'ic_box'}*/}
            {/*  size={scaleWidth(31)}*/}
            {/*  color={colors.terraCotta}*/}
            {/*/>*/}
            <Text
              style={{
                position: 'absolute',
                fontSize: scaleWidth(12),
                paddingBottom: scaleHeight(8),
                lineHeight: scaleWidth(21),
                fontWeight: 'bold',
              }}>
              {progress < maxValue ? progress : displayValue}%
            </Text>
          </Animated.View>
        )}
        <View
          style={{
            width: scaleWidth(this.props.width),
            height: scaleHeight(this.props.height),
            borderWidth: scaleWidth(this.props.borderWidth),
            borderColor: this.props.borderColor,
            borderRadius: scaleWidth(this.props.borderRadius),
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: scaleWidth(this.props.width),
              height: scaleHeight(this.props.height),
              borderWidth: scaleWidth(this.props.borderWidth),
              borderColor: this.props.borderColor,
              borderRadius: scaleWidth(this.props.borderRadius),
              justifyContent: 'center',
              backgroundColor: this.props.underlyingColor,
              opacity: this.props.opacity,
            }}
          />
          <Animated.View
            style={{
              height:
                scaleHeight(this.props.height) -
                scaleWidth(this.props.borderWidth) * scaleWidth(2),
              width: this.widthAnimation,
              backgroundColor:
                this.backgroundInterpolationValue || this.props.backgroundColor,
              borderBottomLeftRadius: this.props.borderRadius,
              borderTopLeftRadius: this.props.borderRadius,
              borderBottomRightRadius: this.props.borderRadius,
              borderTopRightRadius: this.props.borderRadius,
              position: 'absolute',
            }}
          />
          {this.props.box && (
            <Animated.View
              style={{
                marginLeft: this.widthAnimationDot,
                alignItems: 'center',
                position: 'absolute',
              }}>
              <View
                style={
                  this.props.thumbStyle
                    ? this.props.thumbStyle
                    : {
                        height: isDotPrecent ? scaleWidth(26) : scaleWidth(14),
                        width: isDotPrecent ? scaleWidth(26) : scaleWidth(14),
                        borderRadius: isDotPrecent
                          ? scaleWidth(13)
                          : scaleWidth(0),
                        backgroundColor: this.props.backgroundColor,
                        borderColor: colors.white,
                        borderWidth: scaleWidth(1),
                        borderStyle: 'solid',
                        // borderColor: colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }
                }>
                {isDotPrecent && (
                  <Text
                    bold
                    style={{
                      fontSize:
                        this.props.value === 100
                          ? scaleWidth(9)
                          : scaleWidth(10),
                      lineHeight: scaleWidth(18),
                      textAlign: 'center',
                      color: colors.white,
                    }}>
                    {`${progress < maxValue ? progress : displayValue}%`}
                  </Text>
                )}
              </View>
            </Animated.View>
          )}
        </View>
      </View>
    );
  }
}

Slider.propTypes = {
  /**
   * Bar values
   */
  value: PropTypes.number,
  maxValue: PropTypes.number,

  /**
   * Animations
   */
  barEasing: PropTypes.oneOf([
    'bounce',
    'cubic',
    'ease',
    'sin',
    'linear',
    'quad',
  ]),
  barAnimationDuration: PropTypes.number,
  backgroundAnimationDuration: PropTypes.number,

  /**
   * StyleSheet props
   */
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  backgroundColorOnComplete: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  /**
   * Callbacks
   */
  onComplete: PropTypes.func,
};

Slider.defaultProps = {
  value: 0,
  displayValue: 0,
  maxValue: 100,

  barEasing: 'linear',
  barAnimationDuration: 500,
  backgroundAnimationDuration: 2500,

  height: scaleHeight(2),
  width: scaleWidth(330),

  backgroundColor: colors.line,
  backgroundColorOnComplete: null,

  borderWidth: scaleWidth(1),
  borderColor: colors.classicBlue,
  borderRadius: scaleWidth(10),

  onComplete: null,
  numberSlider: true,
};
