import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {Button, Image, StyleSheet, Text, View} from "react-native";
import SurfViewModel from "./viewModel/surfViewModel";

export default function App() {
	const [surf, setSurf] = useState<
		{records: {[key: string]: string}[]}[] | null
	>(null);

	useEffect(() => {
		const surfViewModel = new SurfViewModel();
		const data = surfViewModel.showData();
		setSurf(data);
	}, []);

	return (
		<View style={styles.container}>
			{surf !== null ? (
				<View style={styles.cardsContainer}>
					{surf.map((item, index) => (
						<View
							key={index}
							style={[styles.card, index !== 0 && styles.cardMarginTop]}
						>
							{item.records.map((record, recordIndex) => (
								<View key={recordIndex} style={styles.record}>
									<Text style={styles.recordTitle}>
										Surf Break: {record["Surf Break"]}
									</Text>
									<Text style={styles.recordText}>
										Address: {record.Address}
									</Text>
									<Image source={{uri: record.Photos}} style={styles.image} />
								</View>
							))}
						</View>
					))}
				</View>
			) : (
				<Text>Loading...</Text>
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
	cardsContainer: {
		alignItems: "center",
	},
	card: {
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderRadius: 8,
		width: "90%",
	},
	cardMarginTop: {
		marginTop: 10,
	},
	record: {
		marginVertical: 5,
	},
	recordTitle: {
		fontWeight: "bold",
	},
	recordText: {
		fontSize: 14,
	},
	image: {
		width: 200, // Ajustez la largeur et la hauteur selon vos besoins
		height: 200,
		marginVertical: 10,
		resizeMode: "cover", // Ajustez le mode de redimensionnement selon vos besoins
	},
});
