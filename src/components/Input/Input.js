import React from 'react'
import { StyleSheet, Text, TextInput, Image, View } from 'react-native'

import { COLORS } from '../../constants/colors'
 
export const Input = ({
  label,
  style,
  modalBottom,
  isError,
  isCard,
  autoFocus,
  labelStyle,
  secureTextEntry,
  isRequired,
  placeholder,
  iconRight,
  onChange,
  value,
  onBlur,
  onFocus,
  msgError,
  minLength,
  maxLength,
  keyboardType,
  disabled,
  returnKeyType
}) => {

  const renderStyle = () => {
    if(modalBottom) return style
    
    if(isCard) return styles.isCard

    if(style) return [style, styles.input]
    
    if(isError) return [styles.error, styles.input]
  }

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
          {isRequired && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <View style={{flexDirection: 'row'}}>
        <TextInput
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={COLORS.NEUTRAL.STAR_DUST}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          style={[renderStyle(), {color: COLORS.NEUTRAL.RIVER_BED,}]}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          minLength={minLength}
          maxLength={maxLength}
          keyboardType={keyboardType} 
          returnKeyType={returnKeyType}
        /> 
        {iconRight && <Image 
          style={styles.iconRight} 
          source={iconRight}
        />}
      </View>
      {isError && <Text style={styles.textError}>{msgError}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    height: 35,
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: Platform.OS === 'android' ? 1 : 0,
    backgroundColor: COLORS.NEUTRAL.WHITE,
    borderColor: COLORS.NEUTRAL.WHITE_SMOKE,
    borderWidth: 1,
    borderRadius: 10,
    color: COLORS.NEUTRAL.RIVER_BED,
    shadowColor: COLORS.NEUTRAL.GREY_LIGHT,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    textAlign: 'left',
    fontFamily: 'Poppins-Medium'
  },
  isCard: {
    width: '100%',
    height: 35,
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: Platform.OS === 'android' ? 1 : 0,
    color: COLORS.NEUTRAL.BRIGHT_GREY,
    backgroundColor: COLORS.NEUTRAL.WHITE,
    borderColor: COLORS.NEUTRAL.WHITE_SMOKE,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'left',
    fontFamily: 'Poppins-Medium',
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLORS.NEUTRAL.GREY_DOLPHIN
  },
  error: {
    borderColor: COLORS.SECONDARY.RED,
    borderWidth: 0.5,
  },
  textError: {
    marginTop: 3,

    fontSize: 13,
    color:  COLORS.SECONDARY.RED,
  },
  required: {
    color:  COLORS.SECONDARY.RED,
  },
  iconRight: {
    width: 20, 
    height: 20, 
    position: 'absolute', 
    right: 10, 
    top: 7
  },
  error: {
    borderColor: COLORS.SECONDARY.RED,
    borderWidth: 0.5,
  },
  textError: {
    marginTop: 3,

    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: COLORS.SECONDARY.RED,
  },
  required: {
    color: COLORS.SECONDARY.RED,
  },
})
