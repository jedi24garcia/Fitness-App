import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Authenticate = ({ text }) => {
    return (
        <View>
            <Text style={styles.authenticateFont}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    authenticateFont: {
        padding: 10,
        textAlign: 'center',
        color: '#00CED1',
    },
});

export default Authenticate;