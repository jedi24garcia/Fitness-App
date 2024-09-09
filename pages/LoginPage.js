import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { SocialIcon, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import '../Firebaseconfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const EntryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const auth = getAuth();
    
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('User signed in with email:', user.email);
            navigation.navigate('Week');
        })
        .catch((error) => Alert.alert(error.message));
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <Text style={styles.authenticate}>Email Address</Text>
                    <Input
                        placeholder="Type email address here"
                        value={email}
                        onChangeText={setEmail}
                        leftIcon={<Icon name="envelope" size={24} color="white" />}
                        inputStyle={styles.inputText}
                        inputContainerStyle={styles.inputContainer}
                        placeholderTextColor="white"
                    />

                    <Text style={styles.authenticate}>Password</Text>
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
        </ScrollView>
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
});
