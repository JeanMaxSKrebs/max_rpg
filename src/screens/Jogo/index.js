import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

const MaxAttempts = 5;

const Jogo = ({ route }) => {

    

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>RPG MAX</Text>

            <Button title="Enviar"/>
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
