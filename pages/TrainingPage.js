import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const TrainBody = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.introText}>TRAIN EFFECTIVELY EVERYWHERE</Text>
            <View style={styles.viewImage}>
                <Image style={styles.targetImage} source={require('../images/bodytransformed.webp')} />
            </View>
        </View>
    );
};

export default TrainBody;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#004D74',
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
    },
})