import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import SurfViewModel from "./viewModel/surfViewModel";

export default function App() {
	const [count, setCount] = useState(0);
	const [surf, setSurf] = useState<string | string[]>([]);

	useEffect(() => {
		const surfViewModel = new SurfViewModel();
		const data: string | string[] = surfViewModel.showData(); // Définir explicitement le type de data
		setSurf(data);
	}, []);

	return (
		<View style={styles.container}>
			<Text>{count}</Text>
			<Button title="Increment" onPress={() => setCount(count + 1)} />
			{Array.isArray(surf) ? (
				surf.map((item, index) => <Text key={index}>{item}</Text>)
			) : (
				<Text>{surf}</Text>
			)}
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
