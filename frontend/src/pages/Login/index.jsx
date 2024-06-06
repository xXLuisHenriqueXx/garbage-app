import React from "react";
import { Container, MainContainer, Logo, InputContainer, Input, ButtonLoginText, ButtonLogin } from "./styled";
import { useTheme } from "styled-components";
import { Entypo } from '@expo/vector-icons';
import LogoImg from "../../assets/Logo.png"
import { RFValue } from "react-native-responsive-fontsize";

export default function Login() {
    const theme = useTheme();

    return (
            <MainContainer
                source={theme.images.bgRegister}
            >
                <Container>
                    <Logo source={LogoImg} />

                    <InputContainer>
                        <Entypo name="mail" size={RFValue(25)} color={theme.colors.primaryGreen} />
                        <Input
                            placeholder="Digite seu email..."
                            placeholderTextColor={theme.colors.whiteInactive}
                        />
                    </InputContainer>

                    <InputContainer>
                        <Entypo name="lock" size={RFValue(25)} color={theme.colors.primaryGreen} />
                        <Input
                            placeholder="Digite sua senha..."
                            placeholderTextColor={theme.colors.whiteInactive}
                        />
                    </InputContainer>

                    <ButtonLogin>
                        <ButtonLoginText>Acessar</ButtonLoginText>
                    </ButtonLogin>
                </Container>
            </MainContainer>
    )
}