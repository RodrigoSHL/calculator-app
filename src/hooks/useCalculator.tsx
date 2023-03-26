import { useRef, useState } from "react";

enum Operators {
    add,
    subtract,
    divide,
    multiply,
  }
  
export const useCalculator = () => {

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
  return {
    number,
    prevNumber,
    cleanResult,
    positiveNegative,
    deleteNumber,
    btnAdd,
    btnDivide,
    btnMultiply,
    btnSubtract,
    buildNumber,
    calcule

  }
  
}

