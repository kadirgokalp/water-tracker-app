import { View, Text } from "react-native"
import React from "react"
import { styles } from "./WaterPercentage.styles"

export default function WaterPercentage({ percentage, amount, color }) {
	return (
		<View style={styles.container}>
			<Text
				style={{
					color: "#ffffff",
					position: "absolute",
					zIndex: 9,
					left: 30,
					top: 8,
				}}
			>
				{`%${percentage} Done | ${amount} ml`}
			</Text>
			<View
				style={[
					styles.innerContainer,
					{ width: percentage + "%" },
					{ backgroundColor: color },
				]}
			></View>
		</View>
	)
}
