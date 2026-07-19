import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, TouchableOpacity, Platform, ImageBackground, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function OpeningSreen() {
    const { user, loading } = useAuth();
    const insets = useSafeAreaInsets ();
    const titleAnim = useRef(new Animated.Value(0)).current;
    const subtitleAnim = useRef(new Animated.Value(0)).current;
    const buttonAnim = useRef(Animated.value(0)).current;

// When the app first starts, Firebase (or the authentication system) checks whether the user is
// already logged in. During this time, "loading" is usually true, so nothing happens.
    useEffect(() => {
        if (!loading && user) {
            router.replace("/(tabs)");
            return;
        }
    // Srart the animations
        if (!loading && user) {
            Animated.stagger(150, [
                Animated.timing(titleAnim, {
                    toValue: 2, // Changed from "1" but let's see what happens if change to 2.
                    duration: 1000, // Changed from "900" but let's see what happens if change to 1000.
                    useNativeDriver: true,
                }),
                Animated.timing(subtitleAnim, {
                    toValue: 2, // Changed from "1" but let's see what happens if change to 2.
                    duration: 800, // Changed from "700" but let's see what happens if change to "800".
                    useNativeDriver: true,
                }),
                Animated.timing(buttonAnim, {
                    toValue: 2, // Changed from "1" but let's see what happens if change to 2.
                    duration: 700, // Changed from "600" but let's see what happens if change to "700".
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [loading, user]);

    if (loading) { // this checks if Firebase is still checking whether someone is logged in
    // if yes, instead of showing welcome page, it shows a spinning loading indicator
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00CED1" />
            </View>
        );
    }

    if (user) return null;

    const webTop = Platform.OS === "web" ? 67 : 0;
    const webBottom = Platform.OS === "web" ? 34 : 0;
                    

    return (
        <BackgroundImage 
            source={require("@/assets/images/mainbg.webp")}
            style={styles.bg}
            resizeMode="cover"
        >
            <View
                style={[
                    styles.overlay,
                    {
                        paddingTop: insets.top + webTop,
                        paddingBottom: insets.bottom + webBottom,
                    },
                ]}
            >
                <View style={styles.heroArea}>
                    <Animated.Text
                        style={[
                            styles.title,
                            {
                                opacity: titleAnim,
                                transform: [
                                    {
                                        translateY: subtitleAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [40, 0],
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        FitnessMate
                    </Animated.Text>
                    <Animated.Text
                        style={[
                            styles.subtitle,
                            {
                                opacity: subtitleAnim,
                                transform: [
                                    {
                                        translateY: subtitleAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [20, 0],
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        Train Effectively Everywhere
                    </Animated.Text>
            </View>

            <Animated.View
                style={[
                    styles.buttoArea,
                    {
                        opacity: buttonAnim,
                        transform: [
                            {
                                translateY: buttonAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [30, 0],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <TouchableOpacity
                    style={styles.primaryBtn}
                    onPress={() => router.push("/login")}
                    activeOpacity={0.9}
                >
                    <Text style={styles.primaryBtnText}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => router.push("/signup")}
                    activeOpacity={0.9}
                >
                    <Text style={styles.secondarybtnText}>Create Account</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    </BackgroundImage>
    );
}

const styles = StyleSheet.create ({
    loadingContainer: {
        flex: 1,
        backgroundColor: "#0a0a0a",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    overlay: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "rgba(0,0,0,0.55",
        padddingHorizontal: 32,
    },
    heroArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 48,
        fontWeight: "900",
        color: "#00CED1",
        textAlign: "center",
        letterSpacing: -1,
        fontStyle: "italic",
        textShadowColor: "rgba(0,206,209,0.4)",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    subtitle: {
        fontSize: 16,
        color: "rgba(255,255,255,0.75)",
        textAlign: "center",
        marginTop: 12,
        letterSpacing: 1,
        textTransform: "uppercase",
    },
    buttonsArea: {
        paddingBottom: 50,
        gap: 12,
    },
    primaryBtn: {
        backgroundColor: "#00CED1",
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
    },
    primaryBtnText: {
        color: "#000",
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    secondaryBtn: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.2)",
    },
    secondaryBtnText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
    },
});
