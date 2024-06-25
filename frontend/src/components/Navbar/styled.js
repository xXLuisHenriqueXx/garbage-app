import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${RFValue(80)}px;
    padding: 0 ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.darkestGreen};
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    border-top-right-radius: ${RFValue(25)}px;
    border-top-left-radius: ${RFValue(25)}px;
`;

export const IconButton = styled.TouchableOpacity`
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(50)}px;
`;

export const IconButtonHighlight = styled(IconButton)`
    background-color: ${({ theme }) => theme.colors.white};
`;