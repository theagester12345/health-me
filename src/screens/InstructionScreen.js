import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/Styles.js";
import { HeaderText } from "../components/HeaderText";
import Icon from "react-native-vector-icons/Ionicons";

const InstructionPage = ({ route, navigation }) => {
  // Obtain id passed from home page
  const { workout } = route.params;

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        style={[globalStyles.backIcon, { marginBottom: 20 }]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>

      <HeaderText title={`${workout.cat} WorkOut Instructions`} />
      <ImageBackground
        style={globalStyles.instructionPageBackgroundImage}
        source={workout.image}
        resizeMode='contain'
      >
        <Text style={globalStyles.instructionPageTitleText}>
          {workout.title}
        </Text>
      </ImageBackground>

      <View style={globalStyles.paragraph}>
        {/* Beginner */}
        <View
          style={{
            padding: 5,
            backgroundColor: "green",
            marginBottom: 10,
            borderRadius: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Beginner</Text>
          <Text style={{ color: "#fff", marginLeft: 5 }}>4 sets x 8 reps</Text>
        </View>

        {/* Intermediate */}
        <View
          style={{
            padding: 5,
            backgroundColor: "#f0ba0f",
            marginBottom: 10,
            borderRadius: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Intermediate</Text>
          <Text style={{ color: "#fff", marginLeft: 5 }}>4 sets x 12 reps</Text>
        </View>

        {/* Expert */}
        <View
          style={{
            padding: 5,
            backgroundColor: "red",
            marginBottom: 10,
            borderRadius: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Expert</Text>
          <Text style={{ color: "#fff", marginLeft: 5 }}>4 sets x 15 reps</Text>
        </View>
      </View>
    </View>
  );
};

export default InstructionPage;
