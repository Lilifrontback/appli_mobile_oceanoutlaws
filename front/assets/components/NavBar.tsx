

import React from 'react'; // Importation de React depuis la bibliothèque react
import { View, Text, StyleSheet } from 'react-native'; // Importation des composants View, Text et StyleSheet depuis la bibliothèque react-native

interface NavBarProps { // Définition d'une interface TypeScript pour les props du composant NavBar
  title: string; // La propriété 'title' doit être une chaîne de caractères
}

 function NavBar({ title }: NavBarProps) { // Définition de la fonction de composant NavBar. Elle accepte un objet props avec une propriété 'title'
  return ( // Rendu du composant NavBar
    <View style={styles.container}> {/* Utilisation du composant View avec un style spécifié par la variable 'styles.container' */}
      <Text style={styles.title}>{title}</Text> {/* Utilisation du composant Text pour afficher le titre passé via les props */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#007bff",
      alignItems: "center",
      justifyContent: "center",
      width: "100%", // Utiliser toute la largeur de l'écran
      position: "absolute", // Position absolue pour se placer au-dessus du reste du contenu
      top: 0, // Positionner au sommet de l'écran
      zIndex: 1, // Assurer que la NavBar soit au-dessus du contenu
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
  });
  


export default NavBar