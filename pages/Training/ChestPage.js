import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';

const ChestTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Flat_Bench_Press.gif')} />
                    <FitnessImageView source={require('../../images/Dumbbell_Flyes.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Incline_Dumbbell_Press.gif')} />
                    <FitnessImageView source={require('../../images/Push_Up.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Dumbbell_Press.gif')} />
                    <FitnessImageView source={require('../../images/Chest_Dips.gif')} />
                </FitnessRow>
                <FitnessRow>
                    <FitnessImageView source={require('../../images/Cable_Crossover.gif')} />
                    <FitnessImageView source={require('../../images/Level_Chest_Press.gif')} />
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default ChestTraining;