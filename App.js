import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateHeartRateLimits = (age) => {
    if(!age){
    setLowerLimit('');
    setUpperLimit('');
    } else {
        const lower = Math.round((220 - age) * 0.65);
        const upper = Math.round((220 - age) * 0.85);
        setLowerLimit(lower.toString());
        setUpperLimit(upper.toString());
      }
  };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        onChangeText={(text) => {
          setAge(text);
          calculateHeartRateLimits(text);
        }}
        keyboardType="numeric"
        value={age}
      />
      <Text>Limits:</Text>
      <Text>{lowerLimit} - {upperLimit}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


