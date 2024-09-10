import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { SocialIcon, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Authenticate from '../components/AuthenticateText';
import AuthenticateButton from '../components/AuthenticateButton';

import '../Firebaseconfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const EntryPage = ({ navigation, setIsAuthenticated }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const auth = getAuth();
    
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('User signed in with email:', user.email);
            setIsAuthenticated(true); // sets to the next page if login is successful
        })
        .catch((error) => Alert.alert(error.message));
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <Authenticate text="Email Address" />
                    <Input
                        placeholder="Type email address here"
                        value={email}
                        onChangeText={setEmail}
                        leftIcon={<Icon name="envelope" size={24} color="white" />}
                        inputStyle={styles.inputText}
                        inputContainerStyle={styles.inputContainer}
                        placeholderTextColor="white"
                    />

                    <Authenticate text="Password" />           
                    <Input
                        placeholder="Type password here"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        leftIcon={<Icon name="lock" size={24} color="white" />}
                        inputStyle={styles.inputText}
                        inputContainerStyle={styles.inputContainer}
                        placeholderTextColor="white"
                    />

                   <AuthenticateButton onPress={signInUser} title="Login" />

                    <Authenticate text="Don't have an account?" />
                    <AuthenticateButton onPress={() => navigation.navigate('Sign')} title="Create Account" />

                    <Authenticate text="Login with Social Accounts" />
                    <View style={styles.SocialMedia}>
                        <SocialIcon type="facebook" />
                        <SocialIcon type="twitter" />
                        <SocialIcon type="google" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );   
};

export default EntryPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    content: {
        flex: 1,
        padding: 50,
    },
    fitnessImage: {
        width: 300, 
        height: 300, 
        borderRadius: 10,  
        marginBottom: 20, 
    },
    inputText: {
        color: 'white',
    },
    inputContainer: {
        borderBottomWidth: 0, 
        borderWidth: 2,
        borderRadius: 100,
        paddingHorizontal: 10,
    },
    SocialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});