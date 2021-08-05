import React, { useState, useEffect } from 'react'
import { FlatList, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { icons, COLORS, SIZES } from '../constants'
import LinearGradient from 'react-native-linear-gradient'

import { Container, HeaderContent, HeaderBar, ImageHeader, HeaderCard, ManageTracker, MiddleCard, ExpireCard, FooterCard, ImageChip, ImageNetwork, ImageVisa, OwnerCard, UserCard, DateExpired, ValidCard, HeaderHistory, FilterButton, HistoryView, History, Filter, ManageText, TrackerText } from '../styles/WalletStyle'
import { getAllExpenses, getExpensesById, confirmExpense } from '../api/expenseAPI'
import HistoryCard from '../components/HistoryCard'

export default function WalletScreen({ route, navigation }) {
    const { categoriesData } = route.params
    const [expensesData, setExpensesData] = useState([])
    const [expensesData1, setExpensesData1] = useState([])


    const fetchAllExpenses = async () => {
        await getAllExpenses().then(data => {
            setExpensesData(data)
        })
    }

    useEffect(() => {
        fetchAllExpenses()
    }, [navigation])

    const renderCard = () => {
        let incomeTracker = expensesData.filter(a => a.status == 'P')
        let totalIncome = incomeTracker.reduce((a, b) => (a + b.total || 0), 0)
        let expenseTracker = expensesData.filter(a => a.status == 'C')
        let totalExpense = expenseTracker.reduce((a, b) => (a + b.total || 0), 0)

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
                            <UserCard>BALANCE:  ${(totalIncome - totalExpense).toFixed(2)}</UserCard>
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
            <HistoryView style={{ borderBottomWidth: 0.7 }}>
                <HeaderHistory>
                    <History>History</History>
                    <FilterButton>
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


    const renderHistoryPayment = () => {
        const renderItem = ({ item }) => {
            const category = categoriesData.filter(a => a._id == item.id_Category)
            const value = (item.status === "C") ? "-" : "+"
            return (
                <HistoryCard category={category[0]} expense={item} />
                // <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                //     <Image
                //         style={{ width: 30, height: 30, tintColor: category[0].color }}
                //         source={category[0].icon}
                //     />
                //     <View>
                //         <Text>{category[0].name}</Text>
                //         <Text>{item.title}</Text>
                //     </View>
                //     <Text>{value}${item.total.toFixed(2)}</Text>
                // </View>
            )
        }

        return (
            <View>
                <FlatList
                    data={expensesData}
                    keyExtractor={(item) => `${item._id}`}
                    renderItem={renderItem}
                />
            </View>
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
            <View style={{ width: '100%' }}>
                {renderCard()}
                {renderHeaderHistory()}
                {renderHistoryPayment()}
            </View>
        </Container >
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
})
