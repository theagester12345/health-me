import React from 'react';
import { View, Text, ImageBackground,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Styles.js';
import { HeaderText } from '../components/HeaderText';
import Icon from "react-native-vector-icons/Ionicons"; 

const InstructionPage = ({route, navigation}) => {
    //Obtain id passed from home page
    const {workout} = route.params;
    // console.log('WorkOut id:'+ id);

    //Array of Workouts
    // const Instruction= [
    //     { id: 1, title: 'Wall-Sit', image: require('../../assets/workout/wall-sit.png') , cat:'Leg Workout' },
    //     {id:2, title:'Jumping Jack', image:require('../../assets/workout/jumping-jack.gif'), cat:'Leg Workout'},
    //     {id:3, title:'Spider Plank', image:require('../../assets/workout/spider-plank.gif'), cat:'Core Workout'},
    //     {id:4, title:'Bicycle Crunch', image:require('../../assets/workout/bicycle-crunch.gif'), cat:'Core Workout'},
    //     {id:5, title:'Archer Push-Up', image:require('../../assets/workout/archer-push-up.gif'), cat:'Chest Workout'},
    //     {id:6, title:'Diamond Push-Up', image:require('../../assets/workout/diamond-push-up.gif'), cat:'Chest Workout'},
    //     {id:7, title:'Seated Toe-Touches', image:require('../../assets/workout/seated-toe-touches.gif'), cat:'Back Workout'},
    //     {id:8, title:'Bent Over Dumbbell Row', image:require('../../assets/workout/bent-over-dumbbell-row.gif'), cat:'Back Workout'},
    //     {id:9, title:'Body Ups', image:require('../../assets/workout/body-ups.gif'), cat:'Arm Workout'},
    //     {id:10, title:'Chair Dips', image:require('../../assets/workout/chair-dips.gif'), cat:'Arm Workout'},
    //   ];

      //Using the find Function to Determine the Workout clicked From Previous screen
      // const workout = Instruction.find((workout)=> workout.id === id);
  return (
    <View style={globalStyles.container}>
       <TouchableOpacity
        style={[globalStyles.backIcon,{marginBottom:20}]}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>

      <HeaderText title={workout.cat + " WorkOut Instructions"} />
      <ImageBackground
        style={globalStyles.instructionPageBackgroundImage}
        source={workout.image}
        resizeMode="contain" >
    
        <Text style={globalStyles.instructionPageTitleText}>{workout.title}</Text>
        
       
      </ImageBackground>

      <View style={globalStyles.paragraph}>
        {/* Beginner */}
      <View style={{ 
        padding: 5,
        backgroundColor: 'green',
        marginBottom:10,
        borderRadius: 2,}}>
          <Text style={{ color: '#fff' }}>Beginner</Text>
          <Text style={{ color: '#fff', marginLeft: 5 }}>4 sets x 8 reps</Text>
        </View>

        {/* intermediary */}

        <View style={{ 
        padding: 5,
        backgroundColor: '#f0ba0f',
        marginBottom:10,
        borderRadius: 2,}}>
          <Text style={{ color: '#fff' }}>Intermediary</Text>
          <Text style={{ color: '#fff', marginLeft: 5 }}>4 sets x 12 reps</Text>
        </View>

        {/* Expert */}

        <View style={{ 
        padding: 5,
        backgroundColor: 'red',
        marginBottom:10,
        borderRadius: 2,}}>
          <Text style={{ color: '#fff' }}>Expert</Text>
          <Text style={{ color: '#fff', marginLeft: 5 }}>4 sets x 15 reps</Text>
        </View>
      </View>
    </View>
  );
};



export default InstructionPage;
