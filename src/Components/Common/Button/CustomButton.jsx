import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { styles } from "./CustomButton.styles"

export default function Button({ buttonTitle, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{buttonTitle}</Text>
		</TouchableOpacity>
	)
}
