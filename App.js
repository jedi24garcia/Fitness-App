import { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OpeningScreen from './pages/OpeningPage';
import LoginScreen from './pages/LoginPage';
import SignUpPage from './pages/SignUp';

import HomePage from './pages/Home';
import BodyTarget from './pages/TargetPage';
import ArmTraining from './pages/Training/ArmPage';
import ChestTraining from './pages/Training/ChestPage';
import CoreTraining from './pages/Training/CorePage';
import LegTraining from './pages/Training/LegsPage';

import AuthenticateButton from './components/AuthenticateButton';
import BackgroundImage from './components/MainBackground';

// Firebase logout later
// import { getAuth, signOut } from 'firebase/auth';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const B = ({ children }) => (
    <Text style={{ fontWeight: 'bold' }}>
        {children}
    </Text>
);


const DrawerNavigator = ({ setIsAuthenticated }) => {

    const handleLogout = () => {

        // Uncomment when Firebase is connected

        /*
        const auth = getAuth();

        signOut(auth)
        .then(() => {
            console.log("User signed out");
            setIsAuthenticated(false);
        })
        .catch(error => {
            Alert.alert(error.message);
        });
        */


        // Temporary logout
        setIsAuthenticated(false);
    };


    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >

            <Drawer.Screen 
                name="Home" 
                component={HomePage} 
            />

            <Drawer.Screen 
                name="Target" 
                component={BodyTarget} 
            />

            <Drawer.Screen 
                name="Arms" 
                component={ArmTraining} 
            />

            <Drawer.Screen 
                name="Chest" 
                component={ChestTraining} 
            />

            <Drawer.Screen 
                name="Core" 
                component={CoreTraining} 
            />

            <Drawer.Screen 
                name="Legs" 
                component={LegTraining} 
            />


            <Drawer.Screen 
                name="Logout"
                options={{
                    drawerLabel: "Logout"
                }}
            >
                {() => (
                    <BackgroundImage 
                        source={require('./images/mainbg.webp')}
                    >

                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >

                            <Text
                                style={{
                                    marginBottom:20,
                                    color:'#00CED1'
                                }}
                            >
                                <B>
                                    Are you sure you want to logout?
                                </B>
                            </Text>


                            <AuthenticateButton
                                onPress={handleLogout}
                                title="Logout"
                            />

                        </View>

                    </BackgroundImage>
                )}

            </Drawer.Screen>


        </Drawer.Navigator>
    );
};



export default function App(){

    const [isAuthenticated, setIsAuthenticated] = useState(false);


    return (

        <NavigationContainer>

            {
                isAuthenticated ? (

                    // After login
                    <DrawerNavigator
                        setIsAuthenticated={setIsAuthenticated}
                    />


                ) : (

                    // Before login
                    <Stack.Navigator
                        initialRouteName="Opening"
                        screenOptions={{
                            headerShown:false
                        }}
                    >


                        <Stack.Screen
                            name="Opening"
                            component={OpeningScreen}
                        />


                        <Stack.Screen
                            name="Login"
                        >
                            {
                                props => (
                                    <LoginScreen
                                        {...props}
                                        setIsAuthenticated={setIsAuthenticated}
                                    />
                                )
                            }

                        </Stack.Screen>



                        <Stack.Screen
                            name="Sign"
                        >
                            {
                                props => (
                                    <SignUpPage
                                        {...props}
                                        setIsAuthenticated={setIsAuthenticated}
                                    />
                                )
                            }

                        </Stack.Screen>


                    </Stack.Navigator>

                )
            }


        </NavigationContainer>

    );
}