import styled from 'styled-components/native'
import { COLORS, SIZES } from '../constants'


//VIEWS
export const Container = styled.View`
    flex: 1;
    background: ${COLORS.lightGray2};
    /* padding: ${SIZES.base + 5}px 0; */
`
export const HeaderBar = styled.View`
    width: 100%;
    height: 80px;
    padding: 5px ${SIZES.padding - 5}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${COLORS.white};
`
export const HeaderContent = styled.View`
    padding: ${SIZES.base}px ${SIZES.padding}px;
    background-color: ${COLORS.white};
`
export const NavContent = styled.View`
    flex-direction: row;
    margin-top: ${SIZES.padding}px;
    align-items: center;
`
export const Content = styled.View`
    margin-left: ${SIZES.padding}px;
`
export const HeaderCategories = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${SIZES.base + 5}px ${SIZES.padding}px;
`
export const ContainerCategory = styled.ScrollView`
    padding: 0 ${SIZES.padding}px;
    
`
export const TotalExpense = styled.View`
    position: absolute;
    top: 42%;
    left: 39.5%;
`

//TEXT
export const Title1 = styled.Text`
    font-size: ${SIZES.h2}px;
    color: ${COLORS.primary};
`
export const Title2 = styled.Text`
    font-size: ${SIZES.h3}px;
    color: ${COLORS.darkgray};
`
export const Title3 = styled.Text`
    font-size: ${SIZES.h3}px;
    font-weight: 600;
    color: ${COLORS.primary};
`
export const Title4 = styled.Text`
    font-size: ${SIZES.body3}px;
    color: ${COLORS.darkgray};
`
export const Title5 = styled.Text`
    font-size: ${SIZES.body4}px;
    color: ${COLORS.darkgray};
`
export const Title6 = styled.Text`
    font-size: ${SIZES.h2}px;
    color: ${COLORS.black};
    font-weight: 600;
`
export const Title7 = styled.Text`
    font-size: ${SIZES.h3}px;
    font-weight: 500;
`

//BUTTONS
export const ButtonIcon = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`
export const ButtonAddCategory = styled.TouchableOpacity`
    position: absolute;
    bottom: 2.5%;
    right: 4.5%;
    width: 60px;
    height: 60px;
    background: ${COLORS.primary};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
export const ButtonEffectList = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: ${SIZES.base}px 0;
`
export const ButtonExpense = styled.TouchableOpacity`
    height: 40px;
    border-radius: 6px;
    padding: ${SIZES.base}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


//IMAGES
export const ImageHeader = styled.Image`
    width: 27px;
    height: 27px;
`
export const ImageControl = styled.Image`
    width: 22px;
    height: 22px;
`
export const ImageEffectList = styled.Image`
    width: 20px;
    height: 20px;
`