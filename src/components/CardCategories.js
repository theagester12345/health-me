import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { globalStyles } from '../styles/Styles';

const CardCategories = ({navigation}) => {
  const cards = [
    {
      id: 1,
      title: 'Back Work Outs',
      image: require('../../assets/category/back.jpg'), // Background image for card 1
    },
    {
      id: 2,
      title: 'Chest Work Outs',
      image: require('../../assets/category/chest.jpg'), // Background image for card 2
    },
    {
      id: 3,
      title: 'Core Work Outs',
      image: require('../../assets/category/core.jpg'), // Background image for card 3
    },
    {
      id: 4,
      title: 'Leg Work Outs',
      image: require('../../assets/category/leg.jpg'), // Background image for card 4
    },
    {
      id: 5,
      title: 'Arm Work Outs',
      image: require('../../assets/category/arms.jpg'), // Background image for card 5
    }
    // Add more cards here as needed
  ];

  const handleCardClick = (cardIndex) => {
    // Function to handle card click, navigate to another screen based on cardIndex
    //for logging purposes
    console.log(`Card ${cardIndex + 1} clicked!`);

    //using switch to move to the appropriate screen when cat card is clciked
    switch (cardIndex) {
      case 0:
        navigation.navigate('BackWorkOut');
        break;
      case 1:
        navigation.navigate('ChestWorkOut');
        break;
      case 2:
        navigation.navigate('CoreWorkOut');
        break;
      case 3:
        navigation.navigate('LegWorkOut');
        break;
      case 4:
        navigation.navigate('ArmWorkOut');
        break;
      default:
        // Handle invalid cardIndex here
        break;
    }
  
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardClick(item.id - 1)}>
      <ImageBackground source={item.image} style={globalStyles.workOutCatCard}>
        <Text style={globalStyles.workOutCardTitle}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  space: {
    height: 16, // Space between cards
  },
});

export default CardCategories;
