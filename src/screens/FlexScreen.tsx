import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28C4D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  box1: {
    backgroundColor: 'yellow',
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
  },
  box2: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
  },
  box3: {
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 30,
  },
});

export default FlexScreen;
