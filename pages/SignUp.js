import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Alert } from 'react-native';

import { DatabaseConnection } from '../database/Database';  // imports the SQLite database connection

import Authenticate from '../components/AuthenticateText';
import AuthenticateButton from '../components/AuthenticateButton';

import '../Firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // This is the Firebase Authentication functions

const db = DatabaseConnection.getConnection();
const SignUpPage = ({ navigation }) => {
    // Lines below are store variables to store user input data
    const [name, setName] = React.useState(''); 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const auth = getAuth();

    // This function is to add user to the local SQLite database
    const add_user = () => {
        db.transaction(function (tx) {
            tx.executeSql(
                "INSERT INTO table_user(user_name, user_address)VALUES(?, ?)",
                [name, email, password, confirmPassword],
                (tx, results) => {
                    console.log("User data successfully inserted into local database");
                    navigation.navigate('Entry');
                }
            );
        });
    };

    // This function is to create a new user account using the Firebase authentication
    const createUser = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Below uses Firebase's createUserWithEmailAndPassword to create a new user
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('User sign in with email:', user.email)
            Alert.alert('Successfull Signed Up')
            
            add_user();

        }).catch(error=>alert(error.message));
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.signContent}>
                    <Text style={styles.SignUpFont}>Create Account</Text>
                </View>
                <View>
                    <Text style={styles.fonts}>Name</Text>
                    <TextInput style={styles.input} onChangeText={newText => setName(newText)} value={name} placeholder="Enter your name" placeholderTextColor={"#aaa"} />
                </View>
                <View>
                    <Text style={styles.fonts}>Email</Text>
                    <TextInput style={styles.input} onChangeText={newText => setEmail(newText)} value={email} placeholder="Enter you email" placeholderTextColor={"#aaa"} keyboardType="emailaddress" autoCapitalize="none" />
                </View>
                <View>
                    <Text style={styles.fonts}>Password</Text>
                    <TextInput style={styles.input} onChangeText={newText => setPassword(newText)} value={password} placeholder="Enter your password" placeholderTextColor={"#aaa"} secureTextEntry />
                </View>
                <View>
                    <Text style={styles.fonts}>Confirm Password</Text>
                    <TextInput style={styles.input} onChangeText={newText => setConfirmPassword(newText)} value={confirmPassword} placeholder="Please confirm password" placeholderTextColor={"#aaa"} secureTextEntry />
                </View>
                <AuthenticateButton onPress={createUser} title="Create Account" />
            </ScrollView>
        </View>
    );
};

export default SignUpPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    signContent: {
        marginBottom: 20,
    },
    SignUpFont: {
        color: '#00d3ff',
        textAlign: 'center',
        padding: 20,
        fontSize: 30,
        marginBottom: 40,
    },
    fonts: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
    },
    input: {
        textAlign: 'center',
        color: 'white',
        height: 50,
        margin: 12,
        borderWidth: 5,
        borderColor: '#7E7C7C',
        borderRadius: 100, 
        paddingHorizontal: 20,
    },
});