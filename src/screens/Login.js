import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Styles';

function Login({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic here
    //setting a static password and username 
    if (username==="healthme.admin" && password ==="12345"){
      //move to home screen
      console.log("Logged in")
      navigation.navigate('Main');
    }else {
      //return invalid password
      console.log("Invalid password")
    }
    console.log('Logging in with', username, password);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Health Me</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={globalStyles.buttonWrapper}>
      <TouchableOpacity style={globalStyles.buttonContainer} onPress={handleLogin}>
  <Text style={globalStyles.buttonText}>Login</Text>
</TouchableOpacity>
      </View>
     
    </View>
  );
}

export default Login;
