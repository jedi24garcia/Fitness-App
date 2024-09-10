import { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OpenPage from './pages/OpeningPage';
import EntryPage from './pages/LoginPage';
import SignUpPage from './pages/SignUp';
import HomePage from './pages/Home';
import BodyTarget from './pages/TargetPage';
import ArmTraining from './pages/Training/ArmPage';
import ChestTraining from './pages/Training/ChestPage';
import CoreTraining from './pages/Training/CorePage';
import LegTraining from './pages/Training/LegsPage';

import { getAuth, signOut } from 'firebase/auth'; // logout functionality from firebase

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      console.log("User signed out");
      setIsAuthenticated(false);
    })
    .catch(error => Alert.alert(error.message));
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Target" component={BodyTarget} />
      <Drawer.Screen name="Arms" component={ArmTraining} />
      <Drawer.Screen name="Chest" component={ChestTraining} />
      <Drawer.Screen name="Core" component={CoreTraining} />
      <Drawer.Screen name="Leg" component={LegTraining} />
      <Drawer.Screen name="Logout" options={{ drawerLabel: 'Logout' }}>
        {() => (
          <View style={{ flex: 1, JustifyContent: 'center', alignItems: 'center' }}>
            <Text>Are you sure you want to logout?</Text>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        )}
      </Drawer.Screen> 
    </Drawer.Navigator>
  );
};


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {
        isAuthenticated ? (
          <DrawerNavigator setIsAuthenticated={setIsAuthenticated} /> //  Pass setIsAuthenticated to DrawerNavigator
        ) : (
          <Stack.Navigator initialRouteName='Opening'>
            <Stack.Screen name="Opening" component={OpenPage} />
            <Stack.Screen name="Entry">
              {props => <EntryPage {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Sign">
              {props => <SignUpPage {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
};

export default App;