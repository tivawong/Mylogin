import React, { useEffect, useState } from 'react'
import { isEmpty, isEqual } from 'lodash'
import { 
  Text, 
  View, 
  Image, 
  StatusBar, 
  SafeAreaView, 
  ImageBackground, 
  TouchableHighlight,
} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from './styles'
import { COLORS } from '../../../constants/colors'
import { ROUTER_PATH } from '../../../constants/routerPath'
import { ButtonPrimary, ButtonSecondary, Input, LoadIndicator, ModalScreen } from '../../../components'

import Fullbackgroud from '../../../assets/image/bg1.png'
import logoLine from '../../../assets/icons/logo-line.png'
import logoGoogle from '../../../assets/icons/logo-google.png'
import logoFacebook from '../../../assets/icons/logo-facebook.png'
import logo from '../../../assets/image/logo2.png'

const Login = ({ navigation }) => {
  const [isShowModalError, setIsShowModalError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isRememberMe, setRememberMe] = useState(false)
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })
  const [error,  setError] = useState({
    email: false,
    password: false,
  })

  const checkIsEmpty =
    isEmpty(formValue.email) ||
    isEmpty(formValue.password)

  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true)

  const isErrorForm = Object.values(error).some(value => {
    return value === true
  })

  useEffect(() => {
    if (isErrorForm === false && checkIsEmpty === false) {
      setIsDisabledSubmit(false)
    } else {
      setIsDisabledSubmit(true)
    }
  }, [isErrorForm, checkIsEmpty])
  
  const onChange = (id, value) => {
    setFormValue({ ...formValue, [id]: value })
  }

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (reg.test(formValue.email) === false) {
      setError({ ...error, email: true })
      return true
    } else {
      setError({ ...error, email: false })
      return false
    }
  }

  const validatePassword = () => {
    if (isEmpty(formValue.password)) {
      setError({ ...error, password: true })
      return true
    } else {
      setError({ ...error, password: false })
      return false
    }
  }
  
  const checkEmailPassword = async() => {
    const email = 'test@test.com'
    const pass = 12345678

    if(isEqual(email, formValue.email) && isEqual(pass, Number(formValue.password))){
      setLoading(true)
      setTimeout(() => {
        setLoading(false)

        navigation.navigate(ROUTER_PATH.AUTH_STACK.LANDING)
      }, 2500);
    } else {
      setIsShowModalError(true)
    }
  }

  return (
    <React.Fragment>
      <ImageBackground
        style={styles.flex}
        resizeMode='cover'
        source={Fullbackgroud}>
          <StatusBar animated barStyle='dark-content' />
          <SafeAreaView style={styles.flex}>
          <View style={{ flex: 0.35,justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={logo}
              style={{marginTop: 80}}
            />
          </View>
          <View style={styles.flex}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.containerScreen}>
                <Text style={styles.txtLogin}>Login</Text>
                <Input
                  style={styles.txtInput}
                  label='Email address' 
                  labelStyle={[styles.txtEmail, styles.titleTextInput, styles.text]}
                  placeholder='Email'
                  placeholderTextColor={COLORS.NEUTRAL.STAR_DUST}
                  onChange={(value) => onChange('email', value)}
                  onBlur={validateEmail}
                  maxLength={30}
                  isError={error.email}
                  msgError='Please enter your email'
                />
                <Input
                  style={styles.txtInput}
                  secureTextEntry
                  label='Password' 
                  labelStyle={[styles.txtEmail, styles.txtPassword, styles.text]}
                  placeholder='Password'
                  placeholderTextColor={COLORS.NEUTRAL.STAR_DUST}
                  onChange={(value) => onChange('password', value)}
                  onBlur={validatePassword}
                  isError={error.password}
                  msgError='Please enter your password'
                />
              </View>
              <View style={styles.DirectionGroupText}>
                <BouncyCheckbox
                  size={16}
                  fillColor={COLORS.PRIMARY.BLUE}
                  unfillColor={COLORS.NEUTRAL.WHITE}
                  text='Remember me'
                  iconStyle={{
                    borderRadius: 4,
                    borderColor: COLORS.PRIMARY.HEART2_PURPLE,
                  }}
                  textStyle={{
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                    textDecorationLine: 'none',
                    color: COLORS.NEUTRAL.WHITE,
                  }}
                  isChecked={isRememberMe}
                  onPress={() => setRememberMe(!isRememberMe)}
                  disableBuiltInState
                  useNativeDriver
                />
              </View>
              <View style={styles.areaGroupButton}>
                <ButtonPrimary
                  isDisabled={isDisabledSubmit}
                  title='Sign in'
                  width={'90%'}
                  height={40}
                  onPress={() => checkEmailPassword()}
                />
                <View style={styles.Direction}>
                  <View style={styles.liner} />
                  <Text style={styles.txtContinue}>Or continue with</Text>
                  <View style={styles.liner} />
                </View>
                <View style={styles.DirectionGroupButton}>
                  <TouchableHighlight
                    style={styles.buttonSocial}
                    underlayColor={COLORS.NEUTRAL.GREY_TONE_50}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image style={styles.icon} source={logoFacebook} />
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.buttonSocial}
                    underlayColor={COLORS.NEUTRAL.GREY_TONE_50}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image style={styles.icon} source={logoLine} />
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.buttonSocial}
                    underlayColor={COLORS.NEUTRAL.GREY_TONE_50}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image style={styles.icon} source={logoGoogle} />
                  </TouchableHighlight>
                </View>
                <Text style={styles.txtRegis}>Register for a new account</Text>
                <ButtonSecondary
                  title='Register'
                  width={'90%'}
                  height={40}
                  onPress={() => {}}
                />
              </View>
            </KeyboardAwareScrollView>
          </View>
        </SafeAreaView>
      <ModalScreen
        isVisible={isShowModalError}
        content={
          <View style={{alignItems: 'center', marginVertical: 15}}>
            <Text style={styles.styleTextModal}>
              Invalid email or password
            </Text>
            <Text style={styles.styleTextModal}>
              Please try again.
            </Text>
          </View>
        }
        textButton='Close'
        onPress={() => setIsShowModalError(false)}
      />

      <ModalScreen
        isLoading
        isVisible={loading}
        content={
          <LoadIndicator />
        }
      />

      </ImageBackground>
    </React.Fragment>
  )
}

export default Login