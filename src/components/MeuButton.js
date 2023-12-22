import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { COLORS } from '../assets/colors';

const MeuButton = props => {
  const width = props.width || '45%';
  const color = props.cor || COLORS.primary;
  const estiloBorda = props.borda ? { borderWidth: 5, borderColor: color, backgroundColor: COLORS.primaryShadow } : null;
  const disable = props.disabled || false;
  const alignSelf = props.alignSelf || 'auto';
  const fontSize = props.fontSize || 25;


  return (
    <TouchableHighlight disabled={disable} style={[{ width, alignSelf },
    estiloBorda
      ? { backgroundColor: COLORS.primaryShadow, ...estiloBorda }
      : { backgroundColor: color },
    disable ? styles.disabledButton : styles.button
    ]}

      onPress={() => props.onClick()}>
      <Text style={[styles.texto, { fontSize }]}>{props.texto}</Text>
    </TouchableHighlight>
  );
};

export default MeuButton;

const styles = StyleSheet.create({
  texto: {
    color: COLORS.background,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
});
