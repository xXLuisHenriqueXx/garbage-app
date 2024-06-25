import React from "react";
import { ButtonContainer } from "./styled";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonMap = () => {
    const theme = useTheme();

    return (
        <ButtonContainer activeOpacity={0.9}>
            <FontAwesome5 name="map-marker-alt" size={RFValue(30)} color={theme.colors.darkGreen} />
        </ButtonContainer>
    );
}