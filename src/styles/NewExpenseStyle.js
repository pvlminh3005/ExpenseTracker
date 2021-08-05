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
    width: 75%;
    background-color: #f4f4f4;
    padding: 30px 0 0 0;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
`
export const ViewModal = styled.TouchableOpacity`
    width: 100%;
    margin: 5px 0;
    flex-direction: row;
    align-items: center;
`

//IMAGES
export const ImageHeader = styled.Image`
    width: 27px;
    height: 27px;
`