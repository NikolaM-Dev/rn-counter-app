import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Nikola!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red', justifyContent: 'center'},
  text: {fontSize: 45, textAlign: 'center'},
});

export default HelloWorldScreen;
