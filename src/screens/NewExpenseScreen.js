import React, { useState } from 'react'
import { TouchableWithoutFeedback, TouchableOpacity, Modal, View, FlatList, Text } from 'react-native'
import { icons, COLORS, SIZES } from '../constants'
import { Container, ModalBackground, ModalContainer, ViewModal, HeaderBar, ImageHeader } from '../styles/NewExpenseStyle'
import CategoryCard from '../components/CategoryCard'


export default function NewExpenseScreen({ route, navigation }) {
    const { categoriesData } = route.params
    const count = categoriesData.length
    console.log(count)
    const [showModal, setShowModal] = useState(false)


    const renderCategoriesData = () => {
        return (
            <View>
                {
                    categoriesData.map((item, index) => (
                        <View>
                            <Text>{item.name}  || {index}</Text>
                            {
                                (index + 1 === count) ? (
                                    <Text>Chao</Text>
                                ) : (<></>)

                            }
                        </View>

                    ))
                }
            </View>
        )
    }

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
                <View>
                    {renderCategoriesData()}
                </View>
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
