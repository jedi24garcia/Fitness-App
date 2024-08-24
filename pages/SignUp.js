import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const SignUpPage = () => {
    const [text, newText] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.signContent}>
                <Text style={styles.SignUpFont}>Create Account</Text>
            </View>
            <View>
                <Text style={styles.fonts}>Name</Text>
                <TextInput style={styles.input} onChangeText={newText => (newText)} value={text} />
            </View>
            <View>
                <Text style={styles.fonts}>Email</Text>
                <TextInput style={styles.input} onChangeText={newText => (newText)} value={text} />
            </View>
            <View>
                <Text style={styles.fonts}>Password</Text>
                <TextInput style={styles.input} onChangeText={newText => (newText)} value={text} />
            </View>
            <View>
                <Text style={styles.fonts}>Confirm Password</Text>
                <TextInput style={styles.input} onChangeText={newText => (newText)} value={text} />
            </View>
        </View>
    );
};

export default SignUpPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#083236',
        padding: 100,
    },
    signContent: {
        marginBottom: 20,
    },
    SignUpFont: {
        color: '#00d3ff',
        textAlign: 'center',
        fontSize: 30,
    },
    fonts: {
        textAlign: 'center',
    },
    input: {
        textAlign: 'center',
        color: 'white',
        height: 50,
        margin: 12,
        borderWidth: 5,
        borderRadius: 100, 
    },
})