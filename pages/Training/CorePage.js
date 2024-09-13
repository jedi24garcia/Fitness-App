import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

const CoreTraining = () => {
    const [sets, setSets] = useState({
        bridges: 0,
        hangingLegRaises: 0,
        plank: 0,
        highKnees: 0,
    });

// This function is to increment sets
    const incrementSet = (exercise) => {
        setSets((prevSets) => ({
            ...prevSets,
            [exercise]: prevSets[exercise] + 1,
        }));
    };

// This function is to reset sets for an exercise
    const resetSet = (exercise) => {
        setSets((prevSets) => ({
            ...prevSets,
            [exercise]: 0,
        }));
    };

    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Bridges.gif')} />
                        <Authenticate text="Bridges" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('bridges')} />
                            <Text style={styles.text}>Sets: {sets.bridges}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('bridges')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>    
                        <FitnessImageView source={require('../../images/Hanging_Leg_Raises.gif')} />
                        <Authenticate text="Hanging Leg Raises" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('hangingLegRaises')} />
                            <Text style={styles.text}>Sets: {sets.hangingLegRaises}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('hangingLegRaises')} />
                        </View>    
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Plank.gif')} />
                        <Authenticate text="Plank" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('plank')} />
                            <Text style={styles.text}>Sets: {sets.plank}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('plank')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/High_Knees.gif')} />
                        <Authenticate text="High Knees" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('highKnees')} />
                            <Text style={styles.text}>Sets: {sets.highKnees}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('highKnees')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default CoreTraining;

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