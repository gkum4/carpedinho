import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import imageBackground from '../../assets/backgroundImage.png';
import logo from '../../assets/logo.png';
import styles from './styles';

const Informations = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <ImageBackground source={imageBackground} style={styles.imageBackground} >

      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>

          <Image source={logo} style={{ width: 80, height: 80, marginBottom: 20 }} />

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Primeiro, precisamos de algumas informações
            </Text>
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              placeholder ={'Digite seu nome'}
              style={styles.input}
              placeholderTextColor="#cecece"
            />
            <TextInput
              placeholder ={'Digite sua idade'}
              style={styles.input}
              placeholderTextColor="#cecece"
            />
            <TextInput
              placeholder ={' Crie sua senha'}
              style={styles.input}
              placeholderTextColor="#cecece"
            />
          </View>

          <View style={styles.containerCheckBox}>
            <View style={styles.checkBoxIconContainer}>
              <CheckBox
                checkedIcon={<Icon name="check-circle" size={20} color="#fff" />}
                uncheckedIcon={<Icon name="circle-o" size={20} color="#fff" />}
                checked={checked}
                onPress={() => checked ? setChecked(false) : setChecked(true)}
              />
            </View>
            <View style={styles.checkBoxTextContainer}>
              <Text style={styles.checkBoxText}>
                Marque essa opcão caso seja psicólogo e deseje utilizar o aplicativo para fins de tratamento aos seus pacientes
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => checked ? navigation.navigate('PatientMenu') : navigation.navigate('Lock')}
            style={styles.containerButton}
          >
            <Text style={styles.containerText3}>Feito</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

  </ImageBackground>
  );
}

export default Informations;
