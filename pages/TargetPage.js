import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const BodyTarget = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.introText}>HIT YOUR DESIRED TARGET AREA</Text>
            <View style={styles.viewImage}>
                <Image style={styles.img} source={require('../images/bodytransformed.webp')} />
                <TouchableOpacity style={styles.armButton} onPress={() => navigation.navigate('Train')}>
                    <Text style={styles.authenticate}>Arms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chestButton} onPress={() => navigation.navigate('Train')}>
                    <Text style={styles.authenticate}>Chest</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bellyButton} onPress={() => navigation.navigate('Train')}>
                    <Text style={styles.authenticate}>Belly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.legButton} onPress={() => navigation.navigate('Train')}>
                    <Text style={styles.authenticate}>Legs</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BodyTarget;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#004D74',
        padding: 20,
    },
    introText: {
        marginBottom: 20,
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: 'white',
    },
    viewImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    armButton: {
        position: 'absolute',
        top: '25%',
        left: '70%',
        backgroundColor: '#00d3ff',
        borderRadius: 20,
        height: 60,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chestButton: {
        position: 'absolute',
        top: '30%',
        right: '40%',
        backgroundColor: '#00d3ff',
        borderRadius: 20,
        height: 60,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellyButton: {
        position: 'absolute',
        top: '50%',
        right: '30%',
        backgroundColor: '#00d3ff',
        borderRadius: 20,
        height: 60,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },    
    legButton: {
        position: 'absolute',
        top: '70%',
        right: '30%',
        backgroundColor: '#00d3ff',
        borderRadius: 20,
        height: 60,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});