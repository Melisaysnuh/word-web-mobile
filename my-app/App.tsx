import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './components/game-screen'

export default function App() {
  return (
    <View style={appStyles.container}>
      <GameScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13072E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
