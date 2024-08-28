import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Video from 'react-native-video';

const MondayPage = () => {
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: 'android.resource://video/SampleVideo.mp4'}}
                style={styles.video}
                controls={true}
                resizeMode='contain'
            />
            <View style={styles.labelBox}>
                <Text style={styles.authenticate}>Monday</Text>
            </View>
        </View>
    );
};

export default MondayPage;

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
    },
    video: {
        height: 300,
        width: '100%',
        marginBottom: 20,
    }
});