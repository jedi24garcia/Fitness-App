import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, Alert, TextInput } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const EntryPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailPlaceholder, setEmailPlaceholder] = React.useState('Type email address here');
    const [passwordPlaceholder, setPasswordPlaceholder] = React.useState('Type password here');
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/gym.jpg')} style={styles.image}>
            <Text style={styles.authenticate}>Email Address</Text>
            <TextInput style={styles.input} placeholder={emailPlaceholder} value={email} onChangeText={newText => setEmail(newText)} onFocus={() => setEmailPlaceholder('')} onBlur={() => setEmailPlaceholder('Type email address here')} />
            <Text style={styles.authenticate}>Password</Text>
            <TextInput style={styles.input} placeholder={passwordPlaceholder} value={password} onChangeText={newText => setPassword(newText)} onFocus={() => setPasswordPlaceholder('')} onBlur={() => setPasswordPlaceholder('Type password here')} secureTextEntry />
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
        backgroundColor: '#083236',
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        opacity: 0.7,
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
        padding: 10,
        textAlign: 'center',
        color: 'white',
    },
    SignInButton: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        width: '70%',
        marginBottom: 200,
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