import styled from 'styled-components/native'
import { COLORS, SIZES } from '../constants'

//VIEWS
export const Container = styled.View`
    flex: 1;
    /* padding: ${SIZES.base + 5}px 0; */
    align-items: center;
    background: ${COLORS.lightGray};
`
export const HeaderBar = styled.View`
    width: 100%;
    height: 80px;
    padding: 5px ${SIZES.padding - 5}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    background: ${COLORS.white};
`
export const HeaderContent = styled.View`
    width: 100%;
    padding: 0 ${SIZES.padding - 5}px;
    align-items: center;
    background: ${COLORS.white};
`
export const HeaderCard = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const MiddleCard = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`
export const ExpireCard = styled.View`
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${SIZES.base + 5}px;
`
export const FooterCard = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ManageTracker = styled.View`
    background: ${COLORS.white};
    flex-direction: row;
    align-items: center;
    width: 70%;
    border-radius: 10px;
    margin: ${SIZES.padding}px 0;
    justify-content: center;
    padding: 12px;
`
export const HeaderHistory = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:0 ${SIZES.base}px;
    `
export const HistoryView = styled.View`
    padding: ${SIZES.base + 2}px 0;
    margin: ${SIZES.base - 5}px ${SIZES.base}px;
    border-color: ${COLORS.gray};
    width: 95%;
`


//BUTTONS
export const FilterButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: ${SIZES.base + 3}px ${SIZES.base + 7}px;
    border-radius: 5px;
    background: ${COLORS.gray};
`

//TEXTS
export const OwnerCard = styled.Text`
    font-size: ${SIZES.h4}px;
    font-weight:  400;
    color: ${COLORS.white};
    text-transform: uppercase;
`
export const UserCard = styled.Text`
    font-size: ${SIZES.body2}px;
    font-weight:  600;
    letter-spacing: 0.5px;
    color: ${COLORS.white};
    text-transform: uppercase;
`
export const ValidCard = styled.Text`
    font-size: ${SIZES.body4}px;
    font-weight: 400;
    color: ${COLORS.white};
`
export const DateExpired = styled.Text`
    font-size: ${SIZES.padding - 2}px;
    font-weight:  400;
    color: ${COLORS.white};
    text-transform: uppercase;
`
export const History = styled.Text`
    font-size: ${SIZES.padding}px;
    font-weight:  600;
    color: ${COLORS.primary};
`
export const Filter = styled.Text`
    font-size: ${SIZES.h4}px;
    font-weight:  500;
    color: ${COLORS.white};
`
export const ManageText = styled.Text`
    font-size: ${SIZES.h3}px;
    font-weight: 400;
    letter-spacing: 0.7px;
`
export const TrackerText = styled.Text`
    font-size: ${SIZES.h4}px;
    font-weight: 500;
    color: ${COLORS.primary};
    letter-spacing: 0.5px;
    margin-bottom: 5px;
`

//IMAGES
export const ImageHeader = styled.Image`
    width: 27px;
    height: 27px;
`
export const ImageChip = styled.Image`
    width: 45px;
    height: 35px;
`
export const ImageNetwork = styled.Image`
    width: 25px;
    height: 25px;
`
export const ImageVisa = styled.Image`
    width: 60px;
    height: 40px;
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
    border-radius: ${SIZES.base}px;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
`
export const ViewModal = styled.TouchableOpacity`
    width: 100%;
    padding: ${SIZES.padding}px;
    justify-content: center;
`