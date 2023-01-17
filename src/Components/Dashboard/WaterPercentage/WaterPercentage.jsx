import { View, Text } from "react-native"
import React from "react"
import { styles } from "./WaterPercentage.styles"

export default function WaterPercentage({ percentage }) {
	return (
		<View style={styles.container}>
			<Text
				style={{
					color: "#ffffff",
					position: "absolute",
					zIndex: 9,
					left: 50,
					top: 8,
				}}
			>
				%{percentage} Done
			</Text>
			<View
				style={[styles.innerContainer, { width: percentage + "%" }]}
			></View>
		</View>
	)
}
