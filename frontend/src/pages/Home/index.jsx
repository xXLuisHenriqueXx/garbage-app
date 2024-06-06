import React from "react";
import { Container, GarbageList, NormalTextHighlight, Title, NormalText } from "./styled";
import { useTheme } from "styled-components";
import Navbar from "../../components/Navbar";
import GarbageItem from "../../components/GarbageItem";

const garbageData = [
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

export default function Home() {
    const theme = useTheme();

    return (
        <Container
            source={theme.images.bgMain}
        >
            <GarbageList
                data={garbageData}
                keyExtractor={item => item._id}
                ListHeaderComponent={
                    <>
                        <Title>Descartes recentes</Title>
                        <NormalText>
                            Último descarte realizado em <NormalTextHighlight>XX/XX/XX</NormalTextHighlight>
                        </NormalText>
                    </>
                }
                renderItem={({ item }) => (
                    <GarbageItem
                        title={item.title}
                        hour={item.hour}
                        date={item.date}
                    />
                )}
            />
            <Navbar screen={'home'} />
        </Container>
    );
}