import React from 'react';
import { ScrollView } from 'react-native';

import FontIntroText from '../../components/IntroText';
import FitnessImageView from '../../components/FitnessImage';
import FitnessRow from '../../components/FitnessRow';
import Container from '../../components/TrainContainer';
import Authenticate from '../../components/AuthenticateText';
import ImageContainer from '../../components/ContainImage';

const CoreTraining = () => {
    return (
        <Container>
            <ScrollView>
                <FontIntroText text="TRAIN EFFECTIVELY EVERYWHERE" />
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Bridges.gif')} />
                        <Authenticate text="Bridges" />
                    </ImageContainer>
                    <ImageContainer>    
                        <FitnessImageView source={require('../../images/Hanging_Leg_Raises.gif')} />
                        <Authenticate text="Hanging Leg Raises" />    
                    </ImageContainer>
                </FitnessRow>
                <FitnessRow>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/Plank.gif')} />
                        <Authenticate text="Plank" />
                    </ImageContainer>
                    <ImageContainer>
                        <FitnessImageView source={require('../../images/High_Knees.gif')} />
                        <Authenticate text="High Knees" />
                    </ImageContainer>
                </FitnessRow>
            </ScrollView>
        </Container>
    );
};

export default CoreTraining;