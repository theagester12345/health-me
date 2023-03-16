import React from 'react'
import {View,Text,Button} from 'react-native';

function SplashScreen({navigation}) {
  return (
    <View>
    <Text>This is the Splash Screen</Text>
    <Button
      title="Go to Login screen"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
  )
}

export default SplashScreen