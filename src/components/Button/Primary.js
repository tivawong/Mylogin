import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const ButtonPrimary = ({title, height, width, isDisabled, onPress}) => {
  return (
    <TouchableHighlight
      style={[
        {width, height},
        styles.containerButton,
        isDisabled && {backgroundColor: COLORS.NEUTRAL.GREY_BG_DISABLED},
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor={COLORS.PRIMARY.BLUE}
      disabled={isDisabled}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          numberOfLines={1}
          style={[
            styles.defaultText,
            isDisabled && {color: COLORS.NEUTRAL.GREY_LIGHT},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: COLORS.PRIMARY.BLUE_BTN,
    borderRadius: 10,
  },
  defaultText: {
    color: COLORS.NEUTRAL.WHITE,
    fontFamily: 'Poppins-Medium',
    lineHeight: 23.97,
  },
});
