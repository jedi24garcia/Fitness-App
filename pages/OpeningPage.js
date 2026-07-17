import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, TouchableOpacity, Platform, ImageBackground, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { addons } from 'react-native';

export default function OpeningSreen() {
    const { user, loading } useAuth();
    const insets = useSafeAreaInsets ();
    const titleAnim = useRef(new Animated.Value(0)).current;
    const subtitleAnim = useRef(new.Animated.Value(0)).current;
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
        <BackgroundImage source={require("@/assets/images/mainbg.webp")}
            style{styles.bg}
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
                <ExpandingDot 
                    data={[1, 2]} 
                    scrollX={scrollX} 
                    expandingDotWidth={30} 
                    inActiveDotColor='rgba(255, 255, 255, 0.6)'
                    dotStyle={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#347af0',
                        borderRadius: 5,
                        marginHorizontal: 5,
                    }}
                    containerStyle={{
                        position: 'absolute',
                        bottom: 30,
                    }} 
                />
        </BackgroundImage>
    );
};

export default OpenPage;

const styles = StyleSheet.create ({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
    },
    introText: {
        marginTop: '100%',
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: '#00CED1',
    },
    fitnessImage: {
        width: 370,
        height: 350,
        borderRadius: 10,  
    },
});
