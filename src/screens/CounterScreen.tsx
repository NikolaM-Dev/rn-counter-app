import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  const handlePress = (accumulated: number) => {
    setCounter(prevCounter => prevCounter + accumulated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title="+1" onPress={() => handlePress(1)} />
      <Button title="-1" onPress={() => handlePress(-1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  text: {textAlign: 'center', fontSize: 40, color: '#000'},
});
export default CounterScreen;
