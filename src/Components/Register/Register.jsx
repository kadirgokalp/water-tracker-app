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
import { styles } from "./Register.styles"
import PageTitle from "../../Components/Common/PageTitle/PageTitle"
import Icon from "react-native-vector-icons/FontAwesome"
import AgeIcon from "react-native-vector-icons/Octicons"

import CustomButton from "../Common/Button/CustomButton"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Register({ navigation }) {
	AsyncStorage.setItem("keepLoggedIn", JSON.stringify(true))
	function handleNavigate() {
		navigation.navigate("Goal")
	}

	return (
		<View style={styles.outerContainer}>
			<SafeAreaView style={styles.innerContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={require("../../Assets/Images/register_page.png")}
						style={{ width: 300, height: 300 }}
					/>
				</View>
				<Text style={styles.pageTitle}>Register Screen</Text>
				{/* <Icon name="rocket" /> */}
				<View style={styles.register}>
					<Icon
						name="user"
						size={18}
						color="#333333"
						style={styles.icon}
					/>
					<TextInput placeholder="Name :" />
				</View>

				<View style={styles.register}>
					<AgeIcon
						name="number"
						size={18}
						color="#333333"
						style={styles.icon}
					/>
					<TextInput placeholder="Age :" />
				</View>
				<CustomButton buttonTitle="REGISTER" onPress={handleNavigate} />
			</SafeAreaView>
		</View>
	)
}
