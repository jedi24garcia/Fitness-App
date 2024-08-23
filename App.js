import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpenPage from './pages/OpeningPage';
import EntryPage from './pages/LoginPage';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Opening'>
        <Stack.Screen name="Opening" component={OpenPage} />
        <Stack.Screen name="Entry" component={EntryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;