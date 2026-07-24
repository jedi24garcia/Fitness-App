import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, ImageBackground, ActivityIndicator } from 'react-native';

// import { DatabaseConnection } from '../database/Database';  // imports the SQLite database connection
// import { router } from 'expo-router';
// import { useAuth } from '../contexts/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// import Authenticate from '../components/AuthenticateText';
// import AuthenticateButton from '../components/AuthenticateButton';

// import '../Firebaseconfig';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // This is the Firebase Authentication functions

export default function SignUpPage({ navigation }) {
    // const db = DatabaseConnection.getConnection();
    // const { signUp } = useAuth();
        // Lines below are store variables to store user input data
    const insets = useSafeAreaInsets();
    const [name, setName] = React.useState(''); 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false); 

    const webTop = Platform.OS === 'web' ? 67 : 0;
    const webBottom = Platform.OS === 'web' ? 34 : 0;

    // // This function is to add user to the local SQLite database
    // const add_user = () => {
    //     db.transaction(function (tx) {
    //         tx.executeSql(
    //             "INSERT INTO table_user(user_name, user_address)VALUES(?, ?)",
    //             [name, email, password, confirmPassword],
    //             (tx, results) => {
    //                 console.log("User data successfully inserted into local database");
    //                 navigation.navigate('Entry');
    //             }
    //         );
    //     });
    // };

    const handleSignup = async () => {
        if (!name.trim() || !email.trim() || !password || !confirmPassword) {
            Alert.alert('Missing fields', 'Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Password mismatch', 'Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            Alert.alert('Weak password', 'Password must be at least 6 characters long.');
            return
        }
        setLoading(true);
        try {
            await signUp(email.trim(), password);
            router.replace('/(tabs)');
        } catch (err) {
            Alert.alert('Sign up failed', err.message ?? 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground
            source={require('../images/mainbg.webp')}
            style={styles.bg}
            resizeModel="cover"
        >
            <View style={styles.darkOverLay} />
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS == 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={[
                        styles.scroll,
                        { paddingTop: insets.top + webTop + 20, paddingBottom: insets.bottom + webBottom + 40},
                    ]}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#00CED1" />
                    </TouchableOpacity>

                    <View style={styles.header}>
                        <Text style={styles.title}>Create Account</Text>
                        <Text style={styles.subtitle}>Start your fitness journey today</Text>
                    </View>

                    <View style={styles.form}>
                        {[
                            { label: 'Full Name', icon: 'person-outline', value: name, setter: setName, placeholder: 'Your name', keyboard: 'default', secure: false, cap: 'words' },
                            { label: 'Email Address', icon: 'mail-outline', value: email, setter: setEmail, placeholder: 'your@email.com', keyboard: 'email-address', secure: false, cap: 'none' },
                            { label: 'Password', icon: 'lock-closed-outline', value: password, setter: setPassword, placeholder: 'At least 6 characters', keyboard: 'default', secure: true, cap: 'none' },
                            { label: 'Confirm Password', icon: 'shield-checkmark-outline', value: confirmPassword, setter: setConfirmPassword, placeholder: 'Repeat your password', keyboard: 'default', secure: true, cap: 'none' },
                        ].map((field) => (
                            <View style={styles.inputGroup} key={field.label}>
                                <Text style={styles.label}>{field.label}</Text>
                                <View style={styles.inputRow}>
                                <Ionicons name={field.icon} size={20} color="#888" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder={field.placeholder}
                                    placeholderTextColor="#555"
                                    value={field.value}
                                    onChangeText={field.setter}
                                    keyboardType={field.keyboard}
                                    autoCapitalize={field.cap}
                                    autoCorrect={false}
                                    secureTextEntry={field.secure}
                                />
                                </View>
                            </View>
                        ))}

                        <TouchableOpacity
                            style={[styles.primaryBtn, loading && styles.disabled]}
                            onPress={handleSignup}
                            disabled={loading}
                            activeOpacity={0.8}
                        >
                            {loading ? (
                                <ActivityIndicator color="#000" />
                            ) : (
                                <Text style={styles.primaryBtnText}>Create Account</Text>
                            )}
                        </TouchableOpacity>

                        <View style={styles.divider}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>Already have account?</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        <TouchableOpacity
                            style={styles.secondaryBtn}
                            onPress={() => navigation.navigate("Login")}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.secondaryBtnText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    flex: { flex: 1 },
    bg: { flex: 1, width: '100%', height: '100%' },
    darkOverLay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
    scroll: {
        flexGrow: 1,
        paddingHorizontal: 28,
    },
    backBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginBottom: 20,
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 15,
        color: '#888',
        marginTop: 6,
    },
    form: {
        gap: 16,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 13,
        color: '#aaa',
        fontWeight: '500',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#2a2a2a',
        paddingHorizontal: 14,
        height: 52,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        height: '100%',
    },
    primaryBtn: {
        backgroundColor: '#00CED1',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    disabled: {
        opacity: 0.6,
    },
    primaryBtnText: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginVertical: 4,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#2a2a2a',
    },
    dividerText: {
        color: '#666',
        fontSize: 13,
    },
    secondaryBtn: {
        backgroundColor: 'transparent',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2a2a2a',
    },
    secondaryBtnText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    });
