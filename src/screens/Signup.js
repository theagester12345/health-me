import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons icon library
import { checkUserExistence, signUpUser } from '../DB/Firebase';
import Toast from 'react-native-root-toast';

function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setDateOfBirth(currentDate);
    hideDatePicker();
  };

  const handleSignUp = async () => {
    // Validate the form - password and retype password must be the same before user can be added to db
    if (password !== retypePassword) {
      // Alert user using Toast
      Toast.show('Password does not match.', {
        duration: Toast.durations.SHORRT,
        shadow: true,
        animation: true,
        backgroundColor: 'red',
      });
      return;
    }

    // Generate a unique key
    const uniqueKey = Date.now();

    // Create a data object with the form data
    const userData = {
      username,
      password,
      bmi: 0.0,
      email,
      dateOfBirth: dateOfBirth ? dateOfBirth.toLocaleDateString() : null,
    };

    // Before signinng up , check user existence
    const userExists = await checkUserExistence(email, username);
    if (userExists) {
      Toast.show('Email already exists', {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        backgroundColor: 'red',
      });

      return;
    }else{
      // Sign Up the user
    const response = await signUpUser(uniqueKey, userData, navigation);
    if (response === true) {
      Toast.show('User saved successfully', {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        backgroundColor: 'green',
      });

      setTimeout(() => {
        // TODO: Check if the navigation can actually go back
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }, 2000);
    } else {
      Toast.show(`Failed to save user: ${response.message}`, {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        backgroundColor: 'red',
      });
    }

    }

    
  };

  return (
    <View style={globalStyles.container}>
      {/* Arrow back icon */}
      <TouchableOpacity
        style={globalStyles.backIcon}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={globalStyles.titleText}>Sign Up</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Re-Type Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={retypePassword}
        onChangeText={setRetypePassword}
        autoCapitalize="none"
      />

      <TouchableOpacity style={globalStyles.input} onPress={showDatePicker}>
        <Text style={{ color: '#fff' }}>
          {dateOfBirth ? `${dateOfBirth.toLocaleDateString()}` : 'Date of Birth'}
        </Text>
      </TouchableOpacity>

      {isDatePickerVisible && (
        <RNDateTimePicker
          value={new Date()}
          mode="date"
          androidMode="spinner"
          showIcon={false}
          customStyles={{
            dateInput: {
              borderWidth: 0,
            },
            dateText: {
              color: '#fff',
            },
            placeholderText: {
              color: '#fff',
            },
          }}
          onChange={handleDatePicked}
        />
      )}

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity style={globalStyles.buttonContainer} onPress={handleSignUp}>
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;
