import React from "react";
import { Text } from "react-native";
import { globalStyles } from "../styles/Styles";

//Predefined Header Text
export function HeaderText({ title, style }) {
  return <Text style={[globalStyles.headerText, style]}>{title}</Text>;
}
