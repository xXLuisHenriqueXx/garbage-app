import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${RFValue(100)}px;
    background-color: ${({ theme }) => theme.colors.containerGreen};
    margin: 0 auto;
    margin-top: ${RFValue(15)}px;
    border: 1px solid ${({ theme }) => theme.colors.glowGreen};
    border-radius: ${RFValue(10)}px;
    padding: 0 ${RFValue(15)}px;
`;

export const PicContiner = styled.View`
`;

export const TextContainer = styled.View`
    width: 60%;
    margin: 0 ${RFValue(10)}px;
`;

export const IconContainer = styled.View`
`;

export const ImagePlaceholder = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${RFValue(30)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: ${RFValue(5)}px;
`;

export const NormalText = styled.Text`
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const NormalTextHighlight = styled(NormalText)`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryGreen};
`;