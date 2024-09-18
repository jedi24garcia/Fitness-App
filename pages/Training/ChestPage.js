import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import GoogleFit, { Scopes } from 'react-native-google-fit';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

const ChestTraining = () => {
    const [sets, setSets] = useState({
        flatBenchPress: 0,
        dumbbellFlyes: 0,
        inclineDumbbellPress: 0,
        pushUp: 0,
        dumbbellPress: 0,
        chestDips: 0,
        cableCrossover: 0,
        levelChestPress: 0,
    });

    useEffect(() => {
        const requestPermissions = async () => {
            try {
                // Configure authorization options
                const options = {
                    scopes: [
                        Scopes.FITNESS_ACTIVITY_READ,
                        Scopes.FITNESS_ACTIVITY_WRITE,
                    ],
                };
    
                // Authorize Google Fit
                GoogleFit.authorize(options)
                    .then((authResult) => {
                        if (authResult.success) {
                            console.log('Google Fit Authorization Success:', authResult);
                        } else {
                            console.log('Google Fit Authorization Denied:', authResult.message);
                        }
                    })
                    .catch((error) => {
                        console.log('Authorization Error:', error);
                    });
            } catch (err) {
                console.warn('Error requesting permissions:', err);
            }
        };
    
        requestPermissions();
    }, []);

    const incrementSet = async (exercise) => {
        setSets((prevSets) => {
            const updatedSets = { ...prevSets, [exercise]: prevSets[exercise] + 1 };

            // Define the workout data options
            const workoutOptions = {
                startDate: new Date().toISOString(), // Workout start time
                endDate: new Date().toISOString(),   // Workout end time
                calories: 100,                      // Optional, in kcal
                distance: 0,                        // Optional, in meters
                type: 'Strength Training',          // Make sure this type matches your Google Fit setup
            };

            // Save workout data to Google Fit
            GoogleFit.saveWorkout(workoutOptions)
                .then(() => console.log('Workout saved to Google Fit'))
                .catch((error) => console.log('Error saving workout: ', error));

            return updatedSets;
        });
    };

    const resetSet = (exercise) => {
        setSets((prevSets) => ({ ...prevSets, [exercise]: 0 }));
    };

    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Flat_Bench_Press.gif')} />
                        <Authenticate text="Flat Bench Press" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('flatBenchPress')} />
                            <Text style={styles.text}>Sets: {sets.flatBenchPress}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('flatBenchPress')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Dumbbell_Flyes.gif')} />
                        <Authenticate text="Dumbbell Flyes" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('dumbbellFlyes')} />
                            <Text style={styles.text}>Sets: {sets.dumbbellFlyes}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('dumbbellFlyes')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Incline_Dumbbell_Press.gif')} />
                        <Authenticate text="Incline Dumbbell Press" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('inclineDumbbellPress')} />
                            <Text style={styles.text}>Sets: {sets.inclineDumbbellPress}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('inclineDumbbellPress')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Push_Up.gif')} />
                        <Authenticate text="Push Up" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('pushUp')} />
                            <Text style={styles.text}>Sets: {sets.pushUp}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('pushUp')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Dumbbell_Press.gif')} />
                        <Authenticate text="Dumbbell Press" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('dumbbellPress')} />
                            <Text style={styles.text}>Sets: {sets.dumbbellPress}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('dumbbellPress')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Chest_Dips.gif')} />
                        <Authenticate text="Chest Dips" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('chestDips')} />
                            <Text style={styles.text}>Sets: {sets.chestDips}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('chestDips')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Cable_Crossover.gif')} />
                        <Authenticate text="Cable Crossover" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('cableCrossover')} />
                            <Text style={styles.text}>Sets: {sets.cableCrossover}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('cableCrossover')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Level_Chest_Press.gif')} />
                        <Authenticate text="Level Chest Press" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('levelChestPress')} />
                            <Text style={styles.text}>Sets: {sets.levelChestPress}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('levelChestPress')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default ChestTraining;

const styles = StyleSheet.create({
    metricContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    text: {
        color: '#ffffff', 
        fontSize: 16,
    },
});