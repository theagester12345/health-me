/**

This component displays a screen containing a list of Core Work Out Cards.
It uses FlatList component to render the cards and each card contains an image and title.
When a card is pressed, it triggers the handleCardPress function and navigates to the Instructions screen passing the workout data.
The cards data is an array of objects with id, title, image and cat properties.
The renderItem function is used to render each card and it is passed to the FlatList component as a prop.
*/
import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../styles/Styles";
import { HeaderText } from "../components/HeaderText";
import Icon from "react-native-vector-icons/Ionicons";
function CoreWorkOutsScreen({ navigation }) {
  // List of Core Work Out Cards in The App
  const cards = [
    {
      id: 1,
      title: "Spider Plank",
      image: require("../../assets/workout/spider-plank.gif"),
      cat: "Core",
    },
    {
      id: 2,
      title: "Bicycle Crunch",
      image: require("../../assets/workout/bicycle-crunch.gif"),
      cat: "Core",
    },
    {
      id: 3,
      title: "Crunch",
      image: require("../../assets/workout/crunch.gif"),
      cat: "Core",
    },
    {
      id: 4,
      title: "High Knee Squat",
      image: require("../../assets/workout/high-knee-squat.gif"),
      cat: "Core",
    },
    {
      id: 5,
      title: "T Cross Sit Up",
      image: require("../../assets/workout/t-cross-sit-up.gif"),
      cat: "Core",
    },
  ];

  // Function to handle Card press
  const handleCardPress = (item) => {
    // Handle card press logic here
    console.log("Pressed card with id:", item.id);
    navigation.navigate("Instructions", { workout: item, navigation });
  };

  // RenderItem contains the cards and is passed to the Flat List (Scroll view)
  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={globalStyles.ExerciseCards}
      onPress={() => handleCardPress(item)}
      navigation={navigation}
    >
      <Image
        resizeMode='contain'
        source={item.image}
        style={globalStyles.cardImage}
      />
      <Text style={globalStyles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      {/* Arrow back icon*/}
      <TouchableOpacity
        style={[globalStyles.backIcon, { marginBottom: 20 }]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      {/* Header */}
      <HeaderText style={{ marginTop: 100 }} title='Chest WorkOuts' />
      {/* Flat List to render the cards */}
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}

export default CoreWorkOutsScreen;
