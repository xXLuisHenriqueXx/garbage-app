import React from 'react'
import { Container, IconContainer, ImagePlaceholder, NormalText, NormalTextHighlight, PicContiner, TextContainer, Title } from './styled'
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';

const GarbageItem = ({ title }) => {
  return (
    <Container activeOpacity={0.9}>
      <PicContiner>
        <ImagePlaceholder>
        </ImagePlaceholder>
      </PicContiner>
      <TextContainer>
        <Title>{title}</Title>
        <NormalText>Horário: <NormalTextHighlight>17:45</NormalTextHighlight></NormalText>
        <NormalText>Data: <NormalTextHighlight>02/07/2024</NormalTextHighlight></NormalText>
      </TextContainer>
      <IconContainer>
        <AntDesign name="right" size={RFValue(30)} color="white" />        
      </IconContainer>
    </Container>
  )
}

export default GarbageItem