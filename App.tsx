import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import HelloWorldViewModel from "./viewModel/surfViewModel";

export default function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Créer une instance du ViewModel
		const helloWorldViewModel = new HelloWorldViewModel();

		// Afficher le message "Hello, World!" dans la console
		helloWorldViewModel.showMessage();
	}, []); // Utilisez une dépendance vide pour que cela s'exécute une seule fois après le montage

	return (
		<View style={styles.container}>
			<Text>Hello, World!</Text> {/* Affiche le "Hello, World!" */}
			<Text>{count}</Text>
			<Button title="Increment" onPress={() => setCount(count + 1)} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
