import React from 'react';
import { StyleSheet, Text } from 'react-native';

const SignUpPage = () => {
    return (
        <View styles={style.container}>
            <Text>Create Account</Text>
        </View>
    );
};

export default SignUpPage;

const style = StyleSheet.create ({
    container: {
        flex: 1,
        bbackgroundColor: '#083236',
    },
})