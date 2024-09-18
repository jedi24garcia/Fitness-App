import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { DatabaseConnection } from '../database/Database';
import AuthenticateButton from '../components/AuthenticateButton';
import '../Firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const db = DatabaseConnection.getConnection();

const SignUpPage = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const auth = getAuth();

    useEffect(() => {
        DatabaseConnection.createTable(); // Use createTable from DatabaseConnection
    }, []);

    const addUserToLocalDB = () => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO users (email, password) VALUES (?, ?);',
                [email, password],
                (_, result) => {
                    console.log('User data successfully inserted into local database');
                    navigation.navigate('Entry');
                },
                (_, error) => {
                    console.error('Error inserting user data', error);
                }
            );
        });
    };

    const createUser = () => {
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('User signed up with email:', user.email);
                Alert.alert('Successfully Signed Up');
                // If sign-up is successful, you might not need to add user to local DB
                navigation.navigate('Entry');
            })
            .catch(error => {
                console.error('Sign up error:', error.message);
                // Save user to local database if Firebase sign-up fails
                addUserToLocalDB();
            });
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.signContent}>
                    <Text style={styles.SignUpFont}>Create Account</Text>
                </View>
                <View>
                    <Text style={styles.fonts}>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your name"
                        placeholderTextColor={"#aaa"}
                    />
                </View>
                <View>
                    <Text style={styles.fonts}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your email"
                        placeholderTextColor={"#aaa"}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <Text style={styles.fonts}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter your password"
                        placeholderTextColor={"#aaa"}
                        secureTextEntry
                    />
                </View>
                <View>
                    <Text style={styles.fonts}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        placeholder="Please confirm password"
                        placeholderTextColor={"#aaa"}
                        secureTextEntry
                    />
                </View>
                <AuthenticateButton onPress={createUser} title="Create Account" />
            </ScrollView>
        </View>
    );
};

export default SignUpPage;

const styles = StyleSheet.create({
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