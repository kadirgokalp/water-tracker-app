// React
import React from "react"
// React Native
import { Text, TouchableOpacity } from "react-native"
// Library
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
// Style
import { styles } from "./WaterCard.styles"

export default function WaterCard({ title, onPress }) {
	return (
		<TouchableOpacity style={styles.cardContainer} onPress={onPress}>
			<Icon name="cup-water" size={25} color="#FFFFFF" />
			<Text style={styles.cardText}>{title}</Text>
		</TouchableOpacity>
	)
}
