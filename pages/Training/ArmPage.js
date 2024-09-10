import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

const ArmTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/EZB_CURL.gif')} />
                        <Authenticate text="EZ Bar Curl" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Bicep_Curl.gif')} />
                        <Authenticate text="Bicep Curl" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Tricep_Dumbbell.gif')} />
                        <Authenticate text="Tricep Dumbbell" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Triceps_Pushdown.gif')} />
                        <Authenticate text="Triceps Pushdown" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/One_Arm_Dumbbell_Row.gif')} />
                        <Authenticate text="One Arm Dumbbell Row" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/One_Arm_Seated_Dumbbell_Curl.gif')} />
                        <Authenticate text="One Arm Seated Dumbbell" />
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Incline_Hammer_Curl.gif')} />
                        <Authenticate text="Incline Hammer Curl" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Wrist_Curl.gif')} />
                        <Authenticate text="Wrist Curl" />
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default ArmTraining;