import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const ContainerView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.fadeBgColor};
`;

export const ModalTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: ${RFValue(12)}px;
    border-bottom-width: ${RFValue(1)}px;
    border-bottom-color: ${({ theme }) => theme.colors.bdColor};
`;

export const ModalTitleDestaque = styled.Text`
    color: ${({ theme }) => theme.colors.highlightColor};
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
    border-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.highlightColor};
    border-radius: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
`;

export const TypeButtonText = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;