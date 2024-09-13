import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

const BackgroundImage = ({ children, source }) => {
    return (
        <ImageBackground
            source={source}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                {children}
            </View>
        </ImageBackground>
    );
};

export default BackgroundImage;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }
});