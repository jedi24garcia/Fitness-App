import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import GoogleFit, { Scopes } from 'react-native-google-fit';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

const LegTraining = () => {
    const [sets, setSets] = useState({
        backSquats: 0,
        romanianDeadLifts: 0,
        splitSquat: 0,
        legExtension: 0,
        legPress: 0,
        lunges: 0,
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
                        <FitnessImageView source={require('../../images/Back_Squats.gif')} />
                        <Authenticate text="Back Squats" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('backSquats')} />
                            <Text style={styles.text}>Sets: {sets.backSquats}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('backSquats')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Romanian_Deadlifts.gif')} />
                        <Authenticate text="Romanian Deadlifts" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('romanianDeadLifts')} />
                            <Text style={styles.text}>Sets: {sets.romanianDeadLifts}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('romanianDeadLifts')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Split_Squat.gif')} />
                        <Authenticate text="Split Squat" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('splitSquat')} />
                            <Text style={styles.text}>Sets: {sets.splitSquat}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('splitSquat')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Leg_Extension.gif')} />
                        <Authenticate text="Leg Extension" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('legExtension')} />
                            <Text style={styles.text}>Sets: {sets.legExtension}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('legExtension')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Leg_Press.gif')} />
                        <Authenticate text="Leg Press" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('legPress')} />
                            <Text style={styles.text}>Sets: {sets.legPress}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('legPress')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Lunges.gif')} />
                        <Authenticate text="Lunges" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('lunges')} />
                            <Text style={styles.text}>Sets: {sets.lunges}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('lunges')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default LegTraining;

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