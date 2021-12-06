import React from 'react';
import {View, StyleSheet} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#28C4D9',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  greenBox: {
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFill,
  },
});

export default PositionScreen;
