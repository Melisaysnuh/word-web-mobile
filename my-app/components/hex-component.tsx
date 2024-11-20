import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert, ViewStyle } from 'react-native';

interface HexagonProps {
    letter: string;
    style?: ViewStyle
}

export const Hexagon: React.FC<HexagonProps> = ({ letter, style }) => {
    const onPressFunction = () => {
        Alert.alert(`Button ${letter} was pressed!`);
    };

    return (
        <Pressable style={[hexStyles.hexagon, style]} onPress={onPressFunction}>
            <View style={hexStyles.hexagonInner}>
                <Text style={hexStyles.letter}>{letter}</Text>
            </View>
            <View style={hexStyles.hexagonBefore} />
            <View style={hexStyles.hexagonAfter} />
        </Pressable>
    );
};

const hexStyles = StyleSheet.create({
    hexagon: {
        width: 80,
        height: 44,
    },
    hexagonInner: {
        width: 80,
        height: 44,
        backgroundColor: "#e7e7e7",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hexagonBefore: {
        position: "absolute",
        top: -20,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderLeftWidth: 40,
        borderLeftColor: "transparent",
        borderRightWidth: 40,
        borderRightColor: "transparent",
        borderBottomWidth: 20,
        borderBottomColor: "#e7e7e7",
    },
    hexagonAfter: {
        position: "absolute",
        bottom: -20,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderLeftWidth: 40,
        borderLeftColor: "transparent",
        borderRightWidth: 40,
        borderRightColor: "transparent",
        borderTopWidth: 20,
        borderTopColor: "#e7e7e7",
    },
    letter: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});
