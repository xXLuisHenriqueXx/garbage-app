import React from 'react'
import { Container, IconContainer, ImagePlaceholder, NormalText, NormalTextHighlight, PicContiner, TextContainer, Title } from './styled'
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';

const GarbageAll = ({ title, address }) => {
  return (
    <Container activeOpacity={0.9}>
      <PicContiner>
        <ImagePlaceholder>
        </ImagePlaceholder>
      </PicContiner>
      <TextContainer>
        <Title>{title}</Title>
      </TextContainer>
      <IconContainer>
        <AntDesign name="right" size={RFValue(30)} color="white" />        
      </IconContainer>
    </Container>
  )
}

export default GarbageAll