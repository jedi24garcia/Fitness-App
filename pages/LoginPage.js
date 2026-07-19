import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Platform, ActivityIndicator, KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from 'expo/vector-icons';

// import { SocialIcon, Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import Authenticate from '../components/AuthenticateText';
// import AuthenticateButton from '../components/AuthenticateButton';

// import '../Firebaseconfig';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
    const { signIn } = useAuth();
    const insets = useSafeAreaInsets();
    const [ email, setEmail ] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    
    const webTop = Platform.OS === 'web' ? 67 : 0;
    const webBottom = Platform.OS === 'web' ? 34 : 0;
    
    const signInUser = async () => {
        if (!email.trim() || !password) {
            Alert.alert('Missing fields', 'Please enter your email and password.');
        return;
        }
        setLoading(true);
        try {
            await signIn(email.trim(), password) 
            router.replace('/tabs');
            } catch (err) {
                Alert.alert('Login failed', err.message ?? 'Something went wrong');
            } finally {
                setLoading(false);
            }
    };

    return (
        <ImageBackground
            source={require('@/assets/images/mainbg.webp')} 
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.darkOverlay} />
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
                    showsVerticalScrollIndicator="false"
                >                
                    <TouchOpacity style={styles.backBtn} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#00CED1" />           
                    </TouchOpacity>
                
                    <View style={styles.header}>
                        <Text style={styles.title}>Welcome Back</Text>
                        <Text style={styles.subtitle}>Sign in to continue training</Text>
                    </View>
   
                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={styles.inputRow}>
                                <Ionicons name="mail-outline" size={20} color="#888" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="your@email.com"
                                    placeholderTextColor="#555"
                                    value={email}
                                    onChangeText={setEmail}
                                    secureTextEntry="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputRow}>
                                <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.InputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Your password"
                                    placeholderTextColor="#555"
                                    value={password}
                                    onChangeText={setPassword}
                                    keyboardType={!showPassword}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
                                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#888" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={[styles.primaryBtn, loading && styles.disabled]}
                            onPress={signUser}
                            disabled={loading}
                            activeOpacity={0.8}
                        >
                            {loading ? (
                                <ActivityIndicator color="#000" />
                            ) : (
                                <Text style={styles.primaryBtnText}>Sign In</Text>
                            )}
                        </TouchableOpacity>

                        <View style={styles.divider}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>Don't have an account?</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        <TouchableOpacity
                            style={styles.secondaryBtn}
                            onPress={() => router.replace('/signup')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.secondaryBtnText}>Create Account</Text>
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
    darkOverlay: {
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
        marginBottom: 36,
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
    eyeBtn: {
        padding: 4,
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
