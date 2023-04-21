import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import MainScreen from './src/screens/MainScreen';
import InstructionScreen from './src/screens/InstructionScreen';
import SignUp from './src/screens/Signup';
import LegWorkOutsScreen from './src/screens/LegWorkOutsScreen';
import ChestWorkOutsScreen from './src/screens/ChestWorkOutsScreen';
import BackWorkOutsScreen from './src/screens/BackWorkOutsScreen';
import CoreWorkOutsScreen from './src/screens/CoreWorkOutsScreen';
import ArmWorkOutsScreen from './src/screens/ArmWorkOutsScreen';
import DietarySummary from './src/screens/DietarySummary';
import { RootSiblingParent } from 'react-native-root-siblings';




const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <RootSiblingParent>
     <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown : false
      }} initialRouteName={'Splash'}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login'component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='LegWorkOut' component={LegWorkOutsScreen}/>
        <Stack.Screen name='ChestWorkOut' component={ChestWorkOutsScreen}/>
        <Stack.Screen name='CoreWorkOut' component={CoreWorkOutsScreen}/>
        <Stack.Screen name='ArmWorkOut' component={ArmWorkOutsScreen}/>
        <Stack.Screen name='BackWorkOut' component={BackWorkOutsScreen}/>
        <Stack.Screen name='DietarySummary' component={DietarySummary}/>
        <Stack.Screen name="Instructions" component={InstructionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   </RootSiblingParent>
  );
}
