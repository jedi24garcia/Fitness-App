import React from 'react';
import { View, StyleSheet } from 'react-native';

const FitnessRow = ({ children }) => {
    return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});

export default FitnessRow;