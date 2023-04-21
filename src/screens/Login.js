import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Styles';
import { loginUser } from '../DB/Firebase';
import Toast from 'react-native-root-toast';

function Login({ navigation }) {
  //Use state function used to obtain username and password from the inputs
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic here
    loginUser(username, password)
      .then((user) => {
        console.log('Logged in');
        console.log(user);

        AsyncStorage.setItem('LOGIN_DATA', JSON.stringify(user)).then(() => {
          navigation.replace('Main');
        });
      })
      .catch(() => {
        console.log('Invalid username or password');
        Toast.show('Invalid username or password', {
          duration: Toast.durations.SHORT,
          shadow: true,
          animation: true,
          backgroundColor: 'red',
        });
      });
  };

  const moveToSignUp = () => {
    //redirect tot sign up page
    navigation.navigate('SignUp');
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
      <View
        style={[
          globalStyles.buttonWrapper,
          {
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <TouchableOpacity style={globalStyles.buttonContainer} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.buttonContainer} onPress={moveToSignUp}>
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
