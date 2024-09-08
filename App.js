import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpenPage from './pages/OpeningPage';
import EntryPage from './pages/LoginPage';
import SignUpPage from './pages/SignUp';
import WeekDays from './pages/Week';
import BodyTarget from './pages/TargetPage';
import ArmTraining from './pages/Training/ArmPage';
import ChestTraining from './pages/Training/ChestPage';
import CoreTraining from './pages/Training/CorePage';
import LegTraining from './pages/Training/LegsPage';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Opening'>
        <Stack.Screen name="Opening" component={OpenPage} />
        <Stack.Screen name="Entry" component={EntryPage} />
        <Stack.Screen name="Sign" component={SignUpPage} />
        <Stack.Screen name="Week" component={WeekDays} />
        <Stack.Screen name="Target" component={BodyTarget} />
        <Stack.Screen name="Arms" component={ArmTraining} />
        <Stack.Screen name="Chest" component={ChestTraining} />
        <Stack.Screen name="Core" component={CoreTraining} />
        <Stack.Screen name="Leg" component={LegTraining} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;