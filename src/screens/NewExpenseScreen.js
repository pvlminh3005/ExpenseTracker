import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, TouchableOpacity, Modal, View, FlatList, StyleSheet, Text, Animated, Dimensions, Image, TextInput, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { icons, COLORS, SIZES } from '../constants'
import listIcons from '../../listIcons'
import { Container, ModalBackground, ModalContainer, HeaderBar, ImageHeader, FormInputName, FormIcon, Name, NameInput, ButtonAddNewCategory, ImageAdd } from '../styles/NewExpenseStyle'
import { createCategory } from '../api/categoryAPI'
import { createNewExpense } from '../api/expenseAPI'


export default function NewExpenseScreen({ route, navigation }) {
    const { categoriesData } = route.params
    const [showModal, setShowModal] = useState(false)
    const [selectedIcon, setSelectedIcon] = useState({
        name: null,
        icon: null,
        color: null,
    })
    const [openDropdown1, setOpenDropdown1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([]);
    const [openDropdown2, setOpenDropdown2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Pending', value: 'P' },
        { label: 'Confirm', value: 'C' }
    ]);
    const [newExpense, setNewExpense] = useState({
        id_Category: null,
        title: null,
        description: null,
        location: null,
        total: 0,
        status: null
    })


    useEffect(() => {
        categoriesData.map(item => {
            setItems1(items => [...items, {
                label: item.name,
                value: item._id,
                icon: () =>
                    <View style={styles.containerIcon} >
                        <Image
                            style={{ tintColor: item.color, ...styles.iconStyle }}
                            source={item.icon}
                        />
                    </View>
            }])
        })
    }, [])

    const handleAddExpense = async () => {
        await createNewExpense(newExpense).then(() => {
            setNewExpense({
                id_Category: null,
                title: null,
                total: 0,
                description: null,
                location: null,
            })
            setValue1(null)
            setValue2(null)
            alert("Create success")
        })
    }

    const renderCategoriesData = () => {
        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Text style={styles.titleContent}>New expense</Text>
                <DropDownPicker
                    listMode="FLATLIST"
                    listParentContainerStyle={{ marginVertical: 5 }}
                    listParentLabelStyle={{
                        fontWeight: "400",
                        fontSize: SIZES.h4,
                        color: COLORS.primary
                    }}
                    placeholder="Select a category"
                    placeholderStyle={{
                        color: COLORS.darkgray,
                        fontWeight: "500",
                        fontSize: SIZES.h4
                    }}
                    dropDownContainerStyle={{
                        borderWidth: 0.3,
                        borderColor: COLORS.darkgray
                    }}
                    style={{ borderWidth: 0.4, borderColor: COLORS.darkgray }}
                    labelStyle={{ fontSize: SIZES.h3, fontWeight: '500', color: COLORS.primary }}
                    open={openDropdown1}
                    value={value1}
                    items={items1}
                    setOpen={setOpenDropdown1}
                    setValue={setValue1}
                    setItems={setItems1}
                    onChangeValue={(value) => {
                        setNewExpense({ ...newExpense, id_Category: value })
                    }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.padding - 5 }}>
                    <Text style={styles.title}>Status</Text>
                    <Image
                        style={styles.iconStyle}
                        source={icons.status} />
                </View>
                <DropDownPicker
                    listMode="FLATLIST"
                    listParentContainerStyle={{ marginVertical: 5, backgroundColor: COLORS.white }}
                    listParentLabelStyle={{
                        fontWeight: "400",
                        fontSize: SIZES.h4,
                        color: COLORS.primary
                    }}
                    placeholder="Select a status"
                    placeholderStyle={{
                        color: COLORS.darkgray,
                        fontWeight: "500",
                        fontSize: SIZES.h4
                    }}
                    dropDownContainerStyle={{
                        borderWidth: 0.3,
                        borderColor: COLORS.darkgray
                    }}
                    style={{ borderWidth: 0.4, borderColor: COLORS.darkgray, width: '55%', marginTop: SIZES.base }}
                    labelStyle={{ fontSize: SIZES.h3, fontWeight: '500', color: COLORS.primary }}
                    zIndex={1000}
                    zIndexInverse={1000}
                    open={openDropdown2}
                    value={value2}
                    items={items2}
                    setOpen={setOpenDropdown2}
                    setValue={setValue2}
                    setItems={setItems2}
                    onChangeValue={(value) => {
                        setNewExpense({ ...newExpense, status: value })
                    }}
                />
                <View>
                    <View style={styles.viewColumn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.title}>Title</Text>
                            <Image
                                style={styles.iconStyle}
                                source={icons.title} />
                        </View>
                        <TextInput
                            value={newExpense.title}
                            style={{ height: 55, ...styles.textInput }}
                            onChangeText={value => setNewExpense({ ...newExpense, title: value })} />
                    </View>
                    <View style={styles.viewColumn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.title}>Total</Text>
                            <Image
                                style={styles.iconStyle}
                                source={icons.total} />
                        </View>
                        <TextInput
                            value={newExpense.total}
                            defaultValue={0}
                            keyboardType='numeric'
                            style={{ height: 55, ...styles.textInput }}
                            onChangeText={value => setNewExpense({ ...newExpense, total: value })} />
                    </View>
                    <View style={styles.viewColumn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.title}>Description</Text>
                            <Image
                                style={styles.iconStyle}
                                source={icons.description} />
                        </View>
                        <TextInput
                            value={newExpense.description}
                            style={{ height: 155, ...styles.textInput }}
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={value => setNewExpense({ ...newExpense, description: value })} />
                    </View>
                    <View style={styles.viewColumn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.title}>Address</Text>
                            <Image
                                style={styles.iconStyle}
                                source={icons.pin} />
                        </View>
                        <TextInput
                            value={newExpense.location}
                            style={{ height: 155, ...styles.textInput }}
                            underlineColorAndroid="transparent"
                            placeholder="Type address"
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={value => setNewExpense({ ...newExpense, location: value })} />
                    </View>
                </View>
                <View style={styles.viewRow}>
                    <TouchableOpacity
                        onPress={handleAddExpense}
                        style={{ backgroundColor: COLORS.primary, ...styles.formButton }}
                    >
                        <Text style={styles.nameButton}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: COLORS.lightRed, ...styles.formButton }}
                    >
                        <Text style={styles.nameButton}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
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

    const renderModalNewCategory = () => {
        const renderItem = ({ item }) => {

            const handleIcon = () => {
                setSelectedIcon({
                    ...selectedIcon,
                    icon: item.icon,
                    color: item.color,
                })
            }

            return (
                <TouchableOpacity
                    onPress={handleIcon}
                    style={{ ...styles.formIcon }}>
                    <Image
                        style={{ tintColor: item.color, ...styles.icon }}
                        source={item.icon}
                    />
                </TouchableOpacity>
            )
        }

        const handleAddNewCategory = async () => {
            if (selectedIcon.name && selectedIcon.icon) {
                var checkName = categoriesData.filter(a => a.name === selectedIcon.name)
                if (checkName.length === 0) {
                    await createCategory(selectedIcon).then((data) => {
                        alert('Create success')
                        setTimeout(() => {
                            closeModal()
                            setTimeout(() => {
                                setShowModal(false)
                            }, 300);
                        }, 360);
                    })
                }
                else
                    alert("Name category exist")
            }
            else {
                if ((selectedIcon.name === "" || selectedIcon.name === null) && !selectedIcon.icon) alert('Error')
                else if (!selectedIcon.icon) alert('You must choose icon')
                else if (selectedIcon.name === "" || !selectedIcon.name) alert('You must enter your category name')

            }
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
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: SIZES.base + 5 }}>
                                    <FormInputName>
                                        <View style={{
                                            borderRightWidth: 0.8,
                                            borderRightColor: COLORS.gray,
                                            paddingRight: SIZES.base,
                                            justifyContent: 'center'
                                        }}>
                                            <Name>Name</Name>
                                        </View>
                                        <NameInput
                                            onChangeText={val => setSelectedIcon({ ...selectedIcon, name: val })}
                                            placeholder="Enter category"
                                            placeholderTextColor={COLORS.darkgray}
                                        />
                                    </FormInputName>
                                    <FormIcon>
                                        <Image
                                            style={{ tintColor: selectedIcon.color, ...styles.icon }}
                                            source={selectedIcon.icon}
                                        />
                                    </FormIcon>
                                </View>
                                <View>
                                    <FlatList
                                        contentContainerStyle={{
                                            justifyContent: 'center', alignItems: 'stretch'
                                        }}
                                        style={{ width: '100%', marginTop: 15, paddingHorizontal: SIZES.base + 5, }}
                                        data={listIcons}
                                        keyExtractor={(item) => `${item.id}`}
                                        renderItem={renderItem}
                                        numColumns={4}
                                    />
                                </View>
                                <ButtonAddNewCategory onPress={handleAddNewCategory}>
                                    <ImageAdd
                                        style={{ tintColor: COLORS.primary }}
                                        source={icons.add}
                                    />
                                </ButtonAddNewCategory>
                            </ModalContainer>
                        </Animated.View>
                    </ModalBackground>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Container>
                <HeaderBar>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageHeader
                            source={icons.back_arrow}
                            style={{ tintColor: COLORS.primary }} //only Image
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setShowModal(true)
                        modalTrigger()
                    }}>
                        <ImageHeader
                            source={icons.more}
                            style={{ tintColor: COLORS.primary }}
                        />
                    </TouchableOpacity>
                </HeaderBar>
                <ScrollView style={{ flex: 1, marginBottom: 10 }}>
                    {renderCategoriesData()}
                </ScrollView>
            </Container>
            {renderModalNewCategory()}
        </View>

    )
}


const styles = StyleSheet.create({
    formIcon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: SIZES.base,
        backgroundColor: COLORS.lightGray2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        width: 36,
        height: 36,
    },
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
    },
    containerIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 22,
        height: 22
    },
    viewColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: SIZES.padding - 5,
    },
    viewRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: SIZES.padding - 5,
        marginRight: -5,
    },
    title: {
        fontSize: SIZES.h3 + 1,
        fontWeight: '600',
        letterSpacing: 0.3,
        color: COLORS.primary,
        marginRight: 7,
    },
    textInput: {
        marginTop: SIZES.base,
        borderWidth: 0.5,
        borderColor: COLORS.gray,
        borderRadius: 8,
        padding: SIZES.base,
        fontSize: SIZES.h4,
        fontWeight: '400',
        color: COLORS.prestigeBlue,
        backgroundColor: COLORS.white
    },
    formButton: {
        flex: 1,
        borderRadius: 8,
        padding: SIZES.padding - 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    nameButton: {
        fontSize: SIZES.h2,
        fontWeight: '600',
        color: COLORS.white,
        textTransform: 'uppercase',
    },
    titleContent: {
        fontSize: SIZES.h2,
        fontWeight: '600',
        color: COLORS.primary,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: SIZES.base + 5,
    }
})
