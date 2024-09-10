import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';

const LegTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Back_Squats.gif')} />
                    <FitnessImageView source={require('../../images/Romanian_Deadlifts.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Split_Squat.gif')} />
                    <FitnessImageView source={require('../../images/Leg_Extension.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Leg_Press.gif')} />
                    <FitnessImageView source={require('../../images/Lunges.gif')} />
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default LegTraining;