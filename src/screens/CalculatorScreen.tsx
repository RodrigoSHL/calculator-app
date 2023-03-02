import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../src/theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';



const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,400.000</Text>
      <Text style={styles.result}>1,400.000</Text>

      <View style={styles.buttonRow}>
        <ButtonCalc text={'C'} color={'#9b9b9b'}/>
        <ButtonCalc text={'+/-'} color={'#9b9b9b'}/>
        <ButtonCalc text={'del'} color={'#9b9b9b'}/>
        <ButtonCalc text={'/'} color={'#ff9427'}/>
      </View>
      <View style={styles.buttonRow}>
        <ButtonCalc text={'1'} />
        <ButtonCalc text={'2'} />
        <ButtonCalc text={'3'}  />
        <ButtonCalc text={'*'} color={'#ff9427'} />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCalc text={'4'} />
        <ButtonCalc text={'5'} />
        <ButtonCalc text={'6'}  />
        <ButtonCalc text={'+'} color={'#ff9427'}/>
      </View>
      <View style={styles.buttonRow}>
        <ButtonCalc text={'7'} />
        <ButtonCalc text={'8'} />
        <ButtonCalc text={'9'}  />
        <ButtonCalc text={'-'} color={'#ff9427'} />
      </View>
      
    </View>
  );
};

export default CalculatorScreen;
