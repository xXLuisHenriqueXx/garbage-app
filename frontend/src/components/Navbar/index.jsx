import React from 'react';
import { Container, IconButton, IconButtonHighlight } from './styled';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { ButtonMap } from './ButtonMap';

const Navbar = ({ screen }) => {
  const theme = useTheme();

  const navigation = useNavigation();

  const handleNavigateUser = () => {
    navigation.navigate('User');
  }

  const handleNavigateHome = () => {
    navigation.navigate('Home');
  }

  return (
    <Container>
      {screen === 'home' ? (
        <>
          <IconButtonHighlight activeOpacity={0.9}>
            <FontAwesome5 name="home" size={30} color={theme.colors.darkGreen} />
          </IconButtonHighlight>
          <IconButton onPress={handleNavigateUser} activeOpacity={0.9}>
            <FontAwesome5 name="user-alt" size={25} color={theme.colors.white} />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton onPress={handleNavigateHome} activeOpacity={0.9}>
            <FontAwesome5 name="home" size={30} color={theme.colors.white} />
          </IconButton>
          <IconButtonHighlight activeOpacity={0.9}>
            <FontAwesome5 name="user-alt" size={25} color={theme.colors.darkGreen} />
          </IconButtonHighlight>
        </>
      )
      }
      <ButtonMap />
    </Container >
  )
}

export default Navbar