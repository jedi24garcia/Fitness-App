import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCameraDevices, Camera } from 'react-native-vision-camera';

import LoadingView from '../components/LoadingView';

const Tab = createBottomTabNavigator();

function GamificationScreen() {
    return (
        <View style={styles.pageContainer}>
            <Text>Gamification</Text>
        </View>
    );
};

const CameraScreen = () => {
    const camera = useRef(null);
    const devices = useCameraDevices("wide-angle-camera");
    console.log(devices);
    const device = devices.back; // Get the back camera device

    const [cameraReady, setCameraReady] = useState(false);
  
    const handleCameraReady = () => {
      setCameraReady(true);
    };
  
    const takePicture = async () => {
      if (device && cameraReady) {
        try {
          const photo = await device.takePhoto({
            qualityPrioritization: 'speed',
            skipMetadata: true,
          });
          console.log(photo.uri);
          Alert.alert('Picture taken', `Picture saved at: ${photo.uri}`);
        } catch (error) {
          console.error(error);
          Alert.alert('Error', 'Could not take picture');
        }
      } else {
        Alert.alert('Camera not ready', 'Please wait until the camera is ready');
      }
    };
  
    if (device == null) return <LoadingView />;
  
    return (
      <View style={styles.pageContainer}>
        <Camera
            ref={camera}
            device={device}
            isActive={true}
            style={StyleSheet.absoluteFill}
        /> 
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Text style={styles.captureText}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
function PersonalProfile () {
    return (
            <View style={styles.pageContainer}>
            <CameraScreen />
        </View>
    )
};

function HomeContent({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.introText}>CALISTHENICS PLAN FOR ALL AGES</Text>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                            <Image style={styles.fitnessImage} source={require('../images/18-35.jpeg')} />
                            <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Youth/Adult')}>
                                <Text style={styles.authenticate}>18-35</Text> 
                            </TouchableOpacity>
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                            <Image style={styles.fitnessImage} source={require('../images/36-45.webp')} />     
                            <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Adults')}>
                                <Text style={styles.authenticate}>36-45</Text>
                            </TouchableOpacity> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                            <Image style={styles.fitnessImage} source={require('../images/46-55.jpg')} />
                            <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Adults')}>
                                <Text style={styles.authenticate}>46-55</Text>
                            </TouchableOpacity> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Target')}>
                            <Image style={styles.fitnessImage} source={require('../images/55+.jpg')} />
                            <TouchableOpacity style={styles.authenticateButton} onPress={() => Alert.alert('Adult/Senior')}>
                                <Text style={styles.authenticate}>55+</Text>
                            </TouchableOpacity> 
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>    
    );
};

export default function HomePage() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Main" component={HomeContent} />
            <Tab.Screen name="Gamification" component={GamificationScreen} />
            <Tab.Screen name="Profile" component={PersonalProfile} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20,
        justifyContent: 'center',
    },
    introText: {
        marginBottom: 20,
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: '#00CED1',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    authenticate: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    fitnessImage: {
        width: 170,
        height: 250, 
        borderRadius: 150 / 2,
        marginBottom: 10,
    },
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        width: '45%',
    },
    authenticateButton: {
        backgroundColor: '#7E7C7C',
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#a9a9a9",
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 