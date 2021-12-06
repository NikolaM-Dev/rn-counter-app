import React from 'react';
import {SafeAreaView} from 'react-native';

// import HelloWorldScreen from './src/screens/HelloWorldScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    // <HelloWorldScreen />;
    // <CounterScreen />
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
