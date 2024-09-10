import React from 'react';
import { View, StyleSheet } from 'react-native';

const ImageContainer = ({ children }) => {
    return <View style={styles.imageContainerText}>{children}</View>;
};

const styles = StyleSheet.create({
    imageContainerText: {
        alignItems: 'center',
    },
});

export default ImageContainer;