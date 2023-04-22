import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

import { globalStyles } from "../styles/Styles";
import SplashScreenImage from "../../assets/splashImg.jpg";

function SplashScreen({ navigation }) {
  // Use effect function used to delay splash screen for 3 seconds before moving to Login page
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 3000);
  }, []);
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={SplashScreenImage}
        style={globalStyles.backgroundImage}
        resizeMode='cover'
      >
        <Text style={[globalStyles.titleText, { color: "#A7C3D0" }]}>
          Health Me
        </Text>
        <ActivityIndicator size='large' color='#A7C3D0' />
      </ImageBackground>
    </View>
  );
}

export default SplashScreen;
