import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
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
