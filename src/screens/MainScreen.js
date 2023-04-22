import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, Alert, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/Styles';
import { HeaderText } from '../components/HeaderText';
import CardCategories from '../components/CardCategories';
import { updateUserBMI,getUserData, updateUserPassword } from '../DB/Firebase';
import { calculateBmi, fetchBmiKey } from '../utils';
import Toast from 'react-native-root-toast';

// Exercise screen
function ExerciseScreen({ navigation }) {
  return <CardCategories navigation={navigation} />;
}

// BMI Calculator screen
function BMIScreen({ navigation, route }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [saveBMI, setSaveBMI] = useState(false);

  const handleSaveBMI = async () => {
    try {
      setSaveBMI(true);
      const data = await AsyncStorage.getItem('LOGIN_DATA');
      const user = JSON.parse(data);

      const bmi = calculateBmi(height, weight);
      const response = await updateUserBMI(user.id, bmi);
      if (response) {
        const bmiData = fetchBmiKey(bmi);
        navigation.navigate('DietarySummary', { data: bmiData, bmi });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>BMI Calculator</Text>

      <TextInput
        style={globalStyles.input}
        onChangeText={(text) => setHeight(text)}
        value={height}
        placeholder="Enter Your Current Height (cm)"
        placeholderTextColor="#fff"
        keyboardType="numeric"
      />

      <TextInput
        style={globalStyles.input}
        onChangeText={(text) => setWeight(text)}
        value={weight}
        placeholder="Enter Your Current Weight (kg)"
        placeholderTextColor="#fff"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 20,
          marginTop: 20,
          alignSelf: 'flex-end',
        }}
        onPress={() => {
          Alert.alert('Save BMI', 'Do you want to save your BMI to your profile?', [
            {
              text: 'Yes',
              onPress: handleSaveBMI,
            },
            {
              text: 'No',
              onPress: () => {
                setSaveBMI(false);
                const bmi = calculateBmi(height, weight);
                const bmiData = fetchBmiKey(bmi);
                navigation.navigate('DietarySummary', { data: bmiData, bmi });
              },
              style: 'cancel',
            },
          ]);
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

// Profile screen
function ProfileScreen({ navigation, route }) {
  const [user, setUser] = useState(null);
  const [resetPasswordDialogVisible, setResetPasswordDialogVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  //Get user ID from async storage
 
  useEffect(() => {
    async function getUserIdFromStorage() {
      const data = await AsyncStorage.getItem('LOGIN_DATA');
      const userData = JSON.parse(data);
      if (userData !== null) {
        getUserData(userData.id)
          .then((data) => {
            console.log('user data in use effect');
            console.log(data);
            setUser(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
    getUserIdFromStorage();
  }, []);

  if (!user) {
    return (
      <View style={{ backgroundColor: '#000', flex: 1 }}>
        <Text style={{ color: '#fff' }}>Loading...</Text>
      </View>
    );
  }

  const handleResetPassword = () => {
    setResetPasswordDialogVisible(true);
  };

  const handleSavePassword = async () => {
    // Save new password logic here
    console.log('New password saved: ', newPassword);

    const response = await updateUserPassword(user.id, newPassword);

    if (response) {
      Toast.show('Password Change Succesful', {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        backgroundColor: 'green',
      });
    } else {
      Toast.show(`${response}`, {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        backgroundColor: 'red',
      });
    }
    setResetPasswordDialogVisible(false);
  };


  // return <View/>

  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <HeaderText title="User Profile" />
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Username:</Text>
          <Text style={globalStyles.value}>{user.username}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Email:</Text>
          <Text style={globalStyles.value}>{user.email}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Password:</Text>
          <Text style={globalStyles.value}>**********</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Date of Birth:</Text>
          <Text style={globalStyles.value}>{user.dateOfBirth}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>BMI:</Text>
          <Text style={globalStyles.value}>{user.bmi}</Text>
        </View>

        <TouchableOpacity
          onPress={handleResetPassword}
          style={{
            backgroundColor: 'blue',
            padding: 20,
            marginTop: 20,
            alignSelf: 'flex-start',
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Reset Password</Text>
        </TouchableOpacity>
      </View>

      {resetPasswordDialogVisible && (
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 5,
              width: '80%',
            }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Reset Password</Text>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: 'gray',
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Enter new password"
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
              secureTextEntry
            />
            <TouchableOpacity
              onPress={handleSavePassword}
              style={{
                backgroundColor: 'blue',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Save Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setResetPasswordDialogVisible(false)}
              style={{
                backgroundColor: 'gray',
                padding: 10,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

// Logout screen
function LogOutScreen({ navigation }) {
  // Function to show logout confirmation dialog
  const handleLogOut = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        { text: 'Log Out', onPress: () => navigation.replace('Login') },
      ],
      { cancelable: false },
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <HeaderText title="Proceed To LogOut" />
      <TouchableOpacity
        onPress={handleLogOut}
        style={{ backgroundColor: 'red', padding: 20, marginTop: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

// Creating bottom tab navigator
const Tab = createBottomTabNavigator();

// Main screen
export default function MainScreen({ route }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Exercise') {
            iconName = 'barbell-outline';
          } else if (route.name === 'BMI') {
            iconName = 'calculator-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'LogOut') {
            iconName = 'log-out-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
      <Tab.Screen name="BMI" component={BMIScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="LogOut" component={LogOutScreen} />
    </Tab.Navigator>
  );
}
