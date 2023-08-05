
import { StyleSheet, View, StatusBar } from 'react-native';

import Index from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    marginTop:  StatusBar.currentHeight,
    
  },
});
