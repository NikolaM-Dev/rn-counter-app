import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  const handlePress = (accumulated: number): void => {
    setCounter(prevCounter => prevCounter + accumulated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Fab title="+1" onPress={() => handlePress(1)} />
      <Fab position="bl" title="-1" onPress={() => handlePress(-1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 40,
    textAlign: 'center',
    bottom: 20,
  },
});
export default CounterScreen;
