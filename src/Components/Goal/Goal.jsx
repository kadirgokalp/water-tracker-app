import { React, useState, useEffect } from "react"
import {
	View,
	Text,
	StyleSheet,
	Image,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native"
import { styles } from "./Goal.styles"

import CustomButton from "../Common/Button/CustomButton"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Goal({ navigation }) {
	const [goal, setGoal] = useState("")

	function handleNavigate() {
		AsyncStorage.setItem("goal", goal)
		AsyncStorage.setItem("keepLoggedIn", JSON.stringify(false))
		navigation.navigate("Dashboard")
	}

	useEffect(() => {
		AsyncStorage.getItem("goal").then((goal) => setGoal(goal))
	}, [])
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
