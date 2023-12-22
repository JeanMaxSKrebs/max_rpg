import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import MeuButton from '../../components/MeuButton';
import { COLORS } from '../../assets/colors';
import { ToastAndroid } from 'react-native';
import { PersonagemContext } from '../../context/PersonagemProvider'; // Certifique-se de ajustar o caminho do import conforme necessário
import { CommonActions } from '@react-navigation/native';


const Criar_Personagem = ({navigation}) => {
  const { salvarPersonagem } = useContext(PersonagemContext);

  const [nome, setNome] = useState('');
  const [pontosDisponiveis, setPontosDisponiveis] = useState(15);
  const [classe, setClasse] = useState('');
  const [forca, setForca] = useState(0);
  const [destreza, setDestreza] = useState(0);
  const [constituicao, setConstituicao] = useState(0);
  const [inteligencia, setInteligencia] = useState(0);
  const [velocidade, setVelocidade] = useState(0);
  const [resistenciaFisica, setResistenciaFisica] = useState(0);
  const [resistenciaMagica, setResistenciaMagica] = useState(0);

  const atributosIniciais = {
    forca: 0,
    destreza: 0,
    inteligencia: 0,
    velocidade: 0,
    resistenciaFisica: 0,
    resistenciaMagica: 0,
  };
  const atributosImutaveis = {
    sorte: 5,

  }

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const criarPersonagem = () => {
    if (pontosDisponiveis === 0) {

      const novoPersonagem = {
        nome,
        atributos,
      };
      if (salvarPersonagem(novoPersonagem)) {
        console.log('Personagem criado com atributos:', novoPersonagem);
        navigation.dispatch(
          CommonActions.navigate({
            name: 'Jogo',
            params: {},
          }),
        );
      }
    } else {
      showToast('Utilize todos os pontos disponíveis antes de criar o personagem.');
    }
  };

  const [atributos, setAtributos] = useState(atributosIniciais);

  const renderizarSliders = () => {
    return Object.keys(atributos).map((atributo) => (
      <View key={atributo} style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>
          {atributo.charAt(0).toUpperCase() + atributo.slice(1)}: {atributos[atributo]}
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="-" onPress={() => decrementarAtributo(atributo)} />
          <View style={styles.barraContainer}>
            {[...Array(atributos[atributo])].map((_, index) => (
              <View key={index} style={styles.marcador} />
            ))}
          </View>
          <Button title="+" onPress={() => incrementarAtributo(atributo)} />

        </View>
      </View>
    ));
  };

  const incrementarAtributo = (atributo) => {
    if (atributos[atributo] < 15 && pontosDisponiveis > 0) {
      setAtributos({ ...atributos, [atributo]: atributos[atributo] + 1 });
      setPontosDisponiveis((prevPontos) => prevPontos - 1);
    } else {
      showToast('Não pode mais incrementar esse Atributo');
    }
  };

  const decrementarAtributo = (atributo) => {
    if (atributos[atributo] > 0) {
      setAtributos({ ...atributos, [atributo]: atributos[atributo] - 1 });
      setPontosDisponiveis((prevPontos) => prevPontos + 1);
    } else {
      showToast('Não pode mais decrementar esse Atributo');
    }
  };

  const resetarAtributos = () => {
    setAtributos({
      forca: 0,
      destreza: 0,
      inteligencia: 0,
      velocidade: 0,
      resistenciaFisica: 0,
      resistenciaMagica: 0,
    });
    setPontosDisponiveis(15)
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Nome do Personagem:</Text>

          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <View style={styles.content}>

          <View style={styles.row}>

            <Text style={styles.label}>Pontos Disponíveis: {pontosDisponiveis}</Text>
            <MeuButton fontSize={20} width={'30%'} texto="Resetar"
              onClick={resetarAtributos} />
          </View>


          {renderizarSliders()}

        </View>
        <View>
          <MeuButton alignSelf={'center'} width={'50%'} texto="Confirmar"
            onClick={criarPersonagem} />
        </View>
      </ScrollView>

    </View>
  );
};

export default Criar_Personagem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  content: {
    borderColor: COLORS.primary,
    borderRadius: 15,
    borderWidth: 5,
    padding: 15,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: COLORS.primaryDark,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
    color: 'black',
  },

  sliderContainer: {
    marginBottom: 16,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.primary,
  },
  slider: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


  barraContainer: {
    flexDirection: 'row',
  },
  marcador: {
    width: 12,
    height: 15,
    backgroundColor: COLORS.primaryShadow,
    marginHorizontal: 3,
  },
})