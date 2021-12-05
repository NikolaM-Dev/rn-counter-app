import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  const handlePress = (accumulated: number) => {
    setCounter(prevCounter => prevCounter + accumulated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => handlePress(1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => handlePress(-1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
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
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default CounterScreen;
