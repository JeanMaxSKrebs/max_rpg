import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../assets/colors';
import LogoutButton from '../components/LogoutButton';
import MeuButton from '../components/MeuButton';
import { CommonActions } from '@react-navigation/native';


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
            params: { },
          }),
        );
        break;
        case 'EscolhaPalavra':

        navigation.dispatch(
          CommonActions.navigate({
            name: dados[0],
            params: { },
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
      <Text style={styles.texto}>TERMAX</Text>
      <MeuButton cor={COLORS.accentSecondary} style={styles.button}
        texto={'JOGAR'}
        onClick={() => routeFor(['Jogo'])}
      />
      <MeuButton cor={COLORS.accentSecondary} style={styles.button}
        texto={'ESCOLHER PALAVRA'}
        onClick={() => routeFor(['EscolhaPalavra'])}
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
  texto: {
    textAlign: 'center', // Add this line to center align the text
    fontSize: 50,
    color: COLORS.primaryDark,
  },
  logout: {
    backgroundColor: COLORS.red,
  },
});
