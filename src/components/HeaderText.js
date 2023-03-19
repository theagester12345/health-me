import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../styles/Styles';

export function HeaderText({ title }) {
  return (
    <Text style={globalStyles.headerText}>{title}</Text>
  );
}
