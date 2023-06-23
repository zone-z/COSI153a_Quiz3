import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useValue } from './ValueContext';

const ProfilePage = () => {

  const {currentValue, setCurrentValue} = useValue();
  const [name, setName] = useState(currentValue.name);
  const [age, setAge] = useState(currentValue.age);
  const [weight, setWeight] = useState(currentValue.weight);
  const [height, setHeight] = useState(currentValue.height);

  const saveProfile = () => {
    const data = {
      name,
      age: age,
      weight: weight,
      height: height,
    };
    setCurrentValue(data);
  };

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 24}}>
        {"currentValue = {\"name\": \""}{name}{"\", \"age\": "}{age}
        {", \"weight\": "}{weight}{", \"height\": "}{height}{"}"}
      </Text>
      <View style={{padding:50, flexDirection:"column"}}>
        <View style={{padding:10, flexDirection:"row", justifyContent:'space-around'}} >
          <Text style={{ fontSize: 24 }}> name </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={{fontSize: 24, backgroundColor:"lightgreen"}}
          />
        </View>
        <View style={{padding:10, flexDirection:"row", justifyContent:'space-around'}} >
          <Text style={{fontSize: 24}}> age </Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            style={{fontSize: 24, backgroundColor:"lightblue"}}
          />
        </View>
        <View style={{padding:10, flexDirection:"row", justifyContent:'space-around'}} >
          <Text style={{fontSize: 24}}> weight </Text>
          <TextInput
            value={weight}
            onChangeText={setWeight}
            style={{fontSize: 24, backgroundColor:"pink"}}
          />
        </View>
        <View style={{padding:10, flexDirection:"row", justifyContent:'space-around'}} >
          <Text style={{fontSize: 24}}> height </Text>
          <TextInput
            value={height}
            onChangeText={setHeight}
            style={{fontSize: 24, backgroundColor:"aqua"}}
          />
        </View>
      </View>
      <Button title="SAVE PROFILE" onPress={saveProfile} />
    </View>
  );
};

export default ProfilePage;