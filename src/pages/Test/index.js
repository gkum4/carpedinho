import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { getMyNotes, saveNewNote } from '../../services/AsyncStorageFunctions';

export default function Test() {
  const [myNotes, setMyNotes] = useState([]);

  useEffect(() => {
    getMyNotes().then((notes) => setMyNotes(notes));
  }, []);

  async function handleButtonPress() {
    const newNote = await saveNewNote('11 de Abril', 'Tretei', 'Tretei com meu pai', ['raiva', 'tristeza']);
    setMyNotes([...myNotes, newNote]);
  }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
      <Text>{JSON.stringify(myNotes)}</Text>
      <Button title="Adicionar" onPress={handleButtonPress}/>
      <Button title="Clear" onPress={async () => {
        await AsyncStorage.clear();
        setMyNotes([]);
      }}/>
    </View>
  );
}
