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
import { styles } from "./Register.styles"
import PageTitle from "../../Components/Common/PageTitle/PageTitle"
import Icon from "react-native-vector-icons/FontAwesome"
import AgeIcon from "react-native-vector-icons/Octicons"

import CustomButton from "../Common/Button/CustomButton"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Register({ navigation }) {
	const [userName, setUserName] = useState("")
	const [age, setAge] = useState("")

	AsyncStorage.setItem("keepLoggedIn", JSON.stringify(true))
	function handleNavigate() {
		navigation.navigate("Goal")
	}

	function handleOnRegister() {
		AsyncStorage.setItem("userName", userName)
		AsyncStorage.setItem("age", age)
		handleNavigate()
	}

	// console.log("Name storage : ", nameStorage)
	console.log("username in register : ", userName)

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
					<TextInput
						value={userName}
						onChangeText={setUserName}
						placeholder="Name :"
					/>
				</View>

				<View style={styles.register}>
					<AgeIcon
						name="number"
						size={18}
						color="#333333"
						style={styles.icon}
					/>
					<TextInput
						placeholder="Age :"
						value={age}
						onChangeText={setAge}
					/>
				</View>
				<CustomButton
					buttonTitle="REGISTER"
					onPress={handleOnRegister}
				/>
			</SafeAreaView>
		</View>
	)
}
