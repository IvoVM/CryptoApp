import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:Constants.statusBarHeight,
  },
});
