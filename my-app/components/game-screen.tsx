import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameScreen: React.FC = () => {
    return (
        <View style={gameScreenStyles.container}>
            <View style={gameScreenStyles.nav} id='progress'>
                <Text style={gameScreenStyles.mainText}>Nav Bar</Text></View>
            <View style={gameScreenStyles.progress} id='progress'>
                <Text style={gameScreenStyles.mainText}>Progress Bar</Text></View>
            <View style={gameScreenStyles.output} id='output'>
                <Text style={gameScreenStyles.mainText}>Output</Text></View>
            <View style={gameScreenStyles.gameholder} id='gameholder'>
                <Text style={gameScreenStyles.mainText}>Game Holder </Text></View>
            <View style={gameScreenStyles.controls} id='controls'>
                <Text style={gameScreenStyles.mainText}>Controls</Text></View>

        </View>
    );
};

export interface GameScreenProps {

}
const gameScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: '#13072E',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    progress: {
        width: '100%',
        height: '15%',
        backgroundColor: 'blue'
    },
    nav: {
        width: '100%',
        height: '10%',
        backgroundColor: 'red'
    },
    output: {
        borderCurve: 'circular',
        borderColor: 'white',
        width: '100%',
        height: '10%',
        backgroundColor: 'blue'
    },
    gameholder: {
        borderCurve: 'circular',
        borderColor: 'white',
        width: '100%',
        height: '40%',
        backgroundColor: 'blue'
    },
    controls: {
        borderCurve: 'circular',
        borderColor: 'white',
        width: '100%',
        height: '20%',
        backgroundColor: 'blue'
    },


    mainText: {
        color: 'white',

    },
});
export default GameScreen;