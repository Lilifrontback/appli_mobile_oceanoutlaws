import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import SurfViewModel from "./viewModel/surfViewModel";

export default function App() {
	const [count, setCount] = useState(0);
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
			<Text>{count}</Text>
			<Button title="Increment" onPress={() => setCount(count + 1)} />
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
									<Text style={styles.recordText}>Photos: {record.Photos}</Text>
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
		padding: 10,
		borderRadius: 8,
		width: "90%",
	},
	cardMarginTop: {
		marginTop: 10,
	},
	record: {
		backgroundColor: "gray",
		marginVertical: 5,
	},
	recordTitle: {
		fontWeight: "bold",
	},
	recordText: {
		fontSize: 14,
	},
});
