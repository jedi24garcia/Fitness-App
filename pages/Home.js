import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import AuthenticateButton from '../components/AuthenticateButton';

const Tab = createBottomTabNavigator();

function GamificationScreen() {
    return (
        <View style={styles.pageContainer}>
            <Text>Gamification</Text>
        </View>
    );
};

const PersonalProfile = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await saveImageToDisk(uri); // Save the image immediately after picking
    } else {
      Alert.alert('Error', 'No image selected.'); // Alert if no image is selected
    }
  };

  const saveImageToDisk = async (uri) => {
    try {
      if (!uri) {
        Alert.alert('Error', 'No image URI provided.');
        return;
      }

      // Request permission to access media library
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Error', 'Permission to access media library denied.');
        return;
      }

      const fileName = uri.split('/').pop();
      const newPath = FileSystem.documentDirectory + fileName;

      await FileSystem.copyAsync({
        from: uri,
        to: newPath,
      });

      // Save image to the camera roll
      await MediaLibrary.saveToLibraryAsync(newPath);

      Alert.alert('Success', 'Image saved to camera roll!');
    } catch (error) {
      console.error('Error saving image:', error);
      Alert.alert('Error', 'Failed to save image. Please try again.');
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("You've refused to allow this app to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await saveImageToDisk(uri); // Save the captured image to the camera roll
    } else {
      Alert.alert('Error', 'No image captured.');
    }
  };

  return (
    <View style={styles.container}>
      <AuthenticateButton title="Take a photo" onPress={openCamera} />
      <AuthenticateButton title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

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