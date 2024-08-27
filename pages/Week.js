import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const WeekDays = () => {
    return (
        <View style={styles.container}>
            <View style={styles.authenticateButton}>
                <TouchableOpacity onPress={() => Alert.alert('Monday')}>
                    <Text style={styles.authenticate}>Monday</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.authenticateButton}>
                <TouchableOpacity onPress={() => Alert.alert('Tuesday')}>
                    <Text style={styles.authenticate}>Tuesday</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.authenticateButton}>
                <TouchableOpacity onPress={() => Alert.alert('Wednesday')}>
                    <Text style={styles.authenticate}>Wednesday</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.authenticateButton}>
                <TouchableOpacity onPress={() => Alert.alert('Thursday')}>
                    <Text style={styles.authenticate}>Thursday</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.authenticateButton}>
                <TouchableOpacity onPress={() => Alert.alert('Friday')}>
                    <Text style={styles.authenticate}>Friday</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.authenticateButton}>
                <TouchableOpacity onPress={() => Alert.alert('Weekend')}>
                    <Text style={styles.authenticate}>Weekend</Text>
                </TouchableOpacity> 
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
    authenticate: {
        padding: 10,
        textAlign: 'center',
        color: 'white',
    },
    authenticateButton: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        width: '70%',
        marginBottom: 50,
        padding: 15,
        alignSelf: 'center',
    },
}); 