import { Modal } from 'react-native';
import { ContainerView, ModalTitle, Container, ModalText } from './styled';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export default function ModalSelect({ showModal, setShowModal }) {
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
                    <Feather name="x" size={24} color={theme.colors.primaryGreen} style={{ position: "absolute", right: RFValue(15), top: RFValue(15) }} onPress={() => setShowModal(!showModal)} />
                    <ModalTitle>
                        Quem é Garbage Enterprise?
                    </ModalTitle>
                    <ModalText>
                        Somos uma empresa que atua no ramo de coleta de lixo eletrônico, com o objetivo de reciclar e reutilizar os materiais coletados.
                    </ModalText>
                    <ModalText>
                        Estamos presentes no mercado desde 2010 e já coletamos mais de 1 tonelada de lixo eletrônico.
                    </ModalText>
                    <ModalText>
                        Nossa missão é contribuir para um mundo mais sustentável e consciente.
                    </ModalText>
                </Container>
            </ContainerView>
        </Modal >
    );
}