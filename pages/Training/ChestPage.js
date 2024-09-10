import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

const ChestTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Flat_Bench_Press.gif')} />
                        <Authenticate text="Flat Bench Press" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Dumbbell_Flyes.gif')} />
                        <Authenticate text="Dumbbell Flyes" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Incline_Dumbbell_Press.gif')} />
                        <Authenticate text="Incline Dumbbell Press" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Push_Up.gif')} />
                        <Authenticate text="Push Up" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Dumbbell_Press.gif')} />
                        <Authenticate text="Dumbbell Press" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Chest_Dips.gif')} />
                        <Authenticate text="Chest Dips" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Cable_Crossover.gif')} />
                        <Authenticate text="Cable Crossover" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Level_Chest_Press.gif')} />
                        <Authenticate text="Level Chest Press" />
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default ChestTraining;