import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    left: 52%;
    bottom: ${RFValue(35)}px;
    width: ${RFValue(70)}px;
    height: ${RFValue(70)}px;
    border-radius: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.white};
    justify-content: center;
    align-items: center;
`;