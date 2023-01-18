// React
import React from "react"
// React Native
import { View, Text, TouchableOpacity } from "react-native"
// Style
import { styles } from "./CustomButton.styles"

export default function Button({ buttonTitle, onPress, color, isDisabled }) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				color ? { backgroundColor: color } : null,
				isDisabled ? { opacity: 0.5 } : null,
			]}
			onPress={onPress}
			disabled={isDisabled}
		>
			<Text style={styles.buttonText}>{buttonTitle}</Text>
		</TouchableOpacity>
	)
}
