// Importing React and necessary components from react-native
import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";

// Importing globalStyles and HeaderText from respective files
import { globalStyles } from "../styles/Styles";
import { HeaderText } from "../components/HeaderText";

// Importing Ionicons from react-native-vector-icons library
import Icon from "react-native-vector-icons/Ionicons";

// Function component for LegWorkOutsScreen
function LegWorkOutsScreen({ navigation }) {
  //List of Leg Work Out Cards in The App
  const cards = [
    {
      id: 1,
      title: "Wall-Sit",
      image: require("../../assets/workout/wall-sit.png"),
      cat: "Leg",
    },
    {
      id: 2,
      title: "Jumping Jack",
      image: require("../../assets/workout/jumping-jack.gif"),
      cat: "Leg",
    },
    {
      id: 3,
      title: "Back Wards Jumping ",
      image: require("../../assets/workout/backward-jumping.gif"),
      cat: "Leg",
    },
    {
      id: 4,
      title: "Skater",
      image: require("../../assets/workout/skater.gif"),
      cat: "Leg",
    },
    {
      id: 5,
      title: "Jump Squats",
      image: require("../../assets/workout/jump-squat.gif"),
      cat: "Leg",
    },
  ];

  //Function to handle Card press
  const handleCardPress = (item) => {
    // Handle card press logic here
    console.log("Pressed card with id:", item.id);
    navigation.navigate("Instructions", { workout: item, navigation });
  };

  //RenderItem contains the cards and is passed to the Flat List (Scroll view)
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

  // Component's return statement
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      {/* Arrow back icon */}
      <TouchableOpacity
        style={[globalStyles.backIcon, { marginBottom: 20 }]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      {/* Header text */}
      <HeaderText style={{ marginTop: 100 }} title='Leg WorkOuts' />

      {/* Flatlist for rendering Leg WorkOut Cards */}
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}

// Exporting the LegWorkOutsScreen component as default
export default LegWorkOutsScreen;
