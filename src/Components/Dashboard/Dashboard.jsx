import { View, Text, TouchableOpacity } from "react-native"
import { React, useState, useEffect } from "react"
import { styles } from "./Dashboard.styles"
// import DateTimePicker from "@react-native-community/datetimepicker"
import { Calendar } from "react-native-calendars"
import WaterCard from "./WaterCard/WaterCard"
import WaterPercentage from "./WaterPercentage/WaterPercentage"
import UserProfile from "./UserProfile/UserProfile"
import CustomModal from "./CustomModal/CustomModal"
import CustomButton from "../Common/Button/CustomButton"
import TodaysDate from "./TodaysDate/TodaysDate"
import AsyncStorage from "@react-native-async-storage/async-storage"
import EditIcon from "react-native-vector-icons/FontAwesome"
import { useIsFocused } from "@react-navigation/native"

import { todayFormattedDate } from "../../Utils/TodaysFormattedDate"
import { COLOR } from "../../Config/Enums"

const Dashboard = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const [userName, setUserName] = useState("")
	const [userAge, setUserAge] = useState(0)
	const [extraButton, setExtraButton] = useState(false)
	const [modalText, setModalText] = useState("")
	const [isDisabled, setIsDisabled] = useState(true)
	const [waterCardClicked, setWaterCardClicked] = useState([
		false,
		false,
		false,
		false,
	])
	const [sumLiters, setSumLiters] = useState(0)
	const [drankAlready, setDrankAlready] = useState(0)

	const [goal, setGoal] = useState("")
	const [waterPercentage, setWaterPercentage] = useState(0)
	const [markedDates, setMarkedDates] = useState({})

	const [isGoalDone, setIsGoalDone] = useState(false)

	const calendarTheme = {
		calendarBackground: "#10006d",
		textSectionTitleColor: "#b6c1cd",
		textSectionTitleDisabledColor: "#d9e1e8",
		selectedDayBackgroundColor: "##4e54c8",
		selectedDayTextColor: "#ffffff",
		todayTextColor: "#b5229f",
		dayTextColor: "#ffffff",
		textDisabledColor: "#606468",
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

	const today = todayFormattedDate()

	const isFocused = useIsFocused()

	function handleOnClickUserInfo() {
		// setUserName(nameStorage)
		// setUserAge(ageStorage)
		setExtraButton(false)
		setModalVisible(true)
		setModalText(`Welcome , ${userName} (${userAge})`)
	}

	function handleLogout() {
		AsyncStorage.setItem("keepLoggedIn", JSON.stringify(false))
		navigation.navigate("Register")
	}

	function handleOnEditIconNavigation() {
		navigation.navigate("Goal")
	}

	function handleOnEditIcon() {
		setExtraButton({
			buttonTitle: "EDIT",
			onPress: handleOnEditIconNavigation,
		})
		setModalText(`Your goal is : ${goal} liters `)
		setModalVisible(true)
	}

	function handleOnClickWaterCard(index, waterAmount) {
		let tempSum = sumLiters
		let tempClicked = [...waterCardClicked]
		if (!tempClicked[index]) {
			tempSum += waterAmount
		} else {
			tempSum -= waterAmount
		}

		// if (tempSum > 0) {
		// 	setIsDisabled(!isDisabled)
		// }

		tempClicked[index] = !tempClicked[index]
		setSumLiters(tempSum)
		setWaterCardClicked(tempClicked)
	}

	function handleOnAddMlButton(sumLiters) {
		if (goal !== 0) {
			let tempDrankAlready = drankAlready
			tempDrankAlready += sumLiters

			setDrankAlready(tempDrankAlready)

			let percentage = (tempDrankAlready / (goal * 1000)) * 100
			setWaterPercentage(percentage)

			setSumLiters(0)
			setWaterCardClicked([false, false, false, false])
			console.log("sumLiters :", sumLiters)

			AsyncStorage.setItem(today, `${tempDrankAlready}`)

			if (percentage >= 100) {
				let tempMarkedDates = markedDates ? markedDates : {}
				tempMarkedDates[today] = {}
				console.log("copyofMarked:", tempMarkedDates)
				setMarkedDates(tempMarkedDates)
				setIsGoalDone(true)
				AsyncStorage.setItem(
					"markedDates",
					JSON.stringify(tempMarkedDates),
				)
			}
		}
	}
	useEffect(() => {
		AsyncStorage.getItem("userName").then((name) => setUserName(name))
		AsyncStorage.getItem("age").then((age) => setUserAge(age))
		AsyncStorage.getItem("goal").then((goal) => setGoal(goal))

		AsyncStorage.getItem("markedDates").then((dates) =>
			console.log(
				"marked dates",
				JSON.parse(dates),
				setMarkedDates(JSON.parse(dates)),
			),
		)
	}, [isFocused])

	// useEffect(() => {
	// 	AsyncStorage.getItem("goal").then((goal) => setGoal(goal))
	// }, [goal])

	console.log("username : ", userName)
	console.log(waterPercentage)
	console.log("sumLiters :", sumLiters)

	return (
		<View style={styles.outerContainer}>
			<View style={styles.userAvatar}>
				<UserProfile name={userName} onPress={handleOnClickUserInfo} />
			</View>
			<View style={styles.innerContainer}>
				<View style={styles.calendarContainer}>
					{/* MODAL */}

					<CustomModal
						userName={userName}
						userAge={userAge}
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						extraButton={extraButton}
						modalText={modalText}
					/>

					<Calendar
						theme={calendarTheme}
						style={styles.dashboard}
						dayComponent={TodaysDate}
						markedDates={markedDates}
					/>
				</View>
				<View style={styles.waterPercentageContainer}>
					<WaterPercentage
						percentage={waterPercentage}
						amount={drankAlready}
						color={isGoalDone ? COLOR.RED : COLOR.DARK_BLUE}
					/>

					<TouchableOpacity
						style={styles.editWater}
						onPress={handleOnEditIcon}
					>
						<EditIcon
							name="edit"
							size={16}
							style={{
								paddingRight: 5,
								color: "#FFFFFF",
								paddingTop: 3,
							}}
						/>
						<Text style={styles.editWaterText}>{goal}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.waterCardContainer}>
					<WaterCard
						title={"200 mL"}
						onPress={() => handleOnClickWaterCard(0, 200)}
					/>
					<WaterCard
						title={"500 mL"}
						onPress={() => handleOnClickWaterCard(1, 500)}
					/>
					<WaterCard
						title={"750 mL"}
						onPress={() => handleOnClickWaterCard(2, 750)}
					/>
					<WaterCard
						title={"1 L"}
						onPress={() => handleOnClickWaterCard(3, 1000)}
					/>
				</View>
				<CustomButton
					buttonTitle={`+ Add ${sumLiters} ml`}
					onPress={() => handleOnAddMlButton(sumLiters)}
					color={"#0d7ff0"}
					isDisabled={sumLiters > 0 ? false : true}
				/>
			</View>
		</View>
	)
}

export default Dashboard
