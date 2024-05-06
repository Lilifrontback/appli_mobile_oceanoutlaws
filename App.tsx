
import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from "./view/homeView";
import {SurfView} from "./view/surfView";

type NavigationProps = {
	navigation: any; // Remplacez 'any' par le type approprié si vous connaissez le type de la navigation
  };
const Stack = createNativeStackNavigator();


export default function App({ navigation }: NavigationProps ) {

	return (
		
			<NavigationContainer>
			  <Stack.Navigator >
				<Stack.Screen name="HomeView" component={HomeView} />
				<Stack.Screen
				  name="SurfView"
				  component={SurfView} />
			  </Stack.Navigator>
			</NavigationContainer>
		
	  ); }
 