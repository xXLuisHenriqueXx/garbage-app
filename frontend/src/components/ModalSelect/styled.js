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

export const ContainerButtons = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const TypeButton = styled.TouchableOpacity`
    width: 80%;
    height: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.containerGreen};
    border-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.primaryGreen};
    border-radius: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
`;

export const TypeButtonText = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
`;