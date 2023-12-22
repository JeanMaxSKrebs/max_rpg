import React, { createContext, useContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthUserContext } from '../context/AuthUserProvider'; // Certifique-se de ajustar o caminho do import conforme necessário

export const PersonagemContext = createContext();

export const PersonagemProvider = ({ children }) => {
    const [personagem, setPersonagem] = useState(null);

    const salvarPersonagem = (novoPersonagem) => {
        setPersonagem(novoPersonagem);
    };

    return (
        <PersonagemContext.Provider value={{ personagem, salvarPersonagem }}>
            {children}
        </PersonagemContext.Provider>
    );
};