import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Styles'; 
import Icon from "react-native-vector-icons/Ionicons"; 
import { HeaderText } from '../components/HeaderText';

function DietarySummary({ bmiScore, dietarySuggestions, suggestedPrograms }) {
    const data = {
        bmiScore: 23.1,
        diet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        program: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        
      };
  return (
    <View style={globalStyles.container}>
          <TouchableOpacity
        style={globalStyles.backIcon}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>

      {/* <HeaderText title="Status" /> */}

      

      

        {/* dietary summary section */}
      <Text style={globalStyles.titleText}>Dietary Summary</Text>
      <View style={[globalStyles.summaryContainer,{marginBottom:50}]}>
        <View style={globalStyles.summaryItem}>
          <Text style={globalStyles.summaryLabel}>BMI Score:</Text>
          <Text style={globalStyles.summaryValue}>{data.bmiScore}</Text>
        </View>
        <View style={globalStyles.summaryItem}>
          <Text style={globalStyles.summaryLabel}>Dietary Suggestions:</Text>
          <Text style={globalStyles.summaryValue}>{data.diet}</Text>
        </View>
        <View style={globalStyles.summaryItem}>
          <Text style={globalStyles.summaryLabel}>Suggested Programs/Workouts:</Text>
          <Text style={globalStyles.summaryValue}>{data.program}</Text>
        </View>
      </View>

    </View>
  );
}

export default DietarySummary;
