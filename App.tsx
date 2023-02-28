import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundBase}>
      <StatusBar backgroundColor='black' barStyle='light-content'/>
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;