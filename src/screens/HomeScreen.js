import React, { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity, FlatList, Animated, ImageBackground, LogBox, StatusBar, ActivityIndicator, StyleSheet } from 'react-native'
import { VictoryPie } from 'victory-native'
import {
    //View
    Container, HeaderBar, HeaderContent,
    NavContent, Content, HeaderCategories,
    ContainerCategory, TotalExpense,
    //Text
    Title1, Title2, Title3,
    Title4, Title5, Title6,
    Title7,

    //Button
    ButtonIcon, ButtonAddCategory, ButtonEffectList,
    ButtonExpense,

    //Image
    ImageHeader, ImageControl, ImageEffectList
} from '../styles/HomeStyle'
import { CategoryCard, ExpenseCard } from '../components/'

import { icons, COLORS, SIZES } from '../constants'
import { getAllCategories } from '../api/categoryAPI'
import { getAllExpenses, getExpensesById, confirmExpense } from '../api/expenseAPI'
// import listCategories from '../../listCategories'


export default function HomeScreen({ navigation }) {
    const [categoriesData, setCategoriesData] = useState([]) //save data categories

    const [refresh, setRefresh] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showMoreToggle, setShowMoreToggle] = useState(false)
    const categoryHeightAnimated = useRef(new Animated.Value(115)).current
    const [viewMode, setViewMode] = useState('chart')

    const fetchAllCategories = async () => {
        await getAllCategories().then(data => setCategoriesData(data))
    }

    useEffect(() => {
        fetchAllCategories()
    }, [])

    const renderHeader = () => {
        return (
            <HeaderContent>
                <View>
                    <Title1>My Expense</Title1>
                    <Title2>Summary (private)</Title2>
                </View>
                <NavContent>
                    <ButtonIcon style={{ backgroundColor: COLORS.lightGray }}>
                        <ImageControl
                            source={icons.calendar} />
                    </ButtonIcon>
                    <Content>
                        <Title3>2 Aug, 2021</Title3>
                        <Title4>10% more than last month</Title4>
                    </Content>
                </NavContent>
            </HeaderContent>
        )
    }
    const renderCategoriesHeader = () => {
        return (
            <HeaderCategories>
                {/* Title */}
                <View>
                    <Title3 style={{ textTransform: 'uppercase' }}>Categories</Title3>
                    <Title5>{categoriesData.length} Total</Title5>
                </View>
                {/* Buttons */}
                <View style={{ flexDirection: 'row' }}>
                    <ButtonIcon
                        style={{ backgroundColor: viewMode === 'chart' ? COLORS.secondary : null }}
                        onPress={() => setViewMode('chart')}>
                        <ImageControl
                            source={icons.chart}
                            style={{ tintColor: viewMode === 'chart' ? COLORS.white : COLORS.darkgray }}
                        />
                    </ButtonIcon>
                    <ButtonIcon
                        style={{
                            backgroundColor: viewMode === 'menu_list' ? COLORS.secondary : null
                        }}
                        onPress={() => setViewMode('menu_list')}>
                        <ImageControl
                            source={icons.menu_list}
                            style={{ tintColor: viewMode === 'menu_list' ? COLORS.white : COLORS.darkgray }}
                        />
                    </ButtonIcon>
                </View>
            </HeaderCategories>
        )
    }
    const renderCategoriesList = () => {
        const handleShowMore = () => {
            if (showMoreToggle) {
                Animated.timing(categoryHeightAnimated, {
                    toValue: 113,
                    duration: 300,
                    useNativeDriver: false,
                }).start()
            } else {
                Animated.timing(categoryHeightAnimated, {
                    toValue: 173,
                    duration: 300,
                    useNativeDriver: false,
                }).start()
            }
            setShowMoreToggle(!showMoreToggle)
        }

        const renderItem = ({ item }) => {
            //handle category
            const handleCategory = () => {
                setSelectedCategory(item)
            }
            return (
                <CategoryCard item={item} handleCategory={handleCategory} selectedCategory={selectedCategory} />
            )
        }
        return (
            <View>
                <Animated.View style={{ height: categoryHeightAnimated }}>
                    <FlatList
                        data={categoriesData}
                        keyExtractor={(item) => `${item._id}`}
                        renderItem={item => renderItem(item)}
                        numColumns={2}
                        scrollEnabled={false}
                    />
                </Animated.View>
                {
                    (categoriesData.length > 4) ? (
                        <ButtonEffectList
                            activeOpacity={0.7}
                            onPress={handleShowMore}>
                            <Title5>{showMoreToggle ? 'LESS' : 'MORE'}</Title5>
                            <ImageEffectList
                                source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                                style={{ tintColor: COLORS.darkgray, marginLeft: 4 }}
                            />
                        </ButtonEffectList>
                    ) : (<></>)
                }
            </View>
        )
    }
    const renderIncomingExpense = () => {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpense = allExpenses.filter(a => a.status == "P")
        const renderHeaderIncomingExpense = () => {
            return (
                <View style={{ marginBottom: SIZES.padding }}>
                    <Title3 style={{ textTransform: 'uppercase' }}>Incoming Expense</Title3>
                    <Title5>{incomingExpense.length} Total</Title5>
                </View>
            )
        }
        const handleConfirm = async (item) => {
            item.status = "C" //fake UI 
            setRefresh(true)
            await confirmExpense(item._id, "C").then(() => {
                setTimeout(() => {
                    setRefresh(false)
                }, 250);
            })
        }
        return (
            <View style={{ marginTop: SIZES.padding }}>
                {renderHeaderIncomingExpense()}
                {
                    (incomingExpense.length > 0) ? (
                        <FlatList
                            style={{ paddingBottom: 5 }}
                            data={incomingExpense}
                            keyExtractor={(item) => `${item._id}`}
                            renderItem={({ item }) => <ExpenseCard selectedCategory={selectedCategory} handleConfirm={handleConfirm} item={item} />}
                            refreshing={refresh}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    ) : (<View style={{ alignItems: 'center' }}>
                        <ImageBackground
                            style={{ height: 300, width: '100%' }}
                            source={require('../assets/images/empty.png')}
                        />
                    </View>)
                }
            </View>
        )
    }
    // category display
    const processCategoryToDataDisplay = () => { //ERROR HERE! MUST FIX
        //Filter expense with CONFIRM status
        let chartData = categoriesData.map(item => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0) //0: initialValue when empty array

            return {
                id: item._id,
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
            }

        })
        //Filter out categories with no data/expenses
        let filterChartData = chartData.filter(a => a.y > 0)
        //Calculator the total expenses
        let totalExpenses = filterChartData.reduce((a, b) => a + (b.y || 0), 0)
        //Calculate % & repopulate chart data
        let finalChartData = filterChartData.map(item => {
            let percentage = ((item.y / totalExpenses) * 100).toFixed(1)
            return {
                id: item.id,
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
            }
        })
        return finalChartData

    }
    const setSelectedCategoryByName = (name) => {
        let category = categoriesData.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }
    const renderChart = () => {
        let chartData = processCategoryToDataDisplay()
        let colorScales = chartData.map(item => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: SIZES.base + 5 }}>
                <VictoryPie
                    data={chartData}
                    colorScale={colorScales}
                    labels={(datum) => `${datum.y}`}
                    radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * .4 : SIZES.width * .4 - 10}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => (SIZES.width * .4 + innerRadius) / 2.5}
                    style={{
                        labels: { fill: COLORS.white, fontWeight: '500', fontSize: SIZES.h4 },
                        parent: { ...styles.shadow }

                    }}
                    width={SIZES.width * .8}
                    height={SIZES.width * .8}
                    events={[{
                        target: 'data',
                        eventHandlers: {
                            onPress: () => {
                                return [{
                                    target: 'labels',
                                    mutation: (props) => {
                                        let categoryName = chartData[props.index].name
                                        setSelectedCategoryByName(categoryName)
                                    }
                                }]
                            }
                        }
                    }]}
                />
                <TotalExpense>
                    <Title6 style={{ textAlign: 'center' }}>{totalExpenseCount}</Title6>
                    <Title2 style={{ textAlign: 'center' }}>Expenses</Title2>
                </TotalExpense>
            </View>

        )
    }

    const renderExpenseSummary = () => {
        let data = processCategoryToDataDisplay()

        const renderItem = ({ item }) => {
            return (
                <ButtonExpense
                    onPress={() => setSelectedCategory(item)}
                    style={{ backgroundColor: (selectedCategory && selectedCategory.name === item.name ? item.color : COLORS.lightGray2) }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: (selectedCategory && selectedCategory.name === item.name ? COLORS.white : item.color), ...styles.boxColor }} />
                        <Title7 style={{ color: (selectedCategory && selectedCategory.name === item.name ? COLORS.white : COLORS.black) }}>{item.name}</Title7>
                    </View>
                    {/* Name/Categories */}
                    <View>
                        <Title4 style={{ color: (selectedCategory && selectedCategory.name === item.name ? COLORS.white : COLORS.black) }}>{item.y.toFixed(2)} USD - {item.label}</Title4>
                    </View>
                </ButtonExpense>
            )
        }

        return (
            <View style={{ backgroundColor: 'transparent', marginTop: SIZES.base }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.id}`}
                />
            </View>
        )
    }

    //main screen
    return (
        <Container>
            <StatusBar barStyle='dark-content' />
            {/* Add new Category & Expense */}
            <ButtonAddCategory onPress={() => navigation.navigate('NewExpense')}>
                <ImageControl
                    style={{ tintColor: COLORS.white }}
                    source={icons.plus}
                />
            </ButtonAddCategory>
            <HeaderBar>
                <TouchableOpacity>
                    <ImageHeader
                        source={icons.back_arrow}
                        style={{ tintColor: COLORS.primary }} //only Image
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Wallet', { categoriesData: categoriesData })}>
                    <ImageHeader
                        source={icons.wallet}
                        style={{ tintColor: COLORS.primary }}
                    />
                </TouchableOpacity>
            </HeaderBar>
            {/* Header section */}
            {renderHeader()}
            {/* Categories Header Section */}
            {renderCategoriesHeader()}
            <ContainerCategory
                showsVerticalScrollIndicator={false}>
                {
                    (viewMode === 'menu_list') ? (
                        <View>
                            {renderCategoriesList()}
                            {renderIncomingExpense()}
                        </View>
                    ) : ( //viewMode === 'chart
                        <View>
                            {renderChart()}
                            {renderExpenseSummary()}
                        </View>
                    )
                }
            </ContainerCategory>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },
    boxColor: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 8,
    },
    load: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

LogBox.ignoreAllLogs();//Ignore all log notifications