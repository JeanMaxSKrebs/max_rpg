import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../assets/colors';
import LogoutButton from '../components/LogoutButton';
import MeuButton from '../components/MeuButton';
import { CommonActions } from '@react-navigation/native';
import { Image } from './Preload/styles';


const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      // headerLeft: false,
      headerTitleAlign: 'center',
      title: 'BEM VINDO', // deixei a name pq senao muda o nome da tab
      headerStyle: { backgroundColor: COLORS.primaryDark },
      headerTintColor: { color: COLORS.black },
      headerRight: () => <LogoutButton />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const routeFor = dados => {
    // console.log('a');
    // console.log(dados);
    switch (dados[0]) {
      case 'Jogo':

        navigation.dispatch(
          CommonActions.navigate({
            name: dados[0],
            params: {},
          }),
        );
        break;
      case 'Criar_Personagem':

        navigation.dispatch(
          CommonActions.navigate({
            name: dados[0],
            params: {},
          }),
        );
        break;

      default:
        navigation.dispatch(
          CommonActions.navigate({
            name: 'Manutencao',
            params: { value: dados[0] },
          }),
        );
        break;
    }

  };


  return (
    <View style={styles.container}>
        <Image
          style={styles.imagem}
          source={require('../assets/images/logo.jpg')}
          accessibilityLabel={'logo do app'}
        />
        <MeuButton cor={COLORS.accentSecondary}
          texto={'Jogar'}
          onClick={() => routeFor(['Jogo'])}
          width={'50%'}
        />
        <MeuButton cor={COLORS.accentSecondary}
          texto={'Criar Personagem'}
          onClick={() => routeFor(['Criar_Personagem'])}
          width={'50%'}
          fontSize={20}
        />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primaryDark,
    borderRadius: 15,
    borderWidth: 5,
    padding: 20
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 15
  },
  texto: {
    textAlign: 'center', // Add this line to center align the text
    fontSize: 50,
    color: COLORS.primaryDark,
  },
  logout: {
    backgroundColor: COLORS.red,
  },
});
