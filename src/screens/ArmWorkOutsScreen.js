import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../styles/Styles";
import { HeaderText } from "../components/HeaderText";
import Icon from "react-native-vector-icons/Ionicons"; 

function ArmWorkOutsScreen({ navigation }) {
  //List of Leg Work Out Cards in The App
  const cards = [
  
    {
      id: 1,
      title: "Body Ups",
      image: require("../../assets/workout/body-ups.gif"),
      cat: "Arm",
    },
    {
      id: 2,
      title: "Chair Dips",
      image: require("../../assets/workout/chair-dips.gif"),
      cat: "Arm ",
    },
    {
        id: 3,
        title: "Tricep Dips",
        image: require("../../assets/workout/triceps-dips.gif"),
        cat: "Arm",
      },
      {
        id: 4,
        title: "Dumbbell Curl",
        image: require("../../assets/workout/dumbbell-curl.gif"),
        cat: "Arm",
      },
      {
        id: 5,
        title: "Seat Dumbbell Curl",
        image: require("../../assets/workout/seated-dumbbell.gif"),
        cat: "Arm",
      },

  ];

  //Function Handle Card press
  const handleCardPress = (item) => {
    // Handle card press logic here
    console.log("Pressed card with id:", item.id);
    navigation.navigate("Instructions", { workout:item,navigation});
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
        style={[globalStyles.backIcon,{marginBottom:20}]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <HeaderText style={{marginTop:100}} title='Arm WorkOuts' />
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}

export default ArmWorkOutsScreen;
