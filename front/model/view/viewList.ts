// import React from 'react';
// import { View, Text } from 'react-native';
// import { getSpotViewModel } from './viewModelList';

// const MainView = () => {
//   // Obtenir les données des spots
//   const spots = getSpotViewModel();

//   // Afficher chaque spot dans une liste
//   const spotElements = spots.map((spot, index) => (
//     <View key={index}>
//       <Text>Nom: {spot.nom}</Text>
//       <Text>Lieu: {spot.lieu}</Text>
//       <Text>Image: {spot.image}</Text>
//     </View>
//   ));

//   return (
//     <View>
//       {/* Utiliser une expression ternaire pour afficher spotElements s'il y a des éléments, sinon afficher un message */}
//       {spotElements.length > 0 ? spotElements : <Text>Pas de spots disponibles</Text>}
//     </View>
//   );
// };

// export default MainView;
