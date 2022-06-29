import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const ButtonSecondary = ({
  title,
  height,
  width,
  isDisabled,
  onPress,
}) => {
  return (
    <TouchableHighlight
      style={[
        {width: width, height: height},
        styles.containerButton,
        isDisabled && styles.styleDisable,
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor={COLORS.PRIMARY.PRELUDE_PURPLE}
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
    borderColor: COLORS.NEUTRAL.WHITE,
    borderRadius: 10,
    borderWidth: 2,
  },
  defaultText: {
    color: COLORS.NEUTRAL.WHITE,
    fontFamily: 'Poppins-Medium',
  },
  styleDisable: {
    backgroundColor: COLORS.NEUTRAL.WHITE,
    borderColor: COLORS.NEUTRAL.GREY_LIGHT,
  },
});
