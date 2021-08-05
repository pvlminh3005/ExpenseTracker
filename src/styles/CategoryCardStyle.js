import styled from 'styled-components/native'
import { COLORS, SIZES } from '../constants'

//BUTTON
export const ButtonCard = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${SIZES.radius}px ${SIZES.padding}px;
    border-radius: 7px;
    margin: 5px;
`

//IMAGE
export const ImageCard = styled.Image`
    width: 24px;
    height: 24px;
`

//TEXT
export const NameCard = styled.Text`
    font-size: ${SIZES.h4}px;
    font-weight: 500;
    color: ${COLORS.primary};
    margin-left: ${SIZES.base}px;

`