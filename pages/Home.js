import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker'; // for function PersonalProfile
import * as FileSystem from 'expo-file-system'; // to save image to camera roll
import * as MediaLibrary from 'expo-media-library'; // to access camera roll
import { ProgressBar } from 'react-native-paper'; // for function Gamification

import AuthenticateButton from '../components/AuthenticateButton';

const Tab = createBottomTabNavigator();

// This function is for the Gamification Tab
function GamificationScreen() {
  // State to track progress, points, and badges
  const [progress, setProgress] = useState(0.1);  // Example: 60% progress
  const [points, setPoints] = useState(0);  // The user starts with 0 points
  const [badges, setBadges] = useState([ // List of badges with status (earned or not)
      { id: 1, name: 'Beginner Badge', earned: true },
      { id: 2, name: 'Intermediate Badge', earned: false },
      { id: 3, name: 'Advanced Badge', earned: false }
  ]);

  // This function below details how to increment points
  const addPoints = () => {
      const newPoints = points + 100; // Add 100 points for demonstration
      setPoints(newPoints); // This updates the points state
      updateProgress(newPoints); // This updates the progress
      checkForBadges(newPoints);  // Check if a new badge should be awarded
  };

  const updateProgress = (newPoints) => {
    const maxPoints = 5000;  // Set the max points for full progress
    const newProgress = newPoints / maxPoints;  // Calculate progress as a fraction
    setProgress(newProgress);  // Update progress state
  };

  // This function is to check if new badges should be awarded or if the user should earn badges based on their points
  const checkForBadges = (newPoints) => {
      const updatedBadges = badges.map(badge => {
          if (newPoints >= 2000 && badge.id === 2) {
              return { ...badge, earned: true };  // Earn intermediate badge
          } else if (newPoints >= 5000 && badge.id === 3) {
              return { ...badge, earned: true };  // Earn advanced badge
          }
          return badge;
      });
      setBadges(updatedBadges); // Updates the badge state
  };

  // This renders the progress, points, and badges UI of the the gamification
  return (
    <View style={styles.pageContainer}>
        <Text style={styles.introText}>Rewards</Text>

        <Text style={styles.pointsText}>Points: {points}</Text>
        <ProgressBar style={styles.progressBarView} progress={progress} color="#00CED1" />
        <Text>Progress: {Math.round(progress * 100)}%</Text>

        <View>
            <Text style={styles.badgeHeader}>Badges:</Text>
            {badges.map(badge => (
                <Text key={badge.id} style={{ color: badge.earned ? 'green' : 'grey' }}>
                    {badge.name} {badge.earned ? '(Earned)' : '(Not Earned)'}
                </Text>
            ))}
        </View>

        <TouchableOpacity style={styles.authenticateButton} onPress={addPoints}>
            <Text style={styles.authenticate}>Earn 100 Points</Text>
        </TouchableOpacity>
    </View>
);
};

// This function is for the Personal Profile tab where users can take a photo or an image
const PersonalProfile = () => {
  const [image, setImage] = useState(null);

  // This function is to pick an image from the device's gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Did "All" because I wanted any media type (photo, video, etc)
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri; // Get the URI of the selected image
      setImage(uri);
      await saveImageToDisk(uri); // This saves the image immediately after picking
    } else {
      Alert.alert('Error', 'No image selected.'); // Alert if no image is selected
    }
  };

  // This function is to save the image to the device's file system and camera roll
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

      const fileName = uri.split('/').pop(); // Get the file name from the URI
      const newPath = FileSystem.documentDirectory + fileName; // Define a new path in the local file system

      await FileSystem.copyAsync({
        from: uri,
        to: newPath,
      });

      // Save image to the camera roll
      await MediaLibrary.saveToLibraryAsync(newPath);

      Alert.alert('Success', 'Image saved to camera roll!'); // This show success alert if image is saved to camera roll
    } catch (error) {
      console.error('Error saving image:', error);
      Alert.alert('Error', 'Failed to save image. Please try again.');
    }
  };

  // This function is to open the device's camera and take a picture
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("You've refused to allow this app to access your camera!");
      return;
    }
  
    // Editing of the captured image
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri; // This gets the URI of the captured image
      setImage(uri); // updates the image state
      await saveImageToDisk(uri); // Save the captured image to the camera roll
    } else {
      Alert.alert('Error', 'No image captured.');
    }
  };

  // This renders the UI buttons to take photo or pick an image and display the selected/captured image
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
    progressBarView: {
      width: '80%',  
      backgroundColor: '#7E7C7C',
      borderRadius: 5,
      height: 20,
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