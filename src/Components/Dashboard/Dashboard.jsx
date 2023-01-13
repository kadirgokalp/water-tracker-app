import { View, Text, TouchableOpacity } from "react-native"
import { React, useState } from "react"
import { styles } from "./Dashboard.styles"
// import DateTimePicker from "@react-native-community/datetimepicker"
import { Calendar } from "react-native-calendars"
import WaterCard from "./WaterCard/WaterCard"
import WaterPercentage from "./WaterPercentage/WaterPercentage"
import UserProfile from "./UserProfile/UserProfile"
import CustomModal from "./CustomModal/CustomModal"
import CustomButton from "../Common/Button/CustomButton"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Dashboard = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const [userName, setUserName] = useState("")
	const [userAge, setUserAge] = useState(0)

	const calendarTheme = {
		calendarBackground: "#6C63FF",
		textSectionTitleColor: "#b6c1cd",
		textSectionTitleDisabledColor: "#d9e1e8",
		selectedDayBackgroundColor: "##4e54c8",
		selectedDayTextColor: "#ffffff",
		todayTextColor: "#c53cb0",
		dayTextColor: "#2d4150",
		textDisabledColor: "#d9e1e8",
		dotColor: "##4e54c8r",
		selectedDotColor: "#ffffff",
		arrowColor: "orange",
		disabledArrowColor: "#d9e1e8",
		monthTextColor: "pink",
		indicatorColor: "blue",
		textDayFontFamily: "monospace",
		textMonthFontFamily: "monospace",
		textDayHeaderFontFamily: "monospace",
		textDayFontWeight: "300",
		textMonthFontWeight: "bold",
		textDayHeaderFontWeight: "300",
		textDayFontSize: 16,
		textMonthFontSize: 16,
		textDayHeaderFontSize: 16,
	}

	function handleOnClickUserInfo() {
		setUserName("Kadir Gokalp")
		setUserAge(23)
		setModalVisible(true)
	}

	function handleLogout() {
		AsyncStorage.setItem("keepLoggedIn", JSON.stringify(false))
		navigation.navigate("Register")
	}

	return (
		<View style={styles.outerContainer}>
			<View style={styles.userAvatar}>
				<UserProfile
					name={"Kadir Gokalp"}
					onPress={handleOnClickUserInfo}
				/>
			</View>
			<View style={styles.calendarContainer}>
				{/* MODAL */}

				<CustomModal
					userName={userName}
					userAge={userAge}
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>

				<Calendar theme={calendarTheme} style={styles.dashboard} />
			</View>
			<View style={styles.waterPercentageContainer}>
				<WaterPercentage percentage={30} />

				<TouchableOpacity style={styles.editWater}>
					<Text style={styles.editWaterText}>5</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.waterCardContainer}>
				<WaterCard title={"200 mL"} />
				<WaterCard title={"500 mL"} />
				<WaterCard title={"750 mL"} />
				<WaterCard title={"1 L"} />
			</View>
			<CustomButton
				buttonTitle={"LOGOUT"}
				onPress={handleLogout}
				color={"#FF0000"}
			/>
		</View>
	)
}

export default Dashboard
