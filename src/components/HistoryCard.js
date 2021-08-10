import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/'

export default function HistoryCard({ category, expense }) {
    var formatDate = new Date(expense.registration_data)
    formatTime = formatDate.toTimeString().split(' ').slice(0, 1)
    console.log(formatTime)
    const value = (expense.status === "C") ? "-" : "+"
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.circle}>
                    <Image
                        style={{ tintColor: category.color, ...styles.imageCategory }}
                        source={category.icon}
                    />
                </View>
                <View>
                    <Text style={styles.name}>{category.name}</Text>
                    <Text style={styles.title}>{expense.title}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={{ textAlign: 'left', color: (expense.status === "P") ? COLORS.lightGreen : COLORS.red, ...styles.value }}>{value}${expense.total.toFixed(2)}</Text>
                <Text style={styles.date}>{formatTime}</Text>
                <Text style={styles.date}>{formatDate.toDateString()}</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: SIZES.base + 2,
        paddingVertical: SIZES.base + 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.gray,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '60%',
    },
    circle: {
        width: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        marginRight: 8,

    },
    imageCategory: {
        width: 27,
        height: 27,
    },
    name: {
        fontSize: SIZES.body2,
        fontWeight: '500',
        letterSpacing: 0.4,
        color: COLORS.primary,
    },
    title: {
        fontSize: SIZES.h3,
        fontWeight: '400',
        color: COLORS.darkgray,
    },
    value: {
        fontSize: SIZES.h3,
        fontWeight: '400',
        letterSpacing: 0.4,
    },
    date: {
        fontSize: SIZES.body4 + 1,
        fontWeight: '300',
        color: COLORS.darkgray,
    },
    wrapper: {
        flexDirection: 'column', alignItems: 'center',
        justifyContent: 'space-between',
    }

})
