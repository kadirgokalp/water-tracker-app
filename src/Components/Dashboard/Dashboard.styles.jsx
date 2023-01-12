import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: "#00000011",
	},
	calendarContainer: {
		height: "40%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 70,
	},
	waterPercentageContainer: {
		flexDirection: "row",
	},
	editWater: {
		backgroundColor: "#0095FF",
		height: 40,
		marginTop: 20,
		width: 40,
		marginLeft: -10,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	editWaterText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "500",
	},
	icon: {
		marginRight: 10,
		marginTop: 4,
	},

	dashboard: {
		borderRadius: 10,
		width: 300,
	},
	waterCardContainer: {
		width: "100%",
		height: 100,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
})
