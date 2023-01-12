import React from "react"
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

export default function Goal({ navigation }) {
	function handleNavigate() {
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
					<TextInput placeholder="How many liters do you intend to drink today?" />
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
