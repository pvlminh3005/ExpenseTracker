import React from 'react'
import { StyleSheet } from 'react-native'
import {
    ButtonCard, NameCard, ImageCard
} from '../styles/CategoryCardStyle'
import { COLORS } from '../constants/'

export default function CategoryCard({ selectedCategory, categoriesData, handleCategory }) {

    return (
        <ButtonCard style={{ backgroundColor: (selectedCategory && selectedCategory.name == categoriesData.name) ? 'rgba(0,0,0,.05)' : COLORS.white, ...styles.shadow }} onPress={handleCategory}>
            <ImageCard
                style={{ tintColor: categoriesData.color }}
                source={categoriesData.icon} />
            <NameCard>{categoriesData.name}</NameCard>
        </ButtonCard>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
    }
})