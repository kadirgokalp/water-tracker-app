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
import { styles } from "./RegisterScreen.styles"
import PageTitle from "../../Components/Common/PageTitle/PageTitle"
import { Icon } from "react-native-vector-icons/Feather"
import CustomButton from "../../Components/Common/Button/CustomButton"

export default function RegisterScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<Image
					source={require("../../Assets/Images/register_page.png")}
					style={{ width: 300, height: 300 }}
				/>
			</View>
			<Text style={styles.pageTitle}>Register Screen</Text>
			{/* <Icon name="rocket" /> */}
			<View style={styles.register}>
				<TextInput placeholder="Name :" />
			</View>
			<View style={styles.register}>
				<TextInput placeholder="Age :" />
			</View>
			<CustomButton buttonTitle="REGISTER" />
		</SafeAreaView>
	)
}
