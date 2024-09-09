import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const ArmTraining = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.introText}>TRAIN EFFECTIVELY EVERYWHERE</Text>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/EZB_CURL.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Bicep_Curl.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Tricep_Dumbbell.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Triceps_Pushdown.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/One_Arm_Dumbbell_Row.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/One_Arm_Seated_Dumbbell_Curl.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Incline_Hammer_Curl.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Wrist_Curl.gif')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ArmTraining;

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