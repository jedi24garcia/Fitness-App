import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const OpenPage = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
        <Text style={styles.welcomeText}>Hello</Text>
        </View>
    );
};

export default OpenPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'black',
    },
    welcomeText: {
        color: 'whitesmoke',
    },
    fitnessImage: {
        width: 370,
        height: 350,
        marginBottom: 40,
        borderRadius: 10,  
    },
})
