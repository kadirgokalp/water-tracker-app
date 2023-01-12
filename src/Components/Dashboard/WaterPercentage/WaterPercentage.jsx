import { View, Text } from "react-native"
import React from "react"
import { styles } from "./WaterPercentage.styles"

export default function WaterPercentage({ percentage }) {
	return (
		<View style={styles.container}>
			<View style={[styles.innerContainer, { width: percentage + "%" }]}>
				<Text style={{ color: "#fff" }}>%{percentage} Done</Text>
			</View>
		</View>
	)
}
