import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assurez-vous d'importer correctement les icônes Ionicons depuis expo/vector-icons

interface SearchBarProps {
  placeholder: string;
  
}

function SearchBar(){
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} >
        <Ionicons name="search" size={24} color="#007bff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    // Ajoutez un espace en haut pour laisser de la place à la NavBar
    zIndex: 1, // Assurez-vous que le SearchBar soit en-dessous de la NavBar
  },
  input: {
    backgroundColor:'black',
    display:'flex',
    marginBottom:'100%',
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    marginBottom:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBar;
