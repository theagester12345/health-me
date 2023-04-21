import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../styles/Styles';
import { fetchDietarySuggestion } from '../DB/Firebase';

const DietarySummary = ({ route, navigation }) => {
  const params = route.params;
  const [suggestions, setSuggestions] = useState([]);
  const [programTitle, setProgramTitle] = useState('');
  const [program, setProgram] = useState('');
  const [exerciseRate, setExerciseRate] = useState('');

  useEffect(() => {
    fetchDietarySuggestion(params.data.firebaseKey)
      .then((data) => {
        const item = data[params.data.firebaseKey];
        setSuggestions([
          { label: item.nutrition_grp_1, value: item.nutrition_grp_1_example },
          { label: item.nutrition_grp_2, value: item.nutrition_grp_2_example },
          { label: item.nutrition_grp_3, value: item.nutrition_grp_3_example },
          { label: item.nutrition_grp_4, value: item.nutrition_grp_4_example },
          { label: item.nutrition_grp_5, value: item.nutrition_grp_5_example },
        ]);

        setProgramTitle(item['title ']);
        setProgram(item.program);
        setExerciseRate(item.exercise_rate);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={globalStyles.container}>
        <TouchableOpacity
          style={[globalStyles.backIcon, { marginBottom: 20 }]}
          onPress={() => navigation.goBack()} // Navigate back to previous screen
        >
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>

        <Text style={[globalStyles.titleText, styles.bmiTitle]}>BMI Score:</Text>
        <Text style={[globalStyles.summaryLabel, { marginBottom: 32 }]}>
          {params.bmi}. You are currently{' '}
          <Text style={{ color: params.data.color }}>{params.data.label.toLowerCase()}</Text>
        </Text>

        <Text style={styles.workoutTitle}>Dietary Suggestions</Text>
        <View style={globalStyles.summaryContainer}>
          {suggestions.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableLabel}>{item.label.toUpperCase()}</Text>
              <Text style={styles.tableValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.workoutTitle}>Program</Text>
        <Text style={styles.workoutSubtitle}>{programTitle}</Text>
        <Text style={styles.workoutText}>{program}</Text>

        <Text style={styles.workoutSubtitle}>Exercise Rate:</Text>
        <Text style={[styles.workoutText, styles.footer]}>{exerciseRate}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 16,
    paddingBottom: 40,
  },
  bmiTitle: {
    paddingTop: 72,
    marginBottom: 0,
  },
  workoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  workoutSubtitle: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#fff',
    marginBottom: 8,
  },
  workoutText: {
    fontSize: 15,
    lineHeight: 21,
    color: '#eee',
    marginBottom: 16,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tableLabel: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    paddingEnd: 16,
  },
  tableValue: {
    flex: 1,
    color: '#fff',
    textAlign: 'right',
  },
  footer: {
    marginBottom: 20,
  },
});

export default DietarySummary;
