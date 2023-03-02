import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
}

export const ButtonCalc = ({text, color = '#2d2d2d'}: Props) => {
  return (
    <View style={{...styles.button, backgroundColor: color}}>
      <Text style={{...styles.textButton, color: (color==='#9b9b9b') ? 'black' : 'white'}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#2d2d2d',
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    color: 'white',
  },
});
