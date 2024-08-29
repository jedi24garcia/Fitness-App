import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const WeekDays = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => navigation.navigate('Monday')}>
                        <Text style={styles.authenticate}>18-35</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.buttonContainer}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />     
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Tuesday')}>
                        <Text style={styles.authenticate}>36-45</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Wednesday')}>
                        <Text style={styles.authenticate}>46-55</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.buttonContainer}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Thursday')}>
                        <Text style={styles.authenticate}>55+</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
    );
};

export default WeekDays;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#083236',
        padding: 20,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    authenticate: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    fitnessImage: {
        width: 100,
        height: 100,
        borderRadius: 10, 
        marginBottom: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        width: '45%',
    },
    authenticateButton: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        height: '100',
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 