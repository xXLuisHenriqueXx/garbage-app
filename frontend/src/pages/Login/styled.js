import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const MainContainer = styled.ImageBackground`
    flex: 1;
`

export const Container = styled.View`
    padding-top: ${RFValue(statusBarHeight) - RFValue(30)}px;
    margin: 0 ${RFValue(15)}px;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: ${RFValue(100)}px;
    margin-bottom: ${RFValue(-40)}px;
`;

export const InputContainer = styled.View`
    width: 100%;
    height: ${RFValue(40)}px;
    margin: 0 auto;
    margin-bottom: ${RFValue(30)}px;
    border: 1px solid ${({ theme }) => theme.colors.glowGreen};
    border-radius: ${RFValue(5)}px;
    flex-direction: row;
    align-items: center;
    padding-left: ${RFValue(10)}px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: ${RFValue(16)}px;
    padding-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(60)}px;
    background-color: ${({ theme}) => theme.colors. primaryGreen};
    border-radius: ${RFValue(5)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonLoginText = styled.Text`
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.darkGreen};
    font-weight: 900;
    text-transform: uppercase;
`;

