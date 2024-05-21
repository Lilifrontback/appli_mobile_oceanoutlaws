
import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from "./view/homeView";
<<<<<<< Updated upstream
import {SurfView} from "./view/surfView";
import SurfDetailView from "./view/surfDetailView";

=======
import { SurfView } from "./view/surfView";
import  SurfDetailView  from "./view/surfDetailView";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
>>>>>>> Stashed changes

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
				  <Stack.Screen
				  name="SurfViewDetail"
				  component={SurfDetailView} />
			  </Stack.Navigator>
			</NavigationContainer>
		
	  ); }
 