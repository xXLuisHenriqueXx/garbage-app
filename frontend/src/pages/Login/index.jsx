import React from "react";
import { Container, MainContainer, Logo, InputContainer, Input, ButtonLoginText, ButtonLogin, ButtonRegister, ButtonTextRegister, ForgotText, InputTitle, ScrollContainer } from "./styled";
import { useTheme } from "styled-components";
import { Entypo, Feather } from '@expo/vector-icons';
import LogoImg from "../../assets/Logo.png"
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleNavigateToRegister = () => {
        navigation.navigate("Register");
    }

    const handleLogin = () => {
        navigation.navigate("Home");
    }


    return (
        <MainContainer
            source={theme.images.bgRegister}
        >
            <ScrollContainer>
                <Container>
                    <Logo source={LogoImg} />

                    <InputContainer>
                        <InputTitle>Email</InputTitle>
                        <Entypo name="mail" size={RFValue(25)} color={theme.colors.primaryGreen} />
                        <Input
                            placeholder="Digite seu email..."
                            placeholderTextColor={theme.colors.whiteInactive}
                        />
                    </InputContainer>

                    <InputContainer>
                        <InputTitle>Senha</InputTitle>
                        <Entypo name="lock" size={RFValue(25)} color={theme.colors.primaryGreen} />
                        <Input
                            placeholder="Digite sua senha..."
                            placeholderTextColor={theme.colors.whiteInactive}
                            secureTextEntry
                        />
                    </InputContainer>

                    <ButtonLogin activeOpacity={0.9} onPress={handleLogin} >
                        <ButtonLoginText>Acessar</ButtonLoginText>
                        <Feather name="arrow-right-circle" size={RFValue(30)} color={theme.colors.darkGreen} style={{ position: "absolute", right: RFValue(20) }} />
                    </ButtonLogin>

                    <ForgotText>Esqueci minha senha</ForgotText>

                    <ButtonRegister activeOpacity={0.9} onPress={handleNavigateToRegister}>
                        <ButtonTextRegister>Cadastrar</ButtonTextRegister>
                        <Feather name="arrow-right-circle" size={RFValue(30)} color={theme.colors.white} style={{ position: "absolute", right: RFValue(20) }} />
                    </ButtonRegister>
                </Container>
            </ScrollContainer>
        </MainContainer>
    )
}