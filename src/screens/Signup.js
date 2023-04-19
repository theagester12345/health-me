import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../styles/Styles";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons icon library
import { signUpUser } from "../DB/Firebase";




function SignUp({navigation}) {
 


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
      Toast.show("Password does not match.", {
        duration: Toast.durations.SHORRT,
        shadow: true,
        animation: true,
        backgroundColor:'red'
      });

      return;
    }
    // Generate a unique key
    const uniqueKey = Date.now();

    // Create a data object with the form data
    const userData = {
      username,
      password,
      email,
      dateOfBirth: dateOfBirth.toLocaleDateString(),
    };

   
    //Before signinng up , check user existence
    // if (checkUserExistence(email,username)){
    //   return;
    // }

    //Sign Up the USer 
    signUpUser(uniqueKey,userData,navigation);
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
