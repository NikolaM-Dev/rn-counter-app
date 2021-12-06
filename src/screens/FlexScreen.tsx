import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1} />
      <Text style={styles.box2} />
      <Text style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28C4D9',
    flex: 1,
  },
  box1: {
    backgroundColor: 'yellow',
    borderColor: 'white',
    borderWidth: 2,
    flex: 4,
    fontSize: 30,
  },
  box2: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 2,
    flex: 3,
    fontSize: 30,
  },
  box3: {
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 2,
    flex: 3,
    fontSize: 30,
  },
});

export default FlexScreen;
