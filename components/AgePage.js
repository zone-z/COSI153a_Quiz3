import React from 'react';
import { View, Text } from 'react-native';
import { useValue } from './ValueContext';

const AgePage = () => {
  const {currentValue} = useValue();
  const age = currentValue.age;
  return (
    <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24 }}> Age calculator </Text>
        <Text style={{ fontSize: 24 }}> age in years: {age} </Text>
        <Text style={{ fontSize: 24 }}> age in weeks: {age * 52} </Text>
        <Text style={{ fontSize: 24 }}> age in days: {age * 365.25} </Text>
    </View>
  );
};

export default AgePage;