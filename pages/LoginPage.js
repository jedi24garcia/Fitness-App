import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, Alert, TextInput } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const EntryPage = () => {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/gym.jpg')} style={styles.image}>
            <Text style={styles.authenticate}>Email Address</Text>
            <TextInput style={styles.input} placeholder="Type email address here" newText={newText => setText(newText)} defaultValue={text} />
            <Text style={styles.authenticate}>Password</Text>
            <TextInput style={styles.input} placeholder="Type password address here" newText={newText => setText(newText)} defaultValue={text} />
            <View style={styles.SignInButton}>
            <TouchableOpacity onPress={() => Alert.alert('Button Pressed')}>
                <Text style={styles.SignInFont}>Login</Text>
            </TouchableOpacity>
            </View>
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
        opacity: 0.7,
        backgroundColor: '#083236',
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        textAlign: 'center',
        color: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 100,
        padding: 10,  
    },
    authenticate: {
        padding: 50,
        textAlign: 'center',
        color: 'white',
    },
    SignInButton: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        width: '70%',
        marginBottom: 10,
        padding: 15,
        alignSelf: 'center',
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