import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const LegTraining = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.introText}>TRAIN EFFECTIVELY EVERYWHERE</Text>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Back_Squats.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Romanian_Deadlifts.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Split_Squat.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Leg_Extension.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Leg_Press.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Lunges.gif')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default LegTraining;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000000',
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