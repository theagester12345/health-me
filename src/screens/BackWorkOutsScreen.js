// Import necessary modules and components
import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../styles/Styles";
import { HeaderText } from "../components/HeaderText";
import Icon from "react-native-vector-icons/Ionicons";

// Functional component that displays the back workout screen
function BackWorkOutsScreen({ navigation }) {
  // List of back workout cards in the app
  const cards = [
    {
      id: 1,
      title: "Seated Toe-Touches",
      image: require("../../assets/workout/seated-toe-touches.gif"),
      cat: "Back",
    },
    {
      id: 2,
      title: "Bent Over Dumbbell Row",
      image: require("../../assets/workout/bent-over-dumbbell-row.gif"),
      cat: "Back",
    },
    {
      id: 3,
      title: "Standing Side Bend Stretch",
      image: require("../../assets/workout/standing-side-bend-stretch.gif"),
      cat: "Back",
    },
    {
      id: 4,
      title: "Back Pec Stretch",
      image: require("../../assets/workout/back-pec-stretch.gif"),
      cat: "Back",
    },
    {
      id: 5,
      title: "Swimming",
      image: require("../../assets/workout/swimming.gif"),
      cat: "Back",
    },
  ];

  // Function to handle card press event
  const handleCardPress = (item) => {
    // Handle card press logic here
    console.log("Pressed card with id:", item.id);
    navigation.navigate("Instructions", { workout: item, navigation });
  };

  // RenderItem function contains the cards and is passed to the FlatList component for displaying the cards in a scrollable view
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

  // Return the view containing the list of back workout cards
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      {/*Arrow back icon */}
      <TouchableOpacity
        style={[globalStyles.backIcon, { marginBottom: 20 }]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      {/* Header text */}
      <HeaderText style={{ marginTop: 100 }} title='Back WorkOuts' />
      {/* FlatList component containing the list of back workout cards */}
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}

// Export the BackWorkOutsScreen component as default
export default BackWorkOutsScreen;
