import React, { useState } from 'react'
import { TouchableWithoutFeedback, TouchableOpacity, Modal, View } from 'react-native'
import { icons, COLORS, SIZES } from '../constants'

import { Container, ModalBackground, ModalContainer, ViewModal, HeaderBar, ImageHeader } from '../styles/NewExpenseStyle'


export default function NewExpenseScreen({ navigation }) {
    const [showModal, setShowModal] = useState(true)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Container>
                <HeaderBar>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageHeader
                            source={icons.back_arrow}
                            style={{ tintColor: COLORS.primary }} //only Image
                        />
                    </TouchableOpacity>
                </HeaderBar>
            </Container>


            {/* Modal */}
            <Modal visible={showModal} transparent>
                <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                    <ModalBackground />
                </TouchableWithoutFeedback>
                <ModalContainer>
                    <ViewModal></ViewModal>
                </ModalContainer>
            </Modal>
        </View>

    )
}
