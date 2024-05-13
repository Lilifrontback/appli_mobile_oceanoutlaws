import { Button, Image, StyleSheet, Text, View } from "react-native";


type NavigationProps = {
	navigation: any; // Remplacez 'any' par le type approprié si vous connaissez le type de la navigation
  };
const HomeView = ({ navigation } : NavigationProps) => {
	
	return (
		<View style={styles.container}>
		  <Image
			source={require('../assets/surfer-1836366_640.png')} // Remplacez le chemin par l'emplacement de votre image
			// style={styles.image}
			resizeMode="cover"
		  />
		  <Image  source={require('../assets/icone.png')}
		  style={{
            resizeMode: 'cover',
            height: 100,
            width: 200,
          }}
		  />
		  <Button
        title="Go to SurfView"
        onPress={() => navigation.navigate("SurfView")}
      />
		</View>
		
	  );
	};
	
	
	
export default HomeView;

const styles = StyleSheet.create({
	  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#07074c',
		
	  },
	//   image: {
	// 	width: 200,
	// 	height: 200,
	// 	marginBottom: 20,
		
	//   },
	  appName: {
		fontSize: 24,
		fontWeight: 'bold',
	  },
	});