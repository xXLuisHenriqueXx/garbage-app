import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';


export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <StatusBar style="auto" />
                <Routes />
            </ThemeProvider>
        </NavigationContainer>
    );
}