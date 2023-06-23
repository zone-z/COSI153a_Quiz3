import React from 'react';
import { View, Text } from 'react-native';
import { useValue } from './ValueContext';

const BMIPage = () => {
  const {currentValue} = useValue();
  const weight = currentValue.weight;
  const height = currentValue.height;
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24 }}> BMI calculator </Text>
      <Text style={{ fontSize: 24 }}> height: {height} </Text>
      <Text style={{ fontSize: 24 }}> weight: {weight} </Text>
      <Text style={{ fontSize: 24 }}> bmi: {(weight / 2.2046244202) / ((height / 39.37007874) ** 2)} </Text>
    </View>
  );
};

export default BMIPage;