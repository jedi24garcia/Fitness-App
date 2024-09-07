import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { DatabaseConnection } from '../database/Database';

import '../Firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const db = DatabaseConnection.getConnection();
const SignUpPage = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const auth = getAuth();

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

    const createUser = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('User sign in with email:', user.email)
            
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
                    <TextInput style={styles.input} onChangeText={newText => setName(newText)} value={name} placeholder="Enter your name" placeholderTextcolor={"#aaa"} />
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
                <View style={styles.authenticateButton}>
                    <TouchableOpacity onPress={createUser}>
                        <Text style={styles.authenticate}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default SignUpPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#004D74',
        padding: 20,
        justifyContent: 'center',
    },
    signContent: {
        marginBottom: 20,
    },
    SignUpFont: {
        color: '#00d3ff',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 40,
    },
    fonts: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 8,
    },
    input: {
        textAlign: 'center',
        color: 'white',
        height: 50,
        margin: 12,
        borderWidth: 5,
        borderColor: '#00d3ff',
        borderRadius: 100, 
        paddingHorizontal: 20,
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
})