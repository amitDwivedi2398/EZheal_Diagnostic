import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import CommentItem from '@screens/NewsComment/components/CommentItem';

const COMMENTSDATA = [
  {
    avatar: require('@assets/NewsComment/Oval.png'),
    nameUser: 'Jesse Ryan',
    timeComment: '3 mins agos',
    comment:
      'I know how terrible it can be for you at nights and even when you wake up.',
  },
  {
    avatar: require('@assets/NewsComment/Oval1.png'),
    nameUser: 'Jesse Ryan',
    timeComment: '3 mins agos',
    comment:
      'I know how terrible it can be for you at nights and even when you wake up.',
  },
  {
    avatar: require('@assets/NewsComment/Oval2.png'),
    nameUser: 'Jesse Ryan',
    timeComment: '3 mins agos',
    comment:
      'I know how terrible it can be for you at nights and even when you wake up.',
  },
  {
    avatar: require('@assets/NewsComment/Oval3.png'),
    nameUser: 'Jesse Ryan',
    timeComment: '3 mins agos',
    comment:
      'I know how terrible it can be for you at nights and even when you wake up.',
  },
  {
    avatar: require('@assets/NewsComment/Oval4.png'),
    nameUser: 'Jesse Ryan',
    timeComment: '3 mins agos',
    comment:
      'I know how terrible it can be for you at nights and even when you wake up.',
  },
  {
    avatar: require('@assets/NewsComment/Oval.png'),
    nameUser: 'Jesse Ryan',
    timeComment: '3 mins agos',
    comment:
      'I know how terrible it can be for you at nights and even when you wake up.',
  },
];

const NewsComment = memo(() => {
  const [commentsData, setCommentData] = useState(COMMENTSDATA);

  const renderItem = useCallback(({ item }) => {
    const { avatar, nameUser, timeComment, comment } = item;

    return (
      <CommentItem
        avatar={avatar}
        nameUser={nameUser}
        timeComment={timeComment}
        comment={comment}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
        data={commentsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default NewsComment;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
    paddingBottom: getBottomSpace(),
  },
  flatList: {
    marginHorizontal: scaleWidth(16),
  },
});
