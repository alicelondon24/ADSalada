import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const EscolhaScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			

			

			<Text style={styles.sectionTitle}>Saladas do Dia</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<Link href="/salada1">
				<Image source={require('../../images/salada1.jpg')} style={styles.carouselItem} />
			</Link>
			<Link href="/salada2">
				<Image source={require('../../images/salada3.jpg')} style={styles.carouselItem} />
			</Link>
			<Link href="/salada3">
				<Image source={require('../../images/salada5.jpeg')} style={styles.carouselItem} />
			</Link>	
			<Link href="/salada4">	
				<Image source={require('../../images/salada4.png')} style={styles.carouselItem} />
			</Link>	
			<Link href="/salada5">
				<Image source={require('../../images/salada2.jpg')} style={styles.carouselItem} />
			</Link>
			</ScrollView>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<Image source={require('../../images/coco.jpeg')} style={styles.carouselItem2} />
				<Image source={require('../../images/agua.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/mate.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/caju.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/melancia.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/laranja.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/icetea.jpg')} style={styles.carouselItem2} />
			</ScrollView>
					

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#c6deab',
		height: '915'
	},

	carouselItem: {
		width: 350,
		height: 250,
		margin: 10,
		borderRadius: 10,
	},
	carouselItem2: {
		width: 150,
		height: 350,
		margin: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'white',
	},
	Icons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#FE5F00',
		paddingVertical: 10,
		color: 'white',
	},
	apMarkerAlt: {
		color: 'black',
		padding: 10,
	},
	sectionTitle: {
		fontSize: 50,
		fontWeight: 'bold',
		margin: 10,
		color: 'white',
	},
});

export default EscolhaScreen;
