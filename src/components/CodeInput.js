import React, { useState } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';

interface Props {
  sellCount?: number;
  codeFieldRoot?: ViewStyle;
}

const CodeInput = (props: Props) => {
  const { sellCount, codeFieldRoot } = props;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: sellCount });
  const [a, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderItem = (index, symbol, isFocused) => {
    if (symbol) {
      const textChild = true ? '•' : symbol;
    } else if (isFocused) {
      const textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </Text>
    );
  };

  return (
    <View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={sellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) =>
          renderItem(index, symbol, isFocused)
        }
      />
    </View>
  );
};

export default CodeInput;

const styles = ScaledSheet.create({
  codeFieldRoot: {
    marginTop: scaleHeight(29),
    marginHorizontal: scaleWidth(45),
  },
  cell: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    backgroundColor: colors.pageBackGround,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    paddingTop: scaleHeight(13),
    marginRight: 13,
    color: colors.semiBlack,
  },
  focusCell: {
    borderColor: colors.semiBlack,
  },
});
