// Import necessary modules
import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../styles/Styles";
import { HeaderText } from "../components/HeaderText";
import Icon from "react-native-vector-icons/Ionicons";

function ChestWorkOutsScreen({ navigation }) {
  //List of Chest Work Out Cards in The App
  const cards = [
    {
      id: 1,
      title: "Archer Push-Up",
      image: require("../../assets/workout/archer-push-up.gif"),
      cat: "Chest",
    },
    {
      id: 2,
      title: "Diamond Push-Up",
      image: require("../../assets/workout/diamond-push-up.gif"),
      cat: "Chest",
    },
    {
      id: 3,
      title: "Inclined Push-Up",
      image: require("../../assets/workout/incline-push-up.gif"),
      cat: "Chest",
    },
    {
      id: 4,
      title: "Kneeling Push-Up",
      image: require("../../assets/workout/kneeling-push-up.gif"),
      cat: "Chest",
    },
    {
      id: 5,
      title: "Pike Push-Up",
      image: require("../../assets/workout/pike-push-up.gif"),
      cat: "Chest",
    },
  ];

  // Function to handle card press
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

  // Return the component with the list of chest workout cards
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      {/* Arrow back icon */}
      <TouchableOpacity
        style={[globalStyles.backIcon, { marginBottom: 20 }]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <HeaderText style={{ marginTop: 100 }} title='Chest WorkOuts' />
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}

export default ChestWorkOutsScreen;
