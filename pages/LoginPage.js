import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, TextInput } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import '../Firebaseconfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const EntryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailPlaceholder, setEmailPlaceholder] = React.useState('Type email address here');
    const [passwordPlaceholder, setPasswordPlaceholder] = React.useState('Type password here');

    const auth = getAuth();
    
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('User sign in with email:', user.email);
            navigation.navigate('Week');
        })
        .catch((error) => Alert.alert(error.message));
    };

    return (
        <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.authenticate}>Email Address</Text>
                    <TextInput style={styles.input} placeholder={emailPlaceholder} value={email} onChangeText={newText => setEmail(newText)} onFocus={() => setEmailPlaceholder('')} onBlur={() => setEmailPlaceholder('Type email address here')} />
                    <Text style={styles.authenticate}>Password</Text>
                    <TextInput style={styles.input} placeholder={passwordPlaceholder} value={password} onChangeText={newText => setPassword(newText)} onFocus={() => setPasswordPlaceholder('')} onBlur={() => setPasswordPlaceholder('Type password here')} secureTextEntry />
                    <View style={styles.authenticateButton}>
                        <TouchableOpacity onPress={signInUser}>
                            <Text style={styles.authenticateFont}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.authenticate}>Don't have an account?</Text>
                    <View style={styles.authenticateButton}>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
                            <Text style={styles.authenticateFont}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.authenticate}>Login with Social Accounts</Text>
                    <View style={styles.SocialMedia}>
                        <SocialIcon type="facebook" />
                        <SocialIcon type="twitter" />
                        <SocialIcon type="google" />
                    </View>
                </View>
        </View>
    );   
};

export default EntryPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#083236',
    },
    content: {
        flex: 1,
        resizeMode: 'cover',
        padding: 100,
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        // opacity: 0.2,
    },
    input: {
        textAlign: 'center',
        color: 'white',
        height: 50,
        margin: 12,
        borderWidth: 5,
        borderColor: '#00d3ff',
        borderRadius: 100, 
        marginBottom: 30,
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
    authenticateFont: {
        color: '#F5F5F5',
        textAlign: 'center',
    },
    SocialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})