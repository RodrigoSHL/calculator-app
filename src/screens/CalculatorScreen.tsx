import {Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from '../../src/theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {
 
  const {prevNumber, number, cleanResult, positiveNegative, deleteNumber, btnAdd, btnDivide, btnMultiply, btnSubtract, buildNumber, calcule } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text style={styles.result}>{number}</Text>

      <View style={styles.buttonRow}>
        <ButtonCalc text={'C'} color={'#9b9b9b'} action={cleanResult} />
        <ButtonCalc text={'+/-'} color={'#9b9b9b'} action={positiveNegative} />
        <ButtonCalc text={'del'} color={'#9b9b9b'} action={deleteNumber} />
        <ButtonCalc text={'/'} color={'#ff9427'} action={btnDivide} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text={'1'} action={buildNumber} />
        <ButtonCalc text={'2'} action={buildNumber} />
        <ButtonCalc text={'3'} action={buildNumber} />
        <ButtonCalc text={'*'} color={'#ff9427'} action={btnMultiply} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text={'4'} action={buildNumber} />
        <ButtonCalc text={'5'} action={buildNumber} />
        <ButtonCalc text={'6'} action={buildNumber} />
        <ButtonCalc text={'+'} color={'#ff9427'} action={btnAdd} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text={'7'} action={buildNumber} />
        <ButtonCalc text={'8'} action={buildNumber} />
        <ButtonCalc text={'9'} action={buildNumber} />
        <ButtonCalc text={'-'} color={'#ff9427'} action={btnSubtract} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text={'0'} buttonWidth action={buildNumber} />
        <ButtonCalc text={'.'} action={buildNumber} />
        <ButtonCalc text={'='} color={'#ff9427'} action={calcule} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
