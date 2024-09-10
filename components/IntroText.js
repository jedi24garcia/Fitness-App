import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FontIntroText = ({ text }) => {
    return (
        <View>
            <Text style={styles.fontText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fontText: {
        marginBottom: 20,
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: '#00CED1',
    },
});

export default FontIntroText;