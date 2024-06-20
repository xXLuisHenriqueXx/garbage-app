import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const ContainerView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.fadeModalBg};
`;

export const Container = styled.View`
    width: 90%;
    height: ${RFValue(200)}px;
    background-color: ${({ theme }) => theme.colors.modalBg};
    align-items: center;
    padding: ${RFValue(15)}px;
    border-radius: ${RFValue(10)}px;
    border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.glowGreen};
`;

export const ModalTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryGreen};
    padding-bottom: ${RFValue(12)}px;
`;

export const ModalText = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin: ${RFValue(5)}px 0;
`;