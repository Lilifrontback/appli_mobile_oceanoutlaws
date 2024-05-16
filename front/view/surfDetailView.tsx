import React, {useEffect, useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import SurfViewModel from "../viewModel/surfViewModel";

type NavigationProps = {
	route: {params: {surfBreakName: string}};
};

const SurfDetailView = ({route}: NavigationProps) => {
	const {surfBreakName} = route.params;
	const [surfRecord, setSurfRecord] = useState<SurfRecord | null>(null);

	useEffect(() => {
		const fetchSurfRecord = async () => {
			try {
				const surfModel = new SurfViewModel();
				const data = await surfModel.showData();
				if (data) {
					const flatData = data.flat();
					const surfRecordDetails = flatData.find((recordContainer) =>
						recordContainer.records.some(
							(record) => record.SurfBreak === surfBreakName,
						),
					);
					if (surfRecordDetails) {
						setSurfRecord(
							surfRecordDetails.records.find(
								(record) => record.SurfBreak === surfBreakName,
							) || null,
						);
					}
				}
			} catch (error) {
				console.error(
					"Erreur lors de la récupération des détails du surfRecord :",
					error,
				);
			}
		};

		fetchSurfRecord();
	}, [surfBreakName]);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: "column",
			backgroundColor: "#FFFFFF",
			alignItems: "center",
			justifyContent: "center",
		},
		card: {
			padding: 10,
			borderRadius: 8,
			width: "100%",
		},
		record: {
			backgroundColor: "#F0F0F0",
			textAlign: "center",
			marginVertical: 5,
			marginBottom: "10%",
		},
		recordTitle: {
			fontWeight: "bold",
			textAlign: "center",
		},
		recordText: {
			fontSize: 14,
			textAlign: "center",
		},
		image: {
			width: "100%",
			height: 200,
			marginVertical: 10,
			resizeMode: "cover",
		},
	});

	return (
		<View style={styles.container}>
			{surfRecord ? (
				<View style={styles.card}>
					<View style={styles.record}>
						<Text style={styles.recordTitle}>
							Surf Break: {surfRecord.SurfBreak}
						</Text>
						<Text style={styles.recordText}>Address: {surfRecord.Address}</Text>
            <Text style={styles.recordText}>coordonnées GPS: {surfRecord.Coordonnées}</Text>
            <Text style={styles.recordText}>Données complémentaires: {surfRecord.Donnéessup}</Text>
						<Image source={{uri: surfRecord.Photos}} style={styles.image} />
					</View>
				</View>
			) : (
				<Text>Loading...</Text>
			)}
			<StatusBar style="auto" />
		</View>
	);
};

export default SurfDetailView;
