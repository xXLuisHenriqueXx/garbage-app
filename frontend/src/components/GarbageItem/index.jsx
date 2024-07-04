import React from 'react';
import { Container, IconContainer, ImagePlaceholder, NormalText, NormalTextHighlight, PicContiner, TextContainer, Title } from './styled';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';

const GarbageItem = ({ title, date, quantity, value }) => {
  return (
    <Container activeOpacity={0.9}>
      <PicContiner>
        <ImagePlaceholder>
        </ImagePlaceholder>
      </PicContiner>
      <TextContainer>
        <Title>{title}</Title>
        <NormalText>Data: <NormalTextHighlight>{date}</NormalTextHighlight></NormalText>
        <NormalText>Peso: <NormalTextHighlight>{quantity}kg</NormalTextHighlight></NormalText>
        <NormalText>Valor: <NormalTextHighlight>R$ {value.toFixed(2)}</NormalTextHighlight></NormalText>
      </TextContainer>
      <IconContainer>
        <AntDesign name="right" size={RFValue(30)} color="white" />        
      </IconContainer>
    </Container>
  );
}

export default GarbageItem;
