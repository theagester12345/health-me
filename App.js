// Import required modules
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

// Create a Stack Navigator for the screens
const Stack = createNativeStackNavigator();

// Define the main component for the application
export default function App() {
return (
<RootSiblingParent>
<NavigationContainer>
<Stack.Navigator
screenOptions={{
headerShown : false // Hide the header for all screens
}}
initialRouteName={'Splash'} // Set the initial route to Splash
>
<Stack.Screen name='Splash' component={SplashScreen} />
<Stack.Screen name='Login' component={Login}/>
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

// This code creates a stack navigator that provides navigation between different screens of the application. The NavigationContainer and createNativeStackNavigator components are used from the @react-navigation/native and @react-navigation/native-stack modules, respectively.

// The RootSiblingParent component is used from the react-native-root-siblings module, which allows for the display of Toast messages in the application.

// The Stack.Navigator component is used to create the stack navigator and set the default headerShown property to false for all screens.

// The initialRouteName is set to Splash which means that the Splash screen will be the first screen displayed when the app is opened.

// Each of the screens in the application is defined as a Stack.Screen component within the Stack.Navigator component. Each screen has a name property, which is a unique identifier for the screen, and a component property, which is the component that will be displayed when the screen is navigated to.