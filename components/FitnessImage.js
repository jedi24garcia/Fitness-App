import React from "react";
import { View, Image, StyleSheet } from "react-native";

const FitnessImageView = ({ source }) => {
    return (
        <View>
            <Image style={styles.fitnessImage} source={source} />
        </View>
    );
};

const styles = StyleSheet.create({
    fitnessImage: {
        width: 170,
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
});

export default FitnessImageView;