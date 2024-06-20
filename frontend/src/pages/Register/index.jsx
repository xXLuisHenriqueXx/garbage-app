import React from "react";
import { Container, MainContainer, ScrollContainer, Logo, InputContainer, Input, ButtonRegisterText, ButtonRegister, ForgotText, InputTitle } from "./styled";
import { useTheme } from "styled-components";
import { Entypo, Feather } from '@expo/vector-icons';
import LogoImg from "../../assets/Logo.png"
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export default function Register() {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleNavigateToLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <MainContainer
            source={theme.images.bgRegister}
        >
            <ScrollContainer>
                <Container>
                    <Logo source={LogoImg} />

                    <InputContainer>
                        <InputTitle>Usuário</InputTitle>
                        <Entypo name="user" size={RFValue(25)} color={theme.colors.primaryGreen} />
                        <Input
                            placeholder="Digite seu email..."
                            placeholderTextColor={theme.colors.whiteInactive}
                        />
                    </InputContainer>

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

                    <InputContainer>
                        <InputTitle>Confirme sua senha</InputTitle>
                        <Entypo name="lock" size={RFValue(25)} color={theme.colors.primaryGreen} />
                        <Input
                            placeholder="Digite sua senha novamente..."
                            placeholderTextColor={theme.colors.whiteInactive}
                            secureTextEntry
                        />
                    </InputContainer>

                    <ButtonRegister activeOpacity={0.9} onPress={
                        () => {
                            Alert.alert("Cadastro", "Registro realizado com sucesso!!");
                            handleNavigateToLogin();
                        }
                    }>
                        <ButtonRegisterText>Cadastrar</ButtonRegisterText>
                        <Feather name="arrow-right-circle" size={RFValue(30)} color={theme.colors.darkGreen} style={{ position: "absolute", right: RFValue(20) }} />
                    </ButtonRegister>

                    <ForgotText onPress={handleNavigateToLogin}>Já possuo cadastro</ForgotText>
                </Container>
            </ScrollContainer>
        </MainContainer>
    )
}