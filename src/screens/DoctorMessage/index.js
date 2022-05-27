import React, { memo, useCallback, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import SvgImage from '@svgs/DoctorMessge/SvgImage';
import SvgVideo from '@svgs/SvgVideo';
import SvgInformation from '@svgs/DoctorMessge/SvgInformation';
import SvgBackArrow from '@svgs/SvgBackArrow';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  Bubble,
  Composer,
  GiftedChat,
  InputToolbar,
  Message,
  MessageText,
  Send,
} from 'react-native-gifted-chat';
import { widthScreen } from '@ultis/dimensions';
import SvgOption from '@svgs/SvgOption';
import SvgSmile from '@svgs/DoctorMessge/SvgSmile';
import SvgSend from '@svgs/DoctorMessge/SvgSend';
import SvgAttach from '@svgs/DoctorMessge/SvgAttach';
import ROUTES from '@ultis/routes';

const MESSAGEDATA = {
  imgDoctor: require('@assets/ResultFindDoctor/01.png'),
  doctorName: 'Dr. Ann Carlson',
  specialized: 'Cardiologist',
  rating: '5.0',
  location: 'Newyork, United States',
  numberImage: '12',
};

const QUICKREPLAY = ['Ok! Thanks', 'Of course', 'Done!'];

const DoctorMessage = memo(({ navigation }) => {
  const [messageData, setMessageData] = useState(MESSAGEDATA);
  const [messages, setMessages] = useState([]);
  const [quickReplay, setQuickReplay] = useState(QUICKREPLAY);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onImage = useCallback(() => {}, []);

  const onVideoCall = useCallback(() => {
    navigation.navigate(ROUTES.VideoCall);
  }, [navigation]);

  const onInfomation = useCallback(() => {}, []);

  const onOption = useCallback(() => {}, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Cellulite Treatment Options',
        createdAt: new Date(Date.UTC(2019, 10, 4)),
        user: {
          _id: 1,
        },
      },
      {
        _id: 2,
        text: 'Laser Eye Surgery Risks Flap Dislocation After Lasik',
        createdAt: new Date(Date.UTC(2019, 9, 4)),

        user: {
          _id: 2,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderMessage = (props) => {
    return (
      <View style={{ paddingBottom: scaleHeight(24) }}>
        <Message {...props} />
      </View>
    );
  };

  const renderMessageText = (props) => {
    return (
      <MessageText
        {...props}
        textStyle={{
          left: {
            fontFamily: FONTS.HIND.Regular,
            fontSize: scaleHeight(16),
            lineHeight: scaleHeight(24),
            color: colors.dimGray,
          },
          right: {
            fontFamily: FONTS.HIND.Regular,
            fontSize: scaleHeight(16),
            lineHeight: scaleHeight(24),
            color: colors.white,
          },
        }}
        {...props}
      />
    );
  };

  const renderComposer = (props) => {
    return (
      <View {...props} style={styles.composerView}>
        <TouchableOpacity style={styles.svgSmile}>
          <SvgSmile />
        </TouchableOpacity>
        <Composer
          textInputStyle={styles.textInputStyle}
          placeholderTextColor={colors.dimGray}
          {...props}
        />
        <TouchableOpacity style={styles.svgSmile}>
          <SvgAttach />
        </TouchableOpacity>
        <Send {...props} containerStyle={styles.sendView}>
          <SvgSend />
        </Send>
      </View>
    );
  };

  const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={styles.containerStyle} />;
  };

  const renderBubble = (props) => {
    let sameUserInPrevMessage = false;
    if (
      props.previousMessage.user !== undefined &&
      props.previousMessage.user
    ) {
      props.previousMessage.user._id === props.currentMessage.user._id
        ? (sameUserInPrevMessage = true)
        : (sameUserInPrevMessage = false);
    }

    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            marginRight: scaleWidth(12),
            backgroundColor: colors.classicBlue,
            borderTopLeftRadius: scaleWidth(16),
            borderTopRightRadius: scaleWidth(1),
            borderBottomLeftRadius: scaleWidth(16),
            borderBottomRightRadius: scaleWidth(16),
            paddingVertical: scaleWidth(4),
            paddingLeft: scaleWidth(24),
          },
          left: {
            backgroundColor: colors.white,
            borderTopLeftRadius: scaleWidth(1),
            borderTopRightRadius: scaleWidth(16),
            borderBottomLeftRadius: scaleWidth(16),
            borderBottomRightRadius: scaleWidth(16),
            paddingVertical: scaleWidth(4),
            paddingRight: scaleWidth(24),
            marginLeft: scaleWidth(24),
          },
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={messageData.imgDoctor} style={styles.imgDoctor} />
        <Text style={styles.doctorName}>{messageData.doctorName}</Text>
        <View style={styles.btmHeader}>
          <TouchableOpacity onPress={onImage} activeOpacity={0.7}>
            <SvgImage />
            <View style={styles.numberImgView}>
              <Text style={styles.txtNumber}>{messageData.numberImage}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onVideoCall} activeOpacity={0.7}>
            <SvgVideo color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onInfomation} activeOpacity={0.7}>
            <SvgInformation />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onGoBack}
          activeOpacity={0.6}
          style={styles.backView}>
          <SvgBackArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onOption}
          activeOpacity={0.6}
          style={styles.optionView}>
          <SvgOption color={colors.white} />
        </TouchableOpacity>
      </View>

      {Platform.OS === 'android' ? (
        <GiftedChat
          user={{ _id: 1 }}
          placeholder={'Type a messages…'}
          alwaysShowSend={true}
          messages={messages}
          onSend={(message) => onSend(message)}
          scrollToBottom={false}
          renderMessage={(props) => renderMessage(props)}
          renderMessageText={(props) => renderMessageText(props)}
          renderSend={(props) => null}
          showUserAvatar={false}
          renderAvatar={null}
          renderInputToolbar={(props) => renderInputToolbar(props)}
          renderBubble={(props) => renderBubble(props)}
        />
      ) : (
        <View style={styles.iosView}>
          <GiftedChat
            user={{ _id: 1 }}
            placeholder={'Type a messages…'}
            alwaysShowSend={true}
            isCustomViewBottom={true}
            messages={messages}
            onSend={(message) => onSend(message)}
            renderMessage={(props) => renderMessage(props)}
            renderMessageText={(props) => renderMessageText(props)}
            showUserAvatar={false}
            renderAvatar={null}
            alignTop={true}
            renderComposer={(props) => renderComposer(props)}
            renderSend={(props) => null}
            renderBubble={(props) => renderBubble(props)}
            renderInputToolbar={(props) => renderInputToolbar(props)}
            bottomOffset={12}
            quickReplyStyle={styles.quickReplyStyle}
          />
        </View>
      )}
      <View style={styles.quickReplyView}>
        {quickReplay.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.quickReplyStyle}
              key={key}>
              <Text style={styles.txtQuickReplay}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});

export default DoctorMessage;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  header: {
    backgroundColor: colors.classicBlue,
    borderBottomRightRadius: scaleWidth(24),
    borderBottomLeftRadius: scaleWidth(24),
    width: '100%',
    height: scaleHeight(181),
    paddingTop: Platform.OS ? getStatusBarHeight() : scaleHeight(10),
  },
  imgDoctor: {
    width: scaleWidth(45),
    height: scaleWidth(45),
    borderWidth: scaleWidth(2),
    borderColor: colors.white,
    borderRadius: scaleWidth(25),
    alignSelf: 'center',
    marginTop: scaleHeight(16),
  },
  doctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    fontWeight: '500',
    lineHeight: scaleHeight(22),
    textAlign: 'center',
    marginTop: scaleHeight(8),
    color: colors.white,
  },
  btmHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: widthScreen,
    bottom: scaleHeight(20),
    paddingHorizontal: scaleWidth(60),
  },
  numberImgView: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(12),
    backgroundColor: colors.oldBurgundy,
    position: 'absolute',
    right: scaleWidth(-14),
    top: scaleHeight(-10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNumber: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(18),
    color: colors.white,
    fontWeight: '600',
  },
  backView: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Platform.OS ? getStatusBarHeight() + scaleHeight(16) : scaleHeight(16),
  },
  optionView: {
    width: scaleWidth(50),
    height: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: Platform.OS ? getStatusBarHeight() + scaleHeight(16) : scaleHeight(16),
  },
  composerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scaleWidth(16),
    paddingRight: scaleWidth(24),
    borderTopLeftRadius: scaleWidth(16),
    borderTopRightRadius: scaleWidth(16),
    backgroundColor: colors.white,
    width: widthScreen,
  },
  svgSmile: {
    width: scaleWidth(32),
    height: scaleHeight(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendView: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    color: colors.dimGray,
    marginTop: scaleHeight(15),
  },
  containerStyle: {
    bottom: 0,
    marginBottom: -40,
    height: 100,
    flex: 1,
    borderTopStartRadius: scaleWidth(16),
    borderTopEndRadius: scaleWidth(16),
    borderTopWidth: 0,
    backgroundColor: colors.white,
  },
  quickReplyStyle: {
    paddingHorizontal: scaleHeight(24),
    height: scaleHeight(48),
    marginLeft: scaleWidth(12),
    borderRadius: scaleWidth(24),
    backgroundColor: colors.platinum,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosView: {
    flex: 1,
    paddingBottom: scaleHeight(24),
  },
  txtQuickReplay: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(17),
    textAlign: 'center',
    color: colors.semiBlack,
  },
  quickReplyView: {
    width: widthScreen,
    position: 'absolute',
    bottom: scaleHeight(110),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleWidth(4),
  },
});
