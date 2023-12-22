import React from 'react';
import { AuthUserProvider } from '../context/AuthUserProvider';
import { ProfileProvider } from '../context/ProfileProvider';
import { ChatProvider } from '../context/ChatProvider';
import { ApiProvider } from '../context/ApiProvider';

import { PersonagemProvider } from '../context/PersonagemProvider';

import { ThemeProvider } from "styled-components";

import Navigator from './Navigator';
import { COLORS } from "../assets/colors";
import theme from './styles/index';

import { useColorScheme } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
import themes from "./styles/";


export default function Providers() {
  // dark, light, null, undefined
  const deviceTheme = useColorScheme();
  // console.log('deviceTheme');
  // console.log(deviceTheme);

  // console.log(themes);
  //define o tema, o segundo parametro é o padrão
  const theme = themes[deviceTheme] || theme.dark;
  // console.log(theme);
  return (
    <AuthUserProvider>
      <ApiProvider>
        <ProfileProvider>
          <PersonagemProvider>
            <ChatProvider>
              <ThemeProvider theme={theme}>
                <Navigator />
              </ThemeProvider>
            </ChatProvider>
          </PersonagemProvider>
        </ProfileProvider>
      </ApiProvider>
    </AuthUserProvider>
  );
}
