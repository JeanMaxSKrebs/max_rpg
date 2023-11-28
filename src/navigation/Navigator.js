import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Chat from '../screens/Chat';
import Chats from '../screens/Chats';
import Preload from '../screens/Preload';
import ForgotPassword from '../screens/ForgotPassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Manutencao from '../screens/Manutencao';

import Menu from '../screens/Menu';
import PerfilUsuario from '../screens/PerfilUsuario';

//jogo
import Jogo from '../screens/Jogo';
import EscolhaPalavra from '../screens/Jogo/escolha';

import { COLORS } from '../assets/colors';
import { StyleSheet, StatusBar } from 'react-native';

import { AuthUserContext } from '../context/AuthUserProvider';
import { Text } from '../screens/PerfilUsuario/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: true,
    }}>
    <Stack.Screen component={Preload} name="Preload" />
    <Stack.Screen component={SignIn} name="SignIn" options={SignInStyle} />
    <Stack.Screen component={SignUp} name="SignUp" options={SignUpStyle} />
    <Stack.Screen
      component={ForgotPassword}
      name="ForgotPassword"
      options={ForgotPasswordStyle}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const { user } = useContext(AuthUserContext)

  useEffect(() => {
    if (user) {
      console.log('email user conectado: ' + user.email)
      console.log(user)
    }
  }, [user]);


  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
      }}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name="home" color={COLORS.primaryDark} />,
        }}
      />
      <Tab.Screen
        component={Menu}
        name="Menu"
        options={{
          tabBarLabel: 'Menu',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name="list" color={COLORS.primaryDark} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => (
  <NavigationContainer>
    <StatusBar backgroundColor={COLORS.primary} />
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={AuthStack} name="AuthStack" />
      <Stack.Screen component={AppStack} name="AppStack" />
      <Stack.Screen component={Manutencao} name="Manutencao" options={{ headerShown: true, }} />
      <Stack.Screen component={Chats} name="Chats" />
      <Stack.Screen component={Chat} name="Chat" />
      <Stack.Screen component={Jogo} name="Jogo" />
      <Stack.Screen component={EscolhaPalavra} name="EscolhaPalavra" />
      <Stack.Screen
        component={PerfilUsuario}
        name="PerfilUsuario"
        options={{
          presentation: 'modal',
        }}
      />
      {/* <Stack.Screen component={Salao} name="Salao" /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;

const SignInStyle = {
  // headerLeft: false,
  headerTitleAlign: 'center',
  title: 'Bem Vindo',
  headerStyle: { backgroundColor: COLORS.primaryShadow },
  headerTitleStyle: { color: COLORS.black },
};
const SignUpStyle = {
  // headerLeft: false,
  headerTitleAlign: 'center',
  title: 'Cadastre-se',
  headerStyle: { backgroundColor: COLORS.secondary },
  headerTitleStyle: { color: COLORS.primaryDark },
  headerTintColor: COLORS.primaryDark,
};
const ForgotPasswordStyle = {
  headerTitleAlign: 'center',
  title: 'Esqueceu a Senha',
  headerStyle: { backgroundColor: COLORS.secundary },
  headerTitleStyle: { color: COLORS.primaryDark },
  headerTintColor: COLORS.primaryDark,
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
