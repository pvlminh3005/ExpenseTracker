import styled from 'styled-components/native'
import { COLORS, SIZES } from '../constants'


//VIEWS
export const Container = styled.View`
    width: 310px;
    border-radius: 12px;
    background: ${COLORS.white};
    margin-right: ${SIZES.padding}px;
`
export const WrapperExpense = styled.View`
    padding: ${SIZES.base}px;
`
export const HeaderExpense = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 ${SIZES.base}px;
`
export const ContentView = styled.View`
    padding: ${SIZES.base}px ${SIZES.padding - 5}px;
    margin-bottom: ${SIZES.base + 5}px;
`
export const LocationView = styled.View`
    padding: ${SIZES.base - 5}px ${SIZES.padding - 5}px;
    margin-bottom: ${SIZES.base - 5}px;
`

//BUTTONS
export const ButtonConfirm = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${SIZES.base + 10}px ${SIZES.base}px;
    /* border-radius: 12px; */
`
export const DiscardButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 20px;
    padding: ${SIZES.base - 4}px;
    justify-content: center;
    align-items: center;
    background: ${COLORS.lightGray};
`


//TEXTS
export const NameExpense = styled.Text`
    font-size: ${SIZES.h3}px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`
export const NameContent = styled.Text`
    font-size: ${SIZES.body2}px;
    font-weight: 700;
    color: ${COLORS.primary};
    margin-bottom: 5px;
`
export const Description = styled.Text`
    font-size: ${SIZES.h3}px;
    font-weight: 500;
    color: ${COLORS.darkgray};
`
export const Location = styled.Text`
    font-size: ${SIZES.body4}px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${COLORS.primary};
`
export const Total = styled.Text`
    font-size: ${SIZES.h4}px;
    font-weight: 700;
    color: ${COLORS.lightGray2};
    text-transform: uppercase;
`
export const DiscardText = styled.Text`
    font-size: ${SIZES.h3 + 1}px;
    font-weight: 300;
    color: ${COLORS.darkgray};
`


//IMAGES
export const Image = styled.Image`
    width: 25px;
    height: 25px;
`
export const ImageExpense = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    padding: ${SIZES.base + 5}px;
    justify-content: center;
    align-items: center;
    background: ${COLORS.lightGray2};
    margin-right: ${SIZES.base}px;
`