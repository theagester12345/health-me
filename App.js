import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import MyTabs from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown : false
      }} initialRouteName={'Splash'}>
        {/* <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login'component={Login}/> */}
        <Stack.Screen name='Main' component={MyTabs}/>

      </Stack.Navigator>
    </NavigationContainer>
 
  );
}


