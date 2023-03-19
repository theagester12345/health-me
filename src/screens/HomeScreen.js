import React from 'react';
import { Text, View, TouchableOpacity,Image, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/Styles';
import { HeaderText } from '../components/HeaderText';

// Home screen
function HomeScreen() {
    const cards = [
        { id: 1, title: 'Wall-Sit', image: require('../../assets/workout/wall-sit.png') , cat:'Leg Workout' },
        {id:2, title:'Jumping Jack', image:require('../../assets/workout/jumping-jack.gif'), cat:'Leg Workout'},
        {id:3, title:'Spider Plank', image:require('../../assets/workout/spider-plank.gif'), cat:'Core Workout'},
        {id:4, title:'Bicycle Crunch', image:require('../../assets/workout/bicycle-crunch.gif'), cat:'Core Workout'},
        {id:5, title:'Archer Push-Up', image:require('../../assets/workout/archer-push-up.gif'), cat:'Chest Workout'},
        {id:6, title:'Diamond Push-Up', image:require('../../assets/workout/diamond-push-up.gif'), cat:'Chest Workout'},
        {id:7, title:'Seated Toe-Touches', image:require('../../assets/workout/seated-toe-touches.gif'), cat:'Back Workout'},
        {id:8, title:'Bent Over Dumbbell Row', image:require('../../assets/workout/bent-over-dumbbell-row.gif'), cat:'Back Workout'},
        {id:9, title:'Body Ups', image:require('../../assets/workout/body-ups.gif'), cat:'Arm Workout'},
        {id:10, title:'Chair Dips', image:require('../../assets/workout/chair-dips.gif'), cat:'Arm Workout'},


        

      ];

      const handleCardPress = (cardId) => {
        // Handle card press logic here
        console.log('Pressed card with id:', cardId);
      };

      const renderItem = ({ item }) => (
        <TouchableOpacity
          key={item.id}
          style={globalStyles.card}
          onPress={() => handleCardPress(item.id)}
        >
          <Image resizeMode='contain' source={item.image} style={globalStyles.cardImage} />
          <Text style={globalStyles.cardTitle}>{item.title}</Text>
          <View style={globalStyles.badge}>
            <Text style={{ color: '#fff' }}>{item.cat}</Text>
        </View>
        </TouchableOpacity>
      );


  return (
    <View style={{backgroundColor:"#000",flex:1}}>
        <HeaderText  title="Home"/>
        <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ alignItems: 'center' }}
      />
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
          tabBarActiveTintColor: '#5339c6',
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
