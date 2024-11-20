import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screens/game-screen'

export default function App() {
  return (
    <View style={appStyles.container}>
      <View style={appStyles.nav} id='progress'>
        <Text style={appStyles.mainText}>Nav Bar</Text></View>
      <View style={appStyles.progress} id='progress'>
        <Text style={appStyles.mainText}>Progress Bar Updated</Text></View>
      <View style={appStyles.output} id='output'>
        <Text style={appStyles.mainText}>Output</Text></View>
     <GameScreen/>
      <View style={appStyles.controls} id='controls'>
        <Text style={appStyles.mainText}>Controls</Text></View>

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
  progress: {
    width: '100%',
    height: '15%',
    backgroundColor: 'blue'
  },
  nav: {
    width: '100%',
    height: '8%',
    backgroundColor: 'red'
  },
  output: {
    borderCurve: 'circular',
    borderColor: 'white',
    width: '100%',
    height: '14%',
    backgroundColor: 'white'
  },
  controls: {
    borderCurve: 'circular',
    borderColor: 'white',
    width: '100%',
    height: '16%',
    backgroundColor: 'green'
  },



  mainText: {
    color: 'white',

  },
});
