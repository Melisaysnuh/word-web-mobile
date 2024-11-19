import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameScreen: React.FC = () => {
    return (
        <View style={gameScreenStyles.container}>
            <Text style={gameScreenStyles.mainText}>Game Screen here!</Text>

        </View>
    );
};

export interface GameScreenProps {

}
const gameScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13072E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        flex: 1,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default GameScreen;