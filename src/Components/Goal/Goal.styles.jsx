import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	innerContainer: {
		flex: 1,
		justifyContent: "center",
	},
	imageContainer: {
		alignItems: "center",
	},
	pageTitle: {
		fontSize: 28,
		fontWeight: "500",
		color: "#333333",
		marginBottom: 30,
		marginLeft: 50,
	},
	register: {
		flexDirection: "row",
		borderBottomColor: "#CCCCCC",
		borderBottomWidth: 1,
		paddingBottom: 8,
		marginBottom: 25,
	},
	icon: {
		marginRight: 10,
		marginTop: 4,
	},
})
