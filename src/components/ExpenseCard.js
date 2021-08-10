import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { icons, COLORS } from '../constants'
import {
    //Views
    Container, WrapperExpense, HeaderExpense,
    ContentView, LocationView,

    //Buttons
    ButtonConfirm, DiscardButton,

    //Texts
    NameExpense, NameContent, Description,
    Location, Total, DiscardText,

    //Image
    Image, ImageExpense,

} from '../styles/ExpenseCardStyle'

export default function ExpenseCard({ selectedCategory, item, handleConfirm }) {

    return (
        <Container style={{ ...styles.shadow }}>
            <View>
                {/* Header */}
                <WrapperExpense>
                    <HeaderExpense>
                        <ImageExpense>
                            <Image
                                style={{ width: 25, height: 25, tintColor: selectedCategory.color }}
                                source={selectedCategory.icon}
                            />
                        </ImageExpense>
                        <NameExpense style={{ color: selectedCategory.color }}>{selectedCategory.name}</NameExpense>
                    </HeaderExpense>
                </WrapperExpense>
                {/* <DiscardButton>
                    <DiscardText>一</DiscardText>
                </DiscardButton> */}
            </View>
            {/* Description */}
            <ContentView>
                <NameContent>{item.title}</NameContent>
                <Description>{item.description}</Description>
            </ContentView>
            {/* Location */}
            <LocationView>
                <Location>Location</Location>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                    <Image
                        style={{ marginRight: 5 }}
                        source={icons.pin} />
                    <Description>{item.location}</Description>
                </View>
            </LocationView>
            {/* Button confirm */}
            <ButtonConfirm
                style={{
                    borderBottomStartRadius: 12,
                    borderBottomEndRadius: 12,
                    backgroundColor: selectedCategory.color
                }}
                activeOpacity={0.7}
                onPress={() => handleConfirm(item)}
            >
                <Total>Confirm {item.total} USD</Total>
            </ButtonConfirm>
        </Container >
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
        shadowRadius: 3,
        elevation: 0,
    }
})