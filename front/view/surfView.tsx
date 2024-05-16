import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import SurfViewModel from "../viewModel/surfViewModel";
import { StatusBar } from "expo-status-bar";

type NavigationProps = {
	navigation: any; // Remplacez 'any' par le type approprié si vous connaissez le type de la navigation
  };
const SurfView = ({ navigation } : NavigationProps) => {
  const [surf, setSurf] = useState<{ records: { [key: string]: string }[] }[] | null>(null);

  useEffect(() => {
    const surfViewModel = new SurfViewModel();
    const data = surfViewModel.showData();
    setSurf(data);
  }, []);
  const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    cardsContainer: {
        width: "96%",
        alignItems: "center",
    },
    card: {
        padding: 10,
        borderRadius: 8,
        width: "100%",
    },
    cardMarginTop: {
        marginBottom: 0,
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
        textAlign: "center",
    },
});



const handlePress = (surfBreakName: string) => {
  navigation.navigate("SurfViewDetail", { surfBreakName: surfBreakName });
};
  
  return (
    <View style={styles.container}>
      {surf !== null ? (
        <View style={styles.cardsContainer}>
          {surf.map((item, index) => (
            <View key={index} style={[styles.card, index !== 0 && styles.cardMarginTop]}>
              {item.records.map((record, recordIndex) => (
                <View key={recordIndex} style={styles.record}>
                  <Text style={styles.recordTitle}>Surf Break: {record["SurfBreak"]}</Text>
                  <Text style={styles.recordText}>Address: {record.Address}</Text>
                  <Image source={{ uri: record.Photos }} style={styles.image} />
                  <Button
                    title="Go to detail"
                    onPress={() => handlePress(record["SurfBreak"])}
                  />
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
};

export { SurfView };