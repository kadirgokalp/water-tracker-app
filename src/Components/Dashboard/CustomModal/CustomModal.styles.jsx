import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: 400,
		width: 400,
	},
	modalContainer: {
		margin: 20,
		backgroundColor: "#8B8B8B",
		borderRadius: 10,
		padding: 30,
		paddingRight: 50,
		paddingLeft: 50,
		alignItems: "center",
	},
	modalText: {
		textAlign: "center",
		color: "#FFFFFF",
	},
	button: {
		borderRadius: 5,
		padding: 8,
		paddingHorizontal: 18,
		elevation: 2,
		backgroundColor: "#ff0000",
		marginTop: 10,
		width: "40%",
	},
	newButton: {
		borderRadius: 5,
		padding: 8,
		paddingHorizontal: 18,
		elevation: 2,
		backgroundColor: "#1AAF28",
		marginTop: 10,
		width: "40%",
		marginLeft: 20,
	},
	buttonContainer: {
		flexDirection: "row",
	},
})
