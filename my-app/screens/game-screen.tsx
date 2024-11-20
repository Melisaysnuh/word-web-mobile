import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Hexagon } from '../components/hex-component'; // Reuse your styled Hexagon component

const GameScreen: React.FC = () => {
    return (
        <View style={gameScreenStyles.hexContainer}>
            {/* Top row */}
            <Hexagon letter="7" style={gameScreenStyles.hexagon7} />
            <Hexagon letter="2" style={gameScreenStyles.hexagon2} />
            <Hexagon letter="3" style={gameScreenStyles.hexagon3} />

            {/* Middle hexagon */}
            <Hexagon letter="1" style={gameScreenStyles.hexagon1} />

            {/* Bottom row */}
            <Hexagon letter="4" style={gameScreenStyles.hexagon4} />
            <Hexagon letter="5" style={gameScreenStyles.hexagon5} />
            <Hexagon letter="6" style={gameScreenStyles.hexagon6} />
        </View>
    );
};

const gameScreenStyles = StyleSheet.create({
    hexContainer: {
        width: '80%', // Adjust container width
        height: 300, // Adjust height based on the grid
        position: 'relative', // Necessary for absolute positioning inside the container

        justifyContent: 'center', // Centering the grid vertically
        alignItems: 'center', // Centering the grid horizontally
    },
    hexagon1: {
        position: 'absolute',
        top: '40%', // Centered vertically
        left: '40%', // Centered horizontally
    },
    hexagon2: {
        position: 'absolute',
        top: '16%', // Slightly above the middle hexagon
        left: '26%', // Adjust left to center in the top row
    },
    hexagon3: {
        position: 'absolute',
        top: '16%', // Same row as hexagon2
        left: '55%', // Adjust right to balance the top row
    },
    hexagon7: {
        position: 'absolute',
        top: '40%', // Highest hexagon
        left: '12%', // Leftmost hexagon
    },
    hexagon4: {
        position: 'absolute',
        top: '40%', // Below the middle hexagon
        left: '68%', // Left position for bottom row
    },
    hexagon5: {
        position: 'absolute',
        top: '64%', // Lowest hexagon
        left: '54%', // Centered in the bottom row
    },
    hexagon6: {
        position: 'absolute',
        top: '64%', // Same row as hexagon4
        left: '25%', // Right position for bottom row
    },
});

export default GameScreen;
