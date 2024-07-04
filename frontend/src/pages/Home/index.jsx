import React, { useState, useEffect } from "react";
import { Container, GarbageList, NormalTextHighlight, Title, NormalText, DropdownTypeContainer, DropdownText } from "./styled";
import { useTheme } from "styled-components";
import { Entypo } from "@expo/vector-icons";
import Navbar from "../../components/Navbar";
import GarbageItem from "../../components/GarbageItem";
import { RFValue } from "react-native-responsive-fontsize";
import ModalSelect from "../../components/ModalSelect";
import axios from "axios";
import GarbageAll from "../../components/GarbageAll";
import { Linking, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native"; // Certifique-se de importar useRoute

export default function Home() {
    const theme = useTheme();
    const route = useRoute();
    const { userData } = route.params; // Recebendo os dados do usuário passados na navegação
    const [showModal, setShowModal] = useState(false);
    const [screenType, setScreenType] = useState('Recentes');
    const [availableGarbageData, setAvailableGarbageData] = useState([]);
    const [recentTransactions, setRecentTransactions] = useState(userData.transactionHistory || []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://192.168.5.166:3000/adresses");
                const addresses = response.data.addresses.map((address, index) => ({
                    _id: index + 1,
                    title: address.addressString,
                    hour: "",
                    date: "",
                    adress: address.addressLink
                }));

                setAvailableGarbageData(addresses);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    // Função para encontrar a última data de descarte
    const getLastDischargeDate = () => {
        if (recentTransactions.length === 0) return null;

        // Ordenar as transações por data e pegar a mais recente
        const sortedTransactions = [...recentTransactions].sort((a, b) => new Date(b.date) - new Date(a.date));
        return sortedTransactions[0].date;
    };

    const lastDischargeDate = getLastDischargeDate();

    const handleLinkPress = (url) => {
        Linking.openURL(url).catch(err => console.error("Erro ao abrir URL:", err));
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <Container source={theme.images.bgMain}>
                {screenType === 'Recentes' ? (
                    <GarbageList
                        data={recentTransactions} // Usar os dados de transações recentes do usuário
                        keyExtractor={item => item.date + item.adress}
                        ListHeaderComponent={
                            <>
                                <Title>Descartes recentes</Title>
                                <NormalText>
                                    Último descarte realizado em <NormalTextHighlight>{lastDischargeDate || 'N/A'}</NormalTextHighlight>!
                                </NormalText>
                                <DropdownTypeContainer onPress={() => setShowModal(true)} activeOpacity={0.9}>
                                    <Entypo name="chevron-down" size={RFValue(24)} color={theme.colors.primaryGreen} />
                                    <DropdownText>Selecione o tipo: <NormalTextHighlight>{screenType}</NormalTextHighlight></DropdownText>
                                </DropdownTypeContainer>
                            </>
                        }
                        renderItem={({ item }) => (
                            <GarbageItem
                                title={item.adress}
                                date={item.date}
                                value={item.value}
                                quantity={item.quantity}
                            />
                        )}
                    />
                ) : (
                    <GarbageList
                        data={availableGarbageData} // Usar os dados disponíveis da API
                        keyExtractor={item => item._id.toString()}
                        ListHeaderComponent={
                            <>
                                <Title>Locais de descarte</Title>
                                <NormalText>
                                    Locais de descarte próximos a você!
                                </NormalText>
                                <DropdownTypeContainer onPress={() => setShowModal(true)} activeOpacity={0.9}>
                                    <Entypo name="chevron-down" size={RFValue(24)} color={theme.colors.primaryGreen} />
                                    <DropdownText>Selecione o tipo: <NormalTextHighlight>{screenType}</NormalTextHighlight></DropdownText>
                                </DropdownTypeContainer>
                            </>
                        }
                        renderItem={({ item }) => (
                            <GarbageAll
                                adress={item.adress}
                                title={item.title}
                                onPress={() => handleLinkPress(item.adress)}
                            />
                        )}
                    />
                )}
                <ModalSelect showModal={showModal} setShowModal={setShowModal} setScreenType={setScreenType} />
                <Navbar screen={'home'} />
            </Container>
        </ScrollView>
    );
}
