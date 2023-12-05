import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Background Image */}
			<Image source={require('../images/capa.jpg')} style={styles.backgroundImage} />
			<Text style={styles.headerText}>ADSalada!</Text>
			<TouchableOpacity style={styles.nextButton}>
				<Link href="/home">
					<Text style={styles.buttonText}>Faça seu pedido</Text>
				</Link>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
	},

	headerText: {
		fontSize: 80,
		fontWeight: 'bold',
		color: 'white',
	},
	nextButton: {
		backgroundColor: '#3c6b36',
		padding: 15,
		borderRadius: 10,
		position: 'absolute',
		bottom: '10%',
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
	},
});

export default HomeScreen;
