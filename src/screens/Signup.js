import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../styles/Styles";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons icon library
import Toast from "react-native-toast"; // import that handles the Toast Displayed

function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
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

  const handleSignUp = () => {
    //Validate the form - password and retype password must be the same before user can be added to db
    if (password!== retypePassword){
      //Alert user using Toast
      Toast.show("Password does not match ", {
        position: Toast.position.CENTER,
        duration: Toast.duration.SHORT,
        animation: true,
        hideOnPress: true,
      });
    }
    // Generate a unique key
    const uniqueKey = firebase.database().ref().child("user").push().key;

    // Create a data object with the form data
    const userData = {
      username,
      password,
      email,
      dateOfBirth: dateOfBirth.toLocaleDateString(),
    };

    // Save the data to Firebase Realtime Database with the unique key
    firebase
      .database()
      .ref(`user/${uniqueKey}`)
      .set(userData)
      .then(() => {
        console.log("Data saved successfully");
        // Handle success logic here
        // Show success toast
        Toast.show("User saved successfully", {
          position: Toast.position.CENTER,
          duration: Toast.duration.SHORT,
          animation: true,
          hideOnPress: true,
        });

        //Switch to Login page after 3 seconds
        setTimeout(() => {
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: "Login" }) 
            ],
          });
          // Call the navigation dispatch function to navigate back to login page
          this.props.navigation.dispatch(resetAction);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
        // Handle error logic here
        Toast.show(`Failed to save user: ${error.message}`, {
          position: Toast.position.CENTER,
          duration: Toast.duration.SHORT,
          animation: true,
          hideOnPress: true,
        });
      });
  };

  return (
    <View style={globalStyles.container}>
      {/* Arrow back icon */}
      <TouchableOpacity
        style={globalStyles.backIcon}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>

      <Text style={globalStyles.titleText}>Sign Up</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='Username'
        placeholderTextColor='#fff'
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={globalStyles.input}
        placeholder='Email'
        placeholderTextColor='#fff'
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={globalStyles.input}
        placeholder='Password'
        placeholderTextColor='#fff'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />

      <TextInput
        style={globalStyles.input}
        placeholder='Re-Type Password'
        placeholderTextColor='#fff'
        secureTextEntry
        value={retypePassword}
        onChangeText={setRetypePassword}
        autoCapitalize="none"
      />

      <TouchableOpacity style={globalStyles.input} onPress={showDatePicker}>
        <Text style={{ color: "#fff" }}>
          {dateOfBirth
            ? `${dateOfBirth.toLocaleDateString()}`
            : "Date of Birth"}
        </Text>
      </TouchableOpacity>

      {isDatePickerVisible && (
        <RNDateTimePicker
          value={new Date()}
          mode='date'
          androidMode='spinner'
          showIcon={false}
          customStyles={{
            dateInput: {
              borderWidth: 0,
            },
            dateText: {
              color: "#fff",
            },
            placeholderText: {
              color: "#fff",
            },
          }}
          onChange={handleDatePicked}
        />
      )}

      <View style={globalStyles.buttonWrapper}>
        <TouchableOpacity
          style={globalStyles.buttonContainer}
          onPress={handleSignUp}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;
