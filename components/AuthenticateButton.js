import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AuthenticateButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        width: '70%',
        marginBottom: 50,
        padding: 15,
        alignSelf: 'center',
    },
    text: {
        color: '#F5F5F5',
        textAlign: 'center',
    },
});

export default AuthenticateButton;

