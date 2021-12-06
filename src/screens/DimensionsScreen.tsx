import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 2,
          }}
        />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        Width: {width}, Height: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 200,
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
  },
});

export default DimensionsScreen;
