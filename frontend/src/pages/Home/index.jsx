import React, { useState } from "react";
import { Container, GarbageList, NormalTextHighlight, Title, NormalText, DropdownTypeContainer, DropdownText } from "./styled";
import { useTheme } from "styled-components";
import { Entypo } from "@expo/vector-icons";
import Navbar from "../../components/Navbar";
import GarbageItem from "../../components/GarbageItem";
import { RFValue } from "react-native-responsive-fontsize";
import ModalSelect from "../../components/ModalSelect";

const garbageDataRecente = [
    {
        "_id": 1,
        "title": "Anexo A CT - UFSM",
        "hour": "10:30",
        "date": "09/10/2021"
    },
    {
        "_id": 2,
        "title": "Anexo B CT - UFSM",
        "hour": "11:00",
        "date": "10/10/2021"
    },
    {
        "_id": 3,
        "title": "Anexo C CT - UFSM",
        "hour": "12:00",
        "date": "11/10/2021"
    },
    {
        "_id": 4,
        "title": "Anexo D CT - UFSM",
        "hour": "13:00",
        "date": "12/10/2021"
    },
    {
        "_id": 5,
        "title": "Anexo E CT - UFSM",
        "hour": "14:00",
        "date": "13/10/2021"
    },
    {
        "_id": 6,
        "title": "Anexo F CT - UFSM",
        "hour": "15:00",
        "date": "14/10/2021"
    },
    {
        "_id": 7,
        "title": "Anexo G CT - UFSM",
        "hour": "16:00",
        "date": "15/10/2021"
    },
]

const garbageDataDisponivel = [
    {
        "_id": 1,
        "title": "Anexo A CT - UFSM",
        "hour": "10:30",
        "date": "09/10/2021"
    },
    {
        "_id": 2,
        "title": "Anexo B CT - UFSM",
        "hour": "11:00",
        "date": "10/10/2021"
    },
    {
        "_id": 3,
        "title": "Anexo C CT - UFSM",
        "hour": "12:00",
        "date": "11/10/2021"
    },
    {
        "_id": 4,
        "title": "Anexo D CT - UFSM",
        "hour": "13:00",
        "date": "12/10/2021"
    },
    {
        "_id": 5,
        "title": "Anexo E CT - UFSM",
        "hour": "14:00",
        "date": "13/10/2021"
    },
]

export default function Home() {
    const theme = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [screenType, setScreenType] = useState('recente');

    return (
        <Container
            source={theme.images.bgMain}
        >
            {screenType === 'recente' ? (
                <GarbageList
                    data={garbageDataRecente}
                    keyExtractor={item => item._id}
                    ListHeaderComponent={
                        <>
                            <Title>Descartes recentes</Title>
                            <NormalText>
                                Último descarte realizado em <NormalTextHighlight>XX/XX/XX</NormalTextHighlight>!
                            </NormalText>
                            <DropdownTypeContainer onPress={() => setShowModal(true)} activeOPcaity={0.9}>
                                <Entypo name="chevron-down" size={RFValue(24)} color={theme.colors.primaryGreen} />
                                <DropdownText>Selecione o tipo</DropdownText>
                            </DropdownTypeContainer>
                        </>
                    }
                    renderItem={({ item }) => (
                        <GarbageItem
                            type={"recente"}
                            adress={item.adress}
                            title={item.title}
                            hour={item.hour}
                            date={item.date}
                        />
                    )}
                />
            ) : (
                <GarbageList
                    data={garbageDataDisponivel}
                    keyExtractor={item => item._id}
                    ListHeaderComponent={
                        <>
                            <Title>Locais de descarte</Title>
                            <NormalText>
                                Locais de descarte próximos a você!
                            </NormalText>
                            <DropdownTypeContainer onPress={() => setShowModal(true)} activeOPcaity={0.9}>
                                <Entypo name="chevron-down" size={RFValue(24)} color={theme.colors.primaryGreen} />
                                <DropdownText>Selecione o tipo</DropdownText>
                            </DropdownTypeContainer>
                        </>
                    }
                    renderItem={({ item }) => (
                        <GarbageItem
                            type={"disponivel"}
                            adress={item.adress}
                            title={item.title}
                            hour={item.hour}
                            date={item.date}
                        />
                    )}
                />
            )}
            <ModalSelect showModal={showModal} setShowModal={setShowModal} setScreenType={setScreenType} />
            <Navbar screen={'home'} />
        </Container>
    );
}