import React from 'react';
import { StyleSheet, Text, ImageBackground, image, TouchableOpacity, View, Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const EntryPage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/cool_city.jpg')} style={styles.image}>
            <Text style={styles.authenticate}>Email Address</Text>
            <Text style={styles.authenticate}>Password</Text>
            <TouchableOpacity style={styles.SignInButton} onPress={() => Alert.alert('Button Pressed')}>
                <Text style={styles.SignInFont}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.authenticate}>Login with Social Accounts</Text>
            <View style={styles.SocialMedia}>
                <SocialIcon type="facebook" />
                <SocialIcon type="twitter" />
                <SocialIcon type="google" />
            </View>
            </ImageBackground>
        </View>
    );   
};

export default EntryPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
    },
    authenticate: {
        padding: 20,
        textAlign: 'center',
        color: 'white',
    },
    SignInButton: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        width: '70%',
        marginBottom: 10,
        padding: 15,
        textAlign: 'center',
    },
    SignInFont: {
        color: '#F5F5F5',
        textAlign: 'center',
    },
    SocialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})