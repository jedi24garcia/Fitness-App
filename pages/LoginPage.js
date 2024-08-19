import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EntryPage = () => {
    return (
        <View>
            <Text style={styles.SignInFont}>Login</Text>
        </View>
    );   
};

export default EntryPage;

const styles = StyleSheet.create ({
    SignInFont: {
        color: '#F5F5F5',
        textAlign: 'center',
    }
})