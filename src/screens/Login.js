import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/Styles";

function Login({ navigation }) {
  //Use state function used to obtain username and password from the inputs
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Handle login logic here
    //setting a static password and username
    if (username === "healthme.admin" && password === "12345") {
      //move to home screen
      console.log("Logged in");
      navigation.navigate("Main");
    } else {
      //return invalid password
      console.log("Invalid password");
    }
    console.log("Logging in with", username, password);
  };

  const moveToSignUp = () => {
    //redirect tot sign up page
    navigation.navigate("SignUp");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Health Me</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='Username'
        placeholderTextColor='#fff'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={globalStyles.input}
        placeholder='Password'
        placeholderTextColor='#fff'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View
        style={[
          globalStyles.buttonWrapper,
          {
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <TouchableOpacity
          style={globalStyles.buttonContainer}
          onPress={handleLogin}
        >
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.buttonContainer}
          onPress={moveToSignUp}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
