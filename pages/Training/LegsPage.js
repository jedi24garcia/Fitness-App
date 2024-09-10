import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

const LegTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Back_Squats.gif')} />
                        <Authenticate text="Back Squats" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Romanian_Deadlifts.gif')} />
                        <Authenticate text="Romanian Deadlifts" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Split_Squat.gif')} />
                        <Authenticate text="Split Squat" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Leg_Extension.gif')} />
                        <Authenticate text="Leg Extension" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Leg_Press.gif')} />
                        <Authenticate text="Leg Press" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Lunges.gif')} />
                        <Authenticate text="Lunges" />
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default LegTraining;