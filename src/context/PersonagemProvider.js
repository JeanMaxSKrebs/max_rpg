import React, { createContext, useContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthUserContext } from '../context/AuthUserProvider'; // Certifique-se de ajustar o caminho do import conforme necessário

export const PersonagemContext = createContext();

export const PersonagemProvider = ({ children }) => {
    const { user } = useContext(AuthUserContext);

    const [personagem, setPersonagem] = useState(null);

    const salvarPersonagem = async (novoPersonagem) => {
        try {
            console.log('user');
            console.log(user);
            console.log('novoPersonagem');
            console.log(novoPersonagem);
            // Assuming user has an ID, replace 'user.id' with your actual user ID
            const userUID = user.uid;
            const path = `users/${userUID}/personagens/${novoPersonagem.nome}`;

            await firestore().doc(path).set(
                {
                    nome: novoPersonagem.nome,
                    atributos: novoPersonagem.atributos
                },
                { merge: true }
            );

            setPersonagem(novoPersonagem);

            return true;
        } catch (error) {
            console.error('Erro ao salvar personagem:', error.message);
        }
    };

    return (
        <PersonagemContext.Provider value={{ personagem, salvarPersonagem }}>
            {children}
        </PersonagemContext.Provider>
    );
};