import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'
import React, { useEffect, useRef } from 'react'

import animation from './animation.json'

export const LoadIndicator = () => {
  const animationRef = useRef<LottieView>(null)
  
  useEffect(() => {
    animationRef.current?.play()

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120)
  }, [])

  return (
    <View style={styles.isShow}>
      <LottieView
        isClickToPauseDisabled
        source={animation}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  isShow :{
    flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }
})
