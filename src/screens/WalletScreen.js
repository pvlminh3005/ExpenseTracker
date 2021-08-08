import React, { useState, useEffect } from 'react'
import { FlatList, Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Modal, StyleSheet, Dimensions, Animated } from 'react-native'
import { icons, COLORS, SIZES } from '../constants'
import LinearGradient from 'react-native-linear-gradient'

import { Container, HeaderContent, HeaderBar, ImageHeader, HeaderCard, ManageTracker, MiddleCard, FooterCard, ImageChip, ImageNetwork, OwnerCard, UserCard, HeaderHistory, FilterButton, HistoryView, History, Filter, ManageText, TrackerText, ModalBackground, ModalContainer, ViewModal } from '../styles/WalletStyle'
import listFilterHistory from '../../listFilterHistory'
import { getAllExpenses } from '../api/expenseAPI'
import HistoryCard from '../components/HistoryCard'
let listHistory = [] //save all history 


export default function WalletScreen({ route, navigation }) {
    const { categoriesData } = route.params
    const [showModal, setShowModal] = useState(false)
    const [expensesData, setExpensesData] = useState([]) //save to filter history
    const [selectedModal, setSelectedModal] = useState(1)

    const fetchAllExpenses = async () => {
        await getAllExpenses().then(data => {
            setExpensesData(data)
            listHistory = data
        })
    }

    useEffect(() => {
        fetchAllExpenses()
    }, [])

    const renderCard = () => {
        let categoryData = categoriesData.map(item => {
            let incomeTracker = item.expenses.filter(a => a.status == 'P')
            var totalIncome = incomeTracker.reduce((a, b) => a + (b.total || 0), 0)
            let expenseTracker = item.expenses.filter(a => a.status == 'C')
            var totalExpense = expenseTracker.reduce((a, b) => a + (b.total || 0), 0)

            return {
                total: (totalIncome - totalExpense),
                totalIncome: totalIncome,
                totalExpense: totalExpense
            }
        })

        var totalData = categoryData.reduce((a, b) => a + (b.total || 0), 0)
        var totalIncome = categoryData.reduce((a, b) => a + (b.totalIncome || 0), 0)
        var totalExpense = categoryData.reduce((a, b) => a + (b.totalExpense || 0), 0)

        return (
            <HeaderContent style={{
                borderBottomStartRadius: 15,
                borderBottomEndRadius: 15,
            }}>
                <View style={{ width: '100%', ...styles.shadow1 }}>
                    <LinearGradient
                        colors={['#FC466B', '#3F5EFB']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <HeaderCard>
                            <ImageChip
                                source={icons.chip}
                                style={{ tintColor: COLORS.white }}
                            />
                            <ImageNetwork
                                source={icons.online}
                                style={{ tintColor: COLORS.white }}
                            />
                        </HeaderCard>
                        <MiddleCard>
                            <UserCard>BALANCE:  ${totalData.toFixed(2)}</UserCard>
                        </MiddleCard>
                        <FooterCard>
                            <OwnerCard>PHAM VU LE MINH</OwnerCard>
                            {/* <ImageVisa
                            source={icons.visa}
                            style={{ tintColor: COLORS.white }}
                        /> */}
                        </FooterCard>
                    </LinearGradient>
                </View>
                <ManageTracker style={{ ...styles.shadow2 }}>
                    <View style={{
                        borderRightColor: COLORS.darkgray, borderRightWidth: 0.5,
                        ...styles.manageTracker
                    }}>
                        <TrackerText>INCOME</TrackerText>
                        <ManageText style={{ color: COLORS.lightGreen }}>+${totalIncome.toFixed(2)}</ManageText>
                    </View>
                    <View style={{ ...styles.manageTracker }}>
                        <TrackerText>EXPENSE</TrackerText>
                        <ManageText style={{ color: COLORS.red }}>-${totalExpense.toFixed(2)}</ManageText>
                    </View>
                </ManageTracker>
            </HeaderContent>
        )
    }

    const renderHeaderHistory = () => {
        return (
            <HistoryView>
                <HeaderHistory>
                    <History>History</History>
                    <FilterButton onPress={() => {
                        modalTrigger()
                        handleFilterHistory(0)
                    }}>
                        {/* <FilterButton onPress={modalTrigger}> */}
                        <Image
                            style={{ width: 20, height: 20, tintColor: 'white', marginRight: 5 }}
                            source={icons.filter}
                        />
                        <Filter>Filter</Filter>
                    </FilterButton>
                </HeaderHistory>
            </HistoryView>
        )
    }

    const handleFilterHistory = (number) => {
        switch (number) {
            case 0:
                setShowModal(true)
                break;
            case 1:
                setExpensesData(listHistory)
                break;
            case 2:
                let filterIncome = listHistory.filter(a => a.status === "P")
                setExpensesData(filterIncome)
                break;
            case 3:
                let filterExpense = listHistory.filter(a => a.status === "C")
                setExpensesData(filterExpense)
                break
            default: break;
        }
        setSelectedModal(number)
    }


    const renderHistoryPayment = () => {
        const renderItem = ({ item }) => {
            const category = categoriesData.filter(a => a._id == item.id_Category)
            return (
                <HistoryCard category={category[0]} expense={item} />
            )
        }

        return (
            <FlatList
                style={{ width: '100%' }}
                data={expensesData}
                keyExtractor={(item) => `${item._id}`}
                renderItem={renderItem}
            />

        )
    }

    //Filter Animated
    const [animation, setAnimation] = useState(new Animated.Value(0))
    const { height } = Dimensions.get('window')
    const openModal = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });
    const saveModal = animation.interpolate({
        inputRange: [1, 2],
        outputRange: [0, -height],
        extrapolate: 'clamp',
    })
    const open = {
        transform: [
            { scale: openModal },
            { translateY: saveModal }
        ]
    }
    const modalTrigger = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 350,
            useNativeDriver: false,
        }).start();
    }
    const closeModal = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 350,
            useNativeDriver: false,
        }).start();
    }

    const renderModalFilterHistory = () => {

        const renderItem = ({ item }) => {
            return (
                <ViewModal
                    activeOpacity={0.7}
                    style={{ backgroundColor: (selectedModal === item.id) ? COLORS.selected : COLORS.white }}
                    onPress={() => handleFilterHistory(item.id)}>
                    <Text style={styles.check}>{item.name}</Text>
                </ViewModal>
            )
        }

        return (
            <Modal visible={showModal} transparent>
                <TouchableWithoutFeedback onPress={() => {
                    closeModal()
                    setTimeout(() => {
                        setShowModal(false)
                    }, 360);
                }}>
                    <ModalBackground>
                        <Animated.View style={[styles.background, open]}>
                            <ModalContainer>
                                <FlatList
                                    style={{ width: '100%' }}
                                    data={listFilterHistory}
                                    keyExtractor={(item) => `${item.id}`}
                                    renderItem={renderItem}
                                />
                            </ModalContainer>
                        </Animated.View>
                    </ModalBackground>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <Container>
            <HeaderBar>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ImageHeader
                        source={icons.back_arrow}
                        style={{ tintColor: COLORS.primary }} //only Image
                    />
                </TouchableOpacity>
            </HeaderBar>
            <View style={{ width: '100%', flex: 1, alignItems: 'center' }}>
                {renderCard()}
                {renderHeaderHistory()}
                {renderHistoryPayment()}
            </View>
            {renderModalFilterHistory()}

        </Container>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 200,
        width: '100%',
    },
    manageTracker: {
        flex: 1,
        alignItems: 'center',
    },
    shadow1: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2.5,
            height: 2.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
    shadow2: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 4,
    },
    check: {
        fontSize: SIZES.h3,
        fontWeight: '600',
        color: COLORS.primary,
        letterSpacing: 0.5,
    },
    background: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
