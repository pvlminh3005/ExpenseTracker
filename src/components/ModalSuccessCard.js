import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Modal, Animated, StyleSheet } from 'react-native'


export default function ModalSuccessCard() {
    const [visible, setVisible] = useState(true)
    return (
        <Modal transparent visible={visible}>
            <TouchableWithoutFeedback onPress={() => {
                // closeModal()
                // setTimeout(() => {
                // }, 360);
                setVisible(false)
            }}>
                <View style={styles.modalBackground}>
                    <Animated.View style={styles.background}>

                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    )
}


const styles = StyleSheet.create({
    modalBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})