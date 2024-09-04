import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const BodyTarget = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.introText}>HIT YOUR DESIRED TARGET AREA</Text>
            <View style={styles.viewImage}>
                <Image style={styles.targetImage} source={require('../images/bodytransformed.webp')} />
            </View>
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
    viewImage: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});