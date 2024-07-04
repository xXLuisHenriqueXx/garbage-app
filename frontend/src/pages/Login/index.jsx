import React, { useState } from "react";
import axios from 'axios';
import { Container, MainContainer, Logo, InputContainer, Input, ButtonLoginText, ButtonLogin, ButtonRegister, ButtonTextRegister, ForgotText, InputTitle, ScrollContainer } from "./styled";
import { useTheme } from "styled-components";
import { Entypo, Feather } from '@expo/vector-icons';
import LogoImg from "../../assets/Logo.png";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { setUser } from "../../services/storageUser";

export default function Login() {
    const theme = useTheme();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //substituir url caso vá usar uma url diferente, por ex, ipv4 da maquina q ta rodando a API
    const url = 'http://192.168.100.94:3000/login';
    const handleNavigateToRegister = () => {
        navigation.navigate("Register");
    }

    const handleLogin = async () => {
        try {
            /* atencao: se for ios, vai dar erro pois ele n sabe o localhost, teria que substituir pela url real pra funcionar
            no caso do teste, foi o http://<meu_ipv4>:3000/login */
            const response = await axios.post(url, { email, password });
            if (response.status === 200) {
                // salver o user no storage
                await setUser('user', JSON.stringify(response.data));
                navigation.navigate("Home");
            } else {
                alert("Email ou senha inválidos.");
            }
        } catch (error) {
            alert("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
            console.error(error);
        }
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
                            value={email}
                            onChangeText={setEmail}
                        />
                    </InputContainer>

                    <InputContainer>
                        <InputTitle>Senha</InputTitle>
                        <Entypo name="lock" size={RFValue(25)} color={theme.colors.primaryGreen} />
                        <Input
                            placeholder="Digite sua senha..."
                            placeholderTextColor={theme.colors.whiteInactive}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
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
