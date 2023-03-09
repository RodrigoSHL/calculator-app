import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  buttonWidth?: boolean;
  action?: () => void;
}

export const ButtonCalc = ({
  text,
  color = '#2d2d2d',
  buttonWidth = false,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: buttonWidth ? 160 : 70,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
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
    fontSize: 25,
    fontWeight: '300',
    color: 'white',
  },
});
