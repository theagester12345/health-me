import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../styles/Styles";
import { HeaderText } from "../components/HeaderText";
import Icon from "react-native-vector-icons/Ionicons";

function BackWorkOutsScreen({ navigation }) {
  //List of Leg Work Out Cards in The App
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

  //Function Handle Card press
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
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      {/* Arrow back icon */}
      <TouchableOpacity
        style={[globalStyles.backIcon, { marginBottom: 20 }]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <HeaderText style={{ marginTop: 100 }} title='Back WorkOuts' />
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}

export default BackWorkOutsScreen;
