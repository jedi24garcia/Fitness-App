import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';

const ArmTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <FitnessImageView source={require('../../images/EZB_CURL.gif')} />
                    <FitnessImageView source={require('../../images/Bicep_Curl.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Tricep_Dumbbell.gif')} />
                    <FitnessImageView source={require('../../images/Triceps_Pushdown.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/One_Arm_Dumbbell_Row.gif')} />
                    <FitnessImageView source={require('../../images/One_Arm_Seated_Dumbbell_Curl.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Incline_Hammer_Curl.gif')} />
                    <FitnessImageView source={require('../../images/Wrist_Curl.gif')} />
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default ArmTraining;