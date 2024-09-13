import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

// Tracks the set for each exercise
const ArmTraining = () => {
    const [sets, setSets] = useState({
        ezBarCurl: 0,
        bicepCurl: 0,
        tricepDumbbell: 0,
        tricepsPushdown: 0,
        oneArmDumbbellRow: 0,
        oneArmSeatedDumbbell: 0,
        inclineHammerCurl: 0,
        wristCurl: 0,
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
                        <FitnessImageView source={require('../../images/EZB_CURL.gif')} />
                        <Authenticate text="EZ Bar Curl" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('ezBarCurl')} />
                            <Text style={styles.text}>Sets: {sets.ezBarCurl}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('ezBarCurl')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Bicep_Curl.gif')} />
                        <Authenticate text="Bicep Curl" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('bicepCurl')} />
                            <Text style={styles.text}>Sets: {sets.bicepCurl}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('bicepCurl')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Tricep_Dumbbell.gif')} />
                        <Authenticate text="Tricep Dumbbell" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('tricepDumbbell')} />
                            <Text style={styles.text}>Sets: {sets.tricepDumbbell}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('tricepDumbbell')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Triceps_Pushdown.gif')} />
                        <Authenticate text="Triceps Pushdown" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('tricepsPushdown')} />
                            <Text style={styles.text}>Sets: {sets.tricepsPushdown}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('tricepsPushdown')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/One_Arm_Dumbbell_Row.gif')} />
                        <Authenticate text="One Arm Dumbbell Row" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('oneArmDumbbellRow')} />
                            <Text style={styles.text}>Sets: {sets.oneArmDumbbellRow}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('oneArmDumbbellRow')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/One_Arm_Seated_Dumbbell_Curl.gif')} />
                        <Authenticate text="One Arm Seated Dumbbell" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('oneArmSeatedDumbbell')} />
                            <Text style={styles.text}>Sets: {sets.oneArmSeatedDumbbell}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('oneArmSeatedDumbbell')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Incline_Hammer_Curl.gif')} />
                        <Authenticate text="Incline Hammer Curl" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('inclineHammerCurl')} />
                            <Text style={styles.text}>Sets: {sets.inclineHammerCurl}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('inclineHammerCurl')} />
                        </View>
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Wrist_Curl.gif')} />
                        <Authenticate text="Wrist Curl" />
                        <View style={styles.metricContainer}>
                            <Button title="Add Set" onPress={() => incrementSet('wristCurl')} />
                            <Text style={styles.text}>Sets: {sets.wristCurl}</Text>
                            <Button color="#696969" title="Reset" onPress={() => resetSet('wristCurl')} />
                        </View>
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default ArmTraining;

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