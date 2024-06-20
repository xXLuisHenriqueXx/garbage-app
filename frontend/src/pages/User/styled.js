import styled from 'styled-components'
import Constants from 'expo-constants'
import { RFValue } from 'react-native-responsive-fontsize';

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ImageBackground`
    flex: 1;
    background-size: cover;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(20)}px;
    margin-top: ${statusBarHeight}px;
`;

export const ButtonHeaderContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(25)}px;
    justify-content: center;
    align-items: center;
`;

export const TitleHeader = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: semibold;
`;

export const ContainerSigned = styled.ScrollView`
    flex: 1;
    background-size: cover;
    background-color: transparent;
    margin-bottom: ${RFValue(80)}px;
`;

export const UserContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const UserImage = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.white};
    border-radius: ${RFValue(90)}px;
`;

export const UserName = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-weight: bold;
`;

export const SubTitleUser = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const HighlightSubText = styled(SubTitleUser)`
    color: ${({ theme }) => theme.colors.primaryGreen};
`;


export const InfoTextUser = styled.Text`
    margin: ${RFValue(15)}px 0;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

export const HighlightInfoText = styled(SubTitleUser)`
    color: ${({ theme }) => theme.colors.primaryGreen};
`;

export const PlansContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`;

export const InfoPlanContainer = styled.View`
    width: 46%;
    height: ${RFValue(320)}px;
    background-color: ${({ theme }) => theme.colors.containerGreen};
    border: 1px solid ${({ theme }) => theme.colors.glowGreen};
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(12)}px;
    align-items: center;
`;

export const PlanTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-weight: bold;
    text-decoration: underline;
`;

export const ContainerPlanText = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const ContainerSingleText = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PlanText = styled.Text`
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.white};
    margin: ${RFValue(15)}px 0;
    padding-left: ${RFValue(2)}px;
`;