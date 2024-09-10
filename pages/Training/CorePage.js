import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';

const CoreTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Bridges.gif')} />
                    <FitnessImageView source={require('../../images/Hanging_Leg_Raises.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Plank.gif')} />
                    <FitnessImageView source={require('../../images/High_Knees.gif')} />
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default CoreTraining;