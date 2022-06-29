import { StyleSheet, Text, View, ImageBackground, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'

import { ROUTER_PATH } from '../../constants/routerPath'

import splashBackground from '../../assets/image/splash.png'
import logo from '../../assets/image/logo2.png'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    try{
      setTimeout(() => {
        navigation.navigate(ROUTER_PATH.AUTH_STACK.LOGIN)
      }, 1500);
    } catch (err){
      return
    }
  }, [])

  return (
    <ImageBackground source={splashBackground} style={styles.flex}>
      <StatusBar animated barStyle='dark-content' />
      <View style={styles.center}>
        <Image 
          source={logo}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  center: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logo: {
    fontSize: 40, 
    color: 'white', 
    fontFamily: 'Poppins-ExtraBold'
  }
})

export default SplashScreen