import React, { useState, useEffect } from "react";
import { Container, GarbageList, NormalTextHighlight, Title, NormalText, DropdownTypeContainer, DropdownText } from "./styled";
import { useTheme } from "styled-components";
import { Entypo } from "@expo/vector-icons";
import Navbar from "../../components/Navbar";
import GarbageItem from "../../components/GarbageItem";
import { RFValue } from "react-native-responsive-fontsize";
import ModalSelect from "../../components/ModalSelect";
import axios from "axios";
import { getUser } from "../../services/storageUser";

export default function Home({ route }) {
    const theme = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [screenType, setScreenType] = useState('recente');
    const [garbageData, setGarbageData] = useState([]);
    const [garbageUser, setGarbageUser] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://192.168.3.4:3000/adresses");
                const addresses = response.data.addresses.map((address, index) => ({
                    _id: index + 1,
                    title: address.addressString,
                    hour: "", 
                    date: "", 
                    adress: address.addressLink 
                }));
                setGarbageData(addresses);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userString = await getUser('user');
                if (userString) {
                    const user = JSON.parse(userString);
                    
                    setUserInfo(user); // Atualiza o estado com o objeto do usuário
                }
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }      
        };

        fetchUser();    
    }, []);

    setGarbageUser(userInfo.user.adress)

    return (
        <Container source={theme.images.bgMain}>
            {screenType === 'recente' ? (
                <GarbageList
                    data={garbageData}
                    keyExtractor={item => item._id.toString()}
                    ListHeaderComponent={
                        <>
                            <Title>Descartes recentes</Title>
                            <NormalText>
                                Último descarte realizado em <NormalTextHighlight>XX/XX/XX</NormalTextHighlight>!
                            </NormalText>
                            <DropdownTypeContainer onPress={() => setShowModal(true)} activeOpacity={0.9}>
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
                    data={garbageData}
                    keyExtractor={item => item._id.toString()}
                    ListHeaderComponent={
                        <>
                            <Title>Locais de descarte</Title>
                            <NormalText>
                                Locais de descarte próximos a você!
                            </NormalText>
                            <DropdownTypeContainer onPress={() => setShowModal(true)} activeOpacity={0.9}>
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
