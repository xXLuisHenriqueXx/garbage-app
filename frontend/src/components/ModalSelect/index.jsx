import { Modal } from 'react-native';
import { Container, ContainerButtons, ContainerView, ModalTitle } from './styled';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { TypeButton } from './styled';
import { TypeButtonText } from './styled';

export default function ModalSelect({ showModal, setShowModal, setScreenType }) {
    const theme = useTheme();
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal);
            }}
        >
            <ContainerView>
                <Container>
                    <ModalTitle>
                        Qual tipo de descarte deseja visualizar?
                    </ModalTitle>
                    <ContainerButtons>
                        <TypeButton
                            onPress={() => {
                                setShowModal(!showModal);
                                setScreenType("Recentes");
                            }}
                        >
                            <TypeButtonText>Recentes</TypeButtonText>
                        </TypeButton>
                        <TypeButton
                            onPress={() => {
                                setShowModal(!showModal);
                                setScreenType("Disponiveis");
                            }}
                        >
                            <TypeButtonText>Disponíveis</TypeButtonText>
                        </TypeButton>
                    </ContainerButtons>
                </Container>
            </ContainerView>
        </Modal >
    );
}