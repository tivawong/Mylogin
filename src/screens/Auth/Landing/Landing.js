import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'

import { ButtonPrimary } from '../../../components'
import Fullbackgroud from '../../../assets/image/bg2.jpeg'

const Landing = ({navigation}) => {
  return (
    <ImageBackground
        style={styles.flex}
        resizeMode='cover'
        source={Fullbackgroud}>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <ButtonPrimary
            title='Go Back'
            width={'60%'}
            height={40}
            onPress={() => navigation.goBack()}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Landing

const styles = StyleSheet.create({
  flex: {
    flex:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
    marginTop: 50
  }
})