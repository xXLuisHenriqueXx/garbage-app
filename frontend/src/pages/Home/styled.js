import styled from 'styled-components'
import Constants from 'expo-constants'
import { RFValue } from 'react-native-responsive-fontsize';

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ImageBackground`
    flex: 1;
    background-size: cover;
`;

export const GarbageList = styled.FlatList`
    margin: 0 ${RFValue(15)}px;
    margin-bottom: ${RFValue(100)}px;
`;

export const Title = styled.Text`
    margin-top: ${statusBarHeight + RFValue(40)}px;
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: center;
`;

export const NormalText = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-bottom: ${RFValue(30)}px;
`;

export const NormalTextHighlight = styled(NormalText)`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryGreen};
`;