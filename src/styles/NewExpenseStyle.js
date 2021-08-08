import styled from 'styled-components/native'
import { COLORS, SIZES } from '../constants'

//VIEWS
export const Container = styled.View`
    flex: 1;
    background: ${COLORS.lightGray2};
    padding: ${SIZES.base + 5}px 0;
`
export const HeaderBar = styled.View`
    width: 100%;
    height: 80px;
    padding: 5px ${SIZES.padding - 5}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`
//MODAL
export const ModalBackground = styled.View`
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.6);
    justify-content: center;
    align-items: center;
`
export const ModalContainer = styled.View`
    position: relative;
    width: 90%;
    height: 65%;
    max-height: 75%;
    background-color: ${COLORS.primary};
    /* padding: ${SIZES.base + 5}px; */
    border-radius: 15px;
    overflow: hidden;
    /* align-items: center; */
`
export const FormInputName = styled.View`
    width: 80%;
    display: flex;
    background: ${COLORS.white};
    /* margin: ${SIZES.base + 5}px; */
    padding: ${SIZES.padding - 5}px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const FormIcon = styled.View`
    /* flex: 1; */
    width: 62px;
    height: 62px;
    border-radius: 32px;
    background-color: ${COLORS.white};
    align-items: center;
    justify-content: center;
`

export const ViewModal = styled.TouchableOpacity`
    width: 100%;
    margin: 5px 0;
    flex-direction: row;
    align-items: center;
`
export const ButtonAddNewCategory = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 5px;
    background: ${COLORS.lightGray2};
    padding: ${SIZES.padding - 6}px;
    align-items: center;
    justify-content: center;
`


//TEXTS
export const Name = styled.Text`
    font-size: ${SIZES.h4}px;
    font-weight: 500;
    color: ${COLORS.primary};
    text-align: center;
`
export const NameInput = styled.TextInput`
    font-size: ${SIZES.h4}px;
    font-weight: 500;
    flex: 1;
    padding: 0 5px;
    color: ${COLORS.primary};
`

//IMAGES
export const ImageHeader = styled.Image`
    width: 27px;
    height: 27px;
`
export const ImageAdd = styled.Image`
    width: 35px;
    height: 35px;
`