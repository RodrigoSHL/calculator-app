import {Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from '../../src/theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

enum Operators {
  add,
  subtract,
  divide,
  multiply,
}

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const cleanResult = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    // Don't accept double point
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Decimal point
      if (textNumber === '.') {
        setNumber(number + textNumber);
        //  Evaluate if it is another zero, and there is a point
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const deleteNumber = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else setNumber('0');
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumberByPrev = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberByPrev();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumberByPrev();
    lastOperation.current = Operators.multiply;
  };

  const btnAdd = () => {
    changeNumberByPrev();
    lastOperation.current = Operators.add;
  };

  const btnSubtract = () => {
    changeNumberByPrev();
    lastOperation.current = Operators.subtract;
  };

  const calcule = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber('0')
  };

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
