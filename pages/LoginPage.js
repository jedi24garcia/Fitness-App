import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

const EntryPage = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.SignInButton} onPress={() => Alert.alert('Button Pressed')}>
                <Text style={styles.SignInFont}>Login</Text>
            </TouchableOpacity>
        </View>
    );   
};

export default EntryPage;

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    SignInButton: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        width: '70%',
        marginBottom: 10,
        textAlign: 'center',
        padding: 15,
    },
    SignInFont: {
        color: '#F5F5F5',
        textAlign: 'center',
    },
})