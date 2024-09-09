import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const ChestTraining = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.introText}>TRAIN EFFECTIVELY EVERYWHERE</Text>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Flat_Bench_Press.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Dumbbell_Flyes.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Incline_Dumbbell_Press.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Push_Up.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Dumbbell_Press.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Chest_Dips.gif')} />
                </View>
                <View style={styles.row}>
                    <Image style={styles.fitnessImage} source={require('../../images/Cable_Crossover.gif')} />
                    <Image style={styles.fitnessImage} source={require('../../images/Level_Chest_Press.gif')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ChestTraining;

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