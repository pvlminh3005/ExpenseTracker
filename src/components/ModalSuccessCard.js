import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback, Modal, Animated, Image, StyleSheet } from 'react-native'
import { icons, COLORS, SIZES } from '../constants/'

export default function ModalSuccessCard({ visible, setVisible, open, close }) {
    return (
        <Modal transparent visible={visible}>
            <TouchableWithoutFeedback onPress={() => {
                close()
                setTimeout(() => {
                    setVisible(false);
                }, 360);
            }}>
                <View style={styles.modalBackground}>
                    <Animated.View style={[styles.background, open]}>
                        <View style={styles.header}>
                            <Image
                                source={icons.cancel}
                                style={{ tintColor: COLORS.black, width: 23, height: 23 }}
                            />
                        </View>
                        <Image
                            source={icons.success}
                            style={{ tintColor: COLORS.lightGreen, height: 150, width: 150 }}
                        />
                        <Text style={styles.text}>Create successful!</Text>
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
        width: '80%',
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    text: {
        fontSize: SIZES.h2,
        fontWeight: '500',
        color: COLORS.primary,
        marginVertical: 20,
    }
})