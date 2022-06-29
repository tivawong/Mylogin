import { COLORS } from '../../../constants/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundSafeArea: {
    backgroundColor: 'transparent',
  },
  flex: {
    flex: 1, 
  },
  containerScreen: { 
    flex: 1,
    paddingHorizontal: 20
  },
  txtLogin: {
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    paddingBottom: 18,
    color: COLORS.NEUTRAL.WHITE,
  },
  txtEmail: {
    marginBottom: 10,
  },
  txtPassword: {
    marginBottom: 4,
    marginTop: 13
  },
  titleTextInput:{
    marginHorizontal: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Medium',
    color: COLORS.NEUTRAL.WHITE,
  },
  txtInput: {
    width: 333,
    height: 42,
  },
  DirectionGroupText: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 16,
    paddingHorizontal: 20,
  },
  DirectionGroupButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 25,
  },
  buttonSocial: {
    backgroundColor: COLORS.NEUTRAL.WHITE,
    borderColor: COLORS.NEUTRAL.GREY_BORDER_BUTTON,
    borderRadius: 6,
    borderWidth: 1,
    
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Direction: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  liner: {
    borderColor: COLORS.NEUTRAL.GREY_BORDER_BUTTON,
    borderBottomWidth: 1,

    marginBottom: 8,
    width: 101,
  },
  txtLiner: {
    paddingHorizontal: 8, 

    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    color: COLORS.NEUTRAL.PALE_SKY
  },
  icon: { 
    width: 22, 
    height: 22 
  },
  txtRegis: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: COLORS.NEUTRAL.WHITE,
    marginBottom: 15,
  },
  txtContinue: {
    paddingHorizontal: 8,

    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: COLORS.NEUTRAL.WHITE
  },
  margintop: {
    marginTop: -1
  },
  areaGroupButton: {
    marginVertical: 30,
    alignItems: 'center',
  },
  styleTextModal: {
    fontSize: 16, 
    fontFamily: 'Poppins-SemiBold', 
    color: COLORS.NEUTRAL.BRIGHT_GREY,
  },
})
