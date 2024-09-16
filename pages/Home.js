import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RNCamera } from 'react-native-camera';

// import LoadingView from '../components/LoadingView';

const Tab = createBottomTabNavigator();

function GamificationScreen() {
    return (
        <View style={styles.pageContainer}>
            <Text>Gamification</Text>
        </View>
    );
};

const PersonalProfile = () => {
  const navigation = useNavigation();
  const cameraRef = useRef(null);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const onTorchPress = () => {
    setFlashMode(
        flashMode === RNCamera.Constants.FlashMode.off
          ? RNCamera.Constants.FlashMode.on
          : RNCamera.Constants.FlashMode.off
      );
    };

    const changeCameraType = () => {
        setCameraType(
          cameraType === RNCamera.Constants.Type.back
            ? RNCamera.Constants.Type.front
            : RNCamera.Constants.Type.back
        );
      };

      const takePicture = async () => {
        if (cameraRef.current) {
          const options = { quality: 0.5, base64: true };
          const data = await cameraRef.current.takePictureAsync(options);
          console.log(data.uri); // Picture URI
        }
      };
    
      const startRecordingVideo = async () => {
        if (cameraRef.current) {
          setRecording(true);
          const promise = cameraRef.current.recordAsync();
          setSeconds(0);
    
          if (promise) {
            const data = await promise;
            console.log(data.uri); // Video URI
            setRecording(false);
          }
        }
      };
    
      const stopRecordingVideo = () => {
        if (cameraRef.current && recording) {
          cameraRef.current.stopRecording();
          setRecording(false);
        }
      };

  return (
    <SafeAreaView style={styles.container}>
        <RNCamera
            ref={cameraRef}
            style={styles.camera}
            type={cameraType}
            flashMode={flashMode}
            captureAudio={true}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              source={require('../images/gym.jpg')}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          {recording && (
            <View style={styles.timer}>
              <Text style={styles.timerText}>Recording: {seconds}s</Text>
            </View>
          )}
          {cameraType === RNCamera.Constants.Type.back && (
            <TouchableOpacity onPress={onTorchPress}>
              <Image
                source={require('../images/gym.jpg')}
                style={styles.torchIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.captureContainer}>
          <TouchableOpacity
            onPress={takePicture}
            onLongPress={startRecordingVideo}
            onPressOut={stopRecordingVideo}
            style={[
              styles.captureButton,
              recording ? styles.captureButtonInProgress : null,
            ]}
          />
          <TouchableOpacity onPress={changeCameraType} disabled={recording}>
            <Image
              source={require('../images/gym.jpg')}
              style={styles.switchCameraIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Hold for video, tap for photo</Text>
        </View>
      </RNCamera>
    </SafeAreaView>
  );
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