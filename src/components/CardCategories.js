import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/Styles";

// CardCategories component takes a navigation prop
const CardCategories = ({ navigation }) => {
  // Define an array of card objects, each object represents a category card with an id, title, and image
  const cards = [
    {
      id: 1,
      title: "Back Work Outs",
      image: require("../../assets/category/back.jpg"), // Background image for card 1
    },
    {
      id: 2,
      title: "Chest Work Outs",
      image: require("../../assets/category/chest.jpg"), // Background image for card 2
    },
    {
      id: 3,
      title: "Core Work Outs",
      image: require("../../assets/category/core.jpg"), // Background image for card 3
    },
    {
      id: 4,
      title: "Leg Work Outs",
      image: require("../../assets/category/leg.jpg"), // Background image for card 4
    },
    {
      id: 5,
      title: "Arm Work Outs",
      image: require("../../assets/category/arms.jpg"), // Background image for card 5
    },
    // Add more cards here as needed
  ];

  // Function to handle card click, takes cardIndex as a parameter, and navigates to another screen based on the index
  const handleCardClick = (cardIndex) => {
    // For logging purposes
    console.log(`Card ${cardIndex + 1} clicked!`);

    // Using switch to navigate to the appropriate screen when a card is clicked
    switch (cardIndex) {
      case 0:
        navigation.navigate("BackWorkOut");
        break;
      case 1:
        navigation.navigate("ChestWorkOut");
        break;
      case 2:
        navigation.navigate("CoreWorkOut");
        break;
      case 3:
        navigation.navigate("LegWorkOut");
        break;
      case 4:
        navigation.navigate("ArmWorkOut");
        break;
      default:
        // Handle invalid cardIndex here
        break;
    }
  };

  // Function to render a category card, takes an item object as a parameter
  const renderItem = ({ item }) => (
    // When a card is pressed, call handleCardClick with the card's id as a parameter
    <TouchableOpacity onPress={() => handleCardClick(item.id - 1)}>
      {/* Display the card's image as a background, with the card's title overlayed */}
      <ImageBackground source={item.image} style={globalStyles.workOutCatCard}>
        <Text style={globalStyles.workOutCardTitle}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  // Render the component
  return (
    <View style={styles.container}>
      {/* Render a FlatList of the category cards, with the renderItem function defined above */}
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

// Define component styles using StyleSheet.create()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  space: {
    height: 16, // Space between cards
  },
});

// Export the CardCategories component as the default export of this module
export default CardCategories;
