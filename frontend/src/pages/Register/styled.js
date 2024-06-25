import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const MainContainer = styled.ImageBackground`
    flex: 1;
`

export const ScrollContainer = styled.ScrollView`
    background-size: contain;
    background-color: transparent;
    margin-bottom: ${RFValue(20)}px;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    padding-top: ${RFValue(statusBarHeight)}px;
    margin: 0 ${RFValue(15)}px;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: ${RFValue(80)}px;
    margin: ${RFValue(-70)}px 0;
`;

export const InputContainer = styled.View`
    width: 100%;
    height: ${RFValue(40)}px;
    margin: 0 auto;
    margin-bottom: ${RFValue(30)}px;
    border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.glowGreen};
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

export const InputTitle = styled.Text`
    position: absolute;
    top: ${RFValue(-16)}px;
    left: ${RFValue(5)}px;
    font-size: ${RFValue(12)}px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryGreen};
`;

export const ButtonRegister = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(60)}px;
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    border-radius: ${RFValue(5)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonRegisterText = styled.Text`
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.darkGreen};
    font-weight: 900;
    text-transform: uppercase;
`;

export const ForgotText = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.white};
    margin-top: ${RFValue(15)}px;
    margin-bottom: ${RFValue(30)}px;
`;