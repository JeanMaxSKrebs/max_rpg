import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

const MaxAttempts = 5;

const Jogo = ({ route }) => {
    const [guess, setGuess] = useState('');
    const [attemptsLeft, setAttemptsLeft] = useState(MaxAttempts);
    const [gameResult, setGameResult] = useState('');

    const palavras = [
        "reaja", "metas", "borra", "falha", "capar", "saiba", "feliz", "seios", "cubos", "cisco", "pesos", "reais", "rasos"
    ];

    // const [SecretWord, setSecretWord] = useState(
    //     route.params
    //         ? route.params.palavraSelecionada
    //         : palavras[Math.floor(Math.random() * palavras.length)]
    // );
    const [SecretWord, setSecretWord] = useState(
        route.params?.palavraSelecionada || palavras[Math.floor(Math.random() * palavras.length)]
    );



    console.log('SecretWord');
    console.log(SecretWord);

    const [correctGuesses, setCorrectGuesses] = useState(new Array(SecretWord.length).fill('_'));
    useEffect(() => {
        if (attemptsLeft === 0) {
            setGameResult(`Você perdeu! A palavra era "${SecretWord}".`);
        }
    }, [attemptsLeft]);

    const checkGuess = () => {
        const normalizedGuess = guess.toLowerCase();

        if (normalizedGuess.length === SecretWord.length && /^[a-z]+$/.test(normalizedGuess)) {
            let correct = false;
            const newCorrectGuesses = [...correctGuesses];

            for (let i = 0; i < SecretWord.length; i++) {
                if (SecretWord[i] === normalizedGuess[i]) {
                    newCorrectGuesses[i] = normalizedGuess[i];
                    correct = true;
                }
            }

            setCorrectGuesses(newCorrectGuesses);
            setGuess('');

            if (newCorrectGuesses.join('') === SecretWord) {
                setGameResult('Parabéns! Você adivinhou a palavra!');
            } else if (correct) {
                setGameResult('Letra correta! Continue tentando.');
            } else {
                setAttemptsLeft(attemptsLeft - 1);
                setGameResult(`Tentativa incorreta! Tente novamente. Tentativas restantes: ${attemptsLeft - 1}`);
            }
        } else {
            setGameResult('Por favor, insira uma palavra válida com 5 letras.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Jogo do Termo</Text>
            <Text style={styles.wordDisplay}>{correctGuesses.join(' ')}</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setGuess(text)}
                value={guess}
                maxLength={SecretWord.length}
            />
            <Button title="Enviar" onPress={checkGuess} />
            <Text style={styles.result}>{gameResult}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },
    texto: {
        fontSize: 24,
        color: COLORS.primary,
    },
    wordDisplay: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    input: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 10,
    },
    result: {
        marginTop: 20,
        fontWeight: 'bold',
    },
});

export default Jogo;
