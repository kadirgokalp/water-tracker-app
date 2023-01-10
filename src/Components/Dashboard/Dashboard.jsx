import { View, Text } from "react-native"
import { React, useState } from "react"
import { styles } from "./Dashboard.styles"
import DateTimePicker from "@react-native-community/datetimepicker"

const Dashboard = () => {
	const [date, setDate] = useState(new Date())
	const [mode, setMode] = useState("date")
	const [show, setShow] = useState(false)
	const [text, setText] = useState("Empty")

	return (
		<View style={styles.outerContainer}>
			<Text>Dashboard</Text>
		</View>
	)
}

export default Dashboard
