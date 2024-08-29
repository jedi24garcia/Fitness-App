import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TeenPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.labelBox}>
                <Text style={styles.authenticate}>Monday</Text>
            </View>
        </View>
    );
};

export default TeenPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#083236',
        padding: 20,
    },
    authenticate: {
        padding: 10,
        textAlign: 'center',
        color: 'white',
    },
    labelBox: {
        backgroundColor: '#00d3ff',
        borderRadius: 100,
        width: '70%',
        marginTop: 70,
        padding: 15,
        alignSelf: 'center',
    }
});