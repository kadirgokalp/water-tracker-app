//React
import { React, useState, useEffect } from "react"

// React Native
import { View, Text, Image, SafeAreaView, TextInput } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Library
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// Style
import { styles } from "./Goal.styles"

// Common Components
import CustomButton from "../Common/Button/CustomButton"

export default function Goal({ navigation }) {
	// useState
	const [goal, setGoal] = useState("")

	// useEffect
	useEffect(() => {
		AsyncStorage.getItem("goal").then((goal) => setGoal(goal))
	}, [])

	// Function
	function handleNavigate() {
		AsyncStorage.setItem("goal", goal)
		AsyncStorage.setItem("keepLoggedIn", JSON.stringify(false))
		navigation.navigate("Dashboard")
	}

	return (
		<View style={styles.outerContainer}>
			<SafeAreaView style={styles.innerContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={require("../../Assets/Images/goal_page.png")}
						style={{ width: 300, height: 300 }}
					/>
				</View>
				<Text style={styles.pageTitle}>Goals Screen</Text>
				{/* <Icon name="rocket" /> */}
				<View style={styles.register}>
					<Icon
						name="cup-water"
						size={18}
						color="#333333"
						style={styles.icon}
					/>
					<TextInput
						value={goal}
						onChangeText={setGoal}
						placeholder="How many liters do you intend to drink today?"
					/>
				</View>

				<CustomButton buttonTitle="CANCEL" color={"#AA0000"} />

				<CustomButton
					buttonTitle="GET STARTED"
					onPress={handleNavigate}
				/>
			</SafeAreaView>
		</View>
	)
}
