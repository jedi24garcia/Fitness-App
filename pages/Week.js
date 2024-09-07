import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const WeekDays = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.introText}>CALISTHENICS PLAN FOR ALL AGES</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Youth/Adult')}>
                        <Text style={styles.authenticate}>18-35</Text> 
                    </TouchableOpacity>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />     
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Adults')}>
                        <Text style={styles.authenticate}>36-45</Text>
                    </TouchableOpacity> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Adults')}>
                        <Text style={styles.authenticate}>46-55</Text>
                    </TouchableOpacity> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Adult/Senior')}>
                        <Text style={styles.authenticate}>55+</Text>
                    </TouchableOpacity> 
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WeekDays;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004D74',
        padding: 20,
        justifyContent: 'center',
    },
    introText: {
        marginBottom: 20,
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    authenticate: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    fitnessImage: {
        width: 170,
        height: 250,
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
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 