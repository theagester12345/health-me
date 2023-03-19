import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/Styles';
import { HeaderText } from '../components/HeaderText';

// Home screen
function HomeScreen() {
  return (
    <View style={{backgroundColor:"#000",flex:1}}>
        <HeaderText  title="Home"/>
    </View>
    
  );
}

//BMI Calculator screen 
function BMIScreen (){
    return (
        <View style={{backgroundColor:"#000",flex:1}}>
            <HeaderText  title="BMI Calculator"/>
        </View>
        
      );
}

//ChatBot screen 
function ChatBotScreen (){
    return (
        <View style={{backgroundColor:"#000",flex:1}}>
            <HeaderText  title="Dietary ChatBot"/>
        </View>
        
      );
}

// Profile screen
function ProfileScreen() {
  return (
    <View style={{backgroundColor:"#000",flex:1}}>
            <HeaderText  title="Profile"/>
    </View>
  );
}

// Notification screen
function NotificationScreen() {
  return (
    <View style={{backgroundColor:"#000",flex:1}}>
    <HeaderText  title="Notification"/>
</View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name ==='BMI'){
                iconName = focused ? 'calculator' : 'calculator-outline';

            } else if (route.name ==='ChatBot'){
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';

            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name='BMI' component={BMIScreen}/>
        <Tab.Screen name='ChatBot' component={ChatBotScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
      </Tab.Navigator>
  );
}

export default MyTabs;
