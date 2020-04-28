import React, { useEffect, useState } from 'react';

import { View, TouchableOpacity, Text, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome'
import backgroundImage from '../../assets/backgroundImage.png';
import { TextInput } from 'react-native-gesture-handler';

const NoteEdit = ({ route }) => {
  const navigation = useNavigation();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  useEffect(() => {
    const { title, description } = route.params;
    setNoteTitle(title);
    setNoteDescription(description);
  }, []);

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <DismissKeyboard>
            <View style={styles.container}>

              <View style={styles.topContainer}>
                <TouchableOpacity
                  style={styles.arrowLeftContainer}
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="arrow-left" size={40} color="#fff"/>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <TouchableOpacity style={styles.doneButtonContainer} onPress={() => navigation.goBack()}>
                    <Text style={styles.doneButtonText}>
                      Feito
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.noteContainer}>
                <TextInput
                  style={styles.noteTitleTextInput}
                  placeholder="Dê um título a esse momento"
                  placeholderTextColor="#cecece"
                  maxLength={30}
                  autoCapitalize="sentences"
                  autoFocus={true}
                  value={noteTitle}
                  onChangeText={(text) => setNoteTitle(text)}
                />
                <TextInput
                  style={styles.noteBodyTextInput}
                  placeholder="Descrição"
                  placeholderTextColor="#cecece"
                  multiline={true}
                  textAlignVertical='top'
                  autoCapitalize="sentences"
                  value={noteDescription}
                  onChangeText={(text) => setNoteDescription(text)}
                />
              </View>
              <TouchableOpacity style={styles.micIconContainer}>
                <Icon name='microphone' size={25} color="#fff" />
              </TouchableOpacity>

            </View>
          </DismissKeyboard>
        </KeyboardAvoidingView>

      </ImageBackground>
    </>
  );
}

export default NoteEdit;
