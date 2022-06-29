import {View, Image, TouchableHighlight} from 'react-native';
import React from 'react';

export const ButtonIcon = ({icon, width, height, onPress}) => {
  return (
    <TouchableHighlight style={{width: width, height: height}} onPress={onPress}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 22, height: 22}} source={icon} />
      </View>
    </TouchableHighlight>
  );
};
