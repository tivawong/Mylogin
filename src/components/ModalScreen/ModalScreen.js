import Modal from 'react-native-modal'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ButtonPrimary, ButtonSecondary } from '../Button'
import { COLORS } from '../../constants/colors'

export const ModalScreen = ({
  isVisible,
  isLoading,
  content,
  textButton,
  textButtonLeft,
  onPress,
  onCancel,
}) => {
  return (
    <Modal 
      isVisible={isVisible}
      style={styles.modal}
      backdropOpacity={0.2}
      >
      <React.Fragment>
        {isLoading ? (
           <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.text}>{content}</View>
           </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.text}>{content}</View>
            <View style={{flexDirection: 'row'}}>
              {textButtonLeft && <View style={{flex: 1, alignItems: 'center'}}>
                <ButtonSecondary
                  title={textButtonLeft}
                  height={35}
                  width={'70%'}
                  onPress={onCancel}
                />
              </View>}
              <View style={{flex:1, alignItems: 'center'}}>
                <ButtonPrimary 
                  title={textButton}
                  height={35}
                  width={'70%'}
                  onPress={onPress}
                />
              </View>
            </View>
          </View>
        )}

      </React.Fragment>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal:{
    padding: 10,
    height: '100%',
  },
  container:{
    backgroundColor: COLORS.NEUTRAL.WHITE,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 20, 
    paddingHorizontal: 10
  },
  areaButton: {
    flexDirection: 'row',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
