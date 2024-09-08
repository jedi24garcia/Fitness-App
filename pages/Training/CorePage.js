import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const CoreTraining = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.introText}>TRAIN EFFECTIVELY EVERYWHERE</Text>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                    <Image style={styles.fitnessImage} source={require('../../images/gym.jpg')} />
                </View>
            </View>
        </ScrollView>
    );
};

export default CoreTraining;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#5F84A2',
        padding: 20,
    },
    introText: {
        marginBottom: 20,
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: '#00CED1',
    },
    viewImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    fitnessImage: {
        width: 170,
        height: 250,
        borderRadius: 10, 
        marginBottom: 10,
    },
})