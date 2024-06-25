import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { ButtonHeaderContainer, Container, ContainerPlanText, ContainerSigned, ContainerSingleText, Header, HighlightInfoText, HighlightSubText, InfoPlanContainer, InfoTextUser, PlanText, PlanTitle, PlansContainer, SubTitleUser, TitleHeader, UserContainer, UserImage, UserName } from "./styled";
import { FontAwesome6, Entypo } from '@expo/vector-icons';
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import ModalInfo from "../../components/ModalInfo";

const dataIndividual = [
    {
        id: 1,
        text: "Ao receber o dejeto, a empresa de coleta estima o valor e quantifica o lixo recebido."
    },
    {
        id: 2,
        text: "Remuneração em uma parcela do lucro que seria gerado com aqueles dejetos."
    },
    {
        id: 3,
        text: "O valor é depositado diretamente na conta do usuário."
    },
    {
        id: 4,
        text: "Plano gratuito"
    }
];

dataProfissional = [
    {
        id: 1,
        text: "Ao receber o dejeto, a empresa de coleta estima o valor e quantifica o lixo recebido."
    },
    {
        id: 2,
        text: "Possibilidade de desconto em seus impostos baseados na quantidade de lixo descartado."
    },
    {
        id: 3,
        text: "Cada descarte gera uma parcela de pontos que qualificam a empresa."
    },
    {
        id: 4,
        text: "A assinatura será cobrada como maneira de financiar o aplicativo e sua infraestrutura."
    }
]

export default function User() {
    const theme = useTheme();
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);


    return (
        <Container
            source={theme.images.bgMain}
        >
            <Header>
                <ButtonHeaderContainer onPress={() => setShowModal(true)} activeOpacity={0.9}><Entypo name="info" size={RFValue(20)} color={theme.colors.darkGreen} /></ButtonHeaderContainer>
                <TitleHeader>Meu perfil</TitleHeader>
                <ButtonHeaderContainer activeOpacity={0.9}><FontAwesome6 name="gear" size={RFValue(20)} color={theme.colors.darkGreen} /></ButtonHeaderContainer>
            </Header>
            <ContainerSigned>
                <UserContainer>
                    <UserImage />
                    <UserName>Luis Henrique</UserName>
                    <SubTitleUser>Usuário desde: <HighlightSubText>XX/XX/XXXX</HighlightSubText></SubTitleUser>
                </UserContainer>

                <InfoTextUser>Saldo adquirido: <HighlightInfoText>R$ XX,XX | </HighlightInfoText>Peso descartado: <HighlightInfoText>XX,Xkg</HighlightInfoText></InfoTextUser>
            
                <PlansContainer>
                    <InfoPlanContainer>
                        <PlanTitle>INDIVIDUAL</PlanTitle>
                        <ContainerPlanText>
                            {dataIndividual.map((item) => (
                                <ContainerSingleText>
                                    <Entypo name="check" size={RFValue(8)} color={theme.colors.primaryGreen} />
                                    <PlanText>{item.text}</PlanText>
                                </ContainerSingleText>
                            ))}
                        </ContainerPlanText>
                    </InfoPlanContainer>
                    <InfoPlanContainer>
                    <PlanTitle>PROFISSIONAL</PlanTitle>
                        <ContainerPlanText>
                            {dataProfissional.map((item) => (
                                <ContainerSingleText>
                                <Entypo name="check" size={RFValue(8)} color={theme.colors.primaryGreen} />
                                <PlanText>{item.text}</PlanText>
                            </ContainerSingleText>
                            ))}
                        </ContainerPlanText>
                    </InfoPlanContainer>
                </PlansContainer>
            </ContainerSigned>
            <Navbar />

            <ModalInfo showModal={showModal} setShowModal={setShowModal} />
        </Container>
    )
}