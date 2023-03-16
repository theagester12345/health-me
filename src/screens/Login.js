import React from 'react'
import {View,Text,Button} from 'react-native';

function Login({navigation}) {
  return (
    <View>
    <Text>This is the Login Screen</Text>
    <Button
      title="Go to Splash screen"
      onPress={() => navigation.navigate('Splash')}
    />
  </View>
  )
}

export default Login