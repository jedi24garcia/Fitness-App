import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BodyTarget = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.introText}>HIT YOUR DESIRED TARGET AREA</Text>
        </View>
    );
};

export default BodyTarget;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#083236',
        padding: 20,
    },
    introText: {
        marginBottom: 20,
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: 'white',
    },
});