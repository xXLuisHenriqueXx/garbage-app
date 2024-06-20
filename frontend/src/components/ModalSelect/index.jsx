import { Modal } from 'react-native';
import { ContainerButtons, ContainerView, ModalTitle } from './styled';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { TypeButton } from './styled';
import { TypeButtonText } from './styled';

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
                <LinearGradient
                    colors={theme.colors.bgColor}
                    style={
                        {
                            width: "90%",
                            height: RFValue(180),
                            alignItems: "center",
                            paddingTop: RFValue(20),
                            borderRadius: RFValue(10),
                            borderWidth: RFValue(1),
                            borderColor: theme.colors.bdColor
                        }
                    }
                >
                    <ModalTitle>
                        Qual tipo de nota deseja utilizar?
                    </ModalTitle>
                    <ContainerButtons>
                        <TypeButton
                            onPress={() => {
                                setShowModal(!showModal);
                            }}
                        >
                            <TypeButtonText>Textual</TypeButtonText>
                        </TypeButton>
                        <TypeButton
                            onPress={() => {
                                setShowModal(!showModal);
                            }}
                        >
                            <TypeButtonText>Tarefa</TypeButtonText>
                        </TypeButton>
                    </ContainerButtons>
                </LinearGradient>
            </ContainerView>
        </Modal >
    );
}