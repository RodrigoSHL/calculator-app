import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundBase: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
  },
  smallResult: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#d1d7db',
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    color: 'black'
  },
});
