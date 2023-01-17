import { TouchableOpacity, Text } from "react-native"
import React from "react"
import CheckIcon from "react-native-vector-icons/Feather"
import { todayFormattedDate } from "../../../Utils/TodaysFormattedDate"

export default function TodaysDate({ date, state, marking }) {
	const today = todayFormattedDate()

	return (
		<TouchableOpacity onPress={() => console.log(date, marking)}>
			<Text
				style={{
					textAlign: "center",
					color: state === "disabled" ? "gray" : "#FFFFFF",
					borderWidth: date.dateString === today ? 2 : 0,
					borderColor: "#FFFFFF",
					borderRadius: 50,
					paddingHorizontal: 3,
				}}
			>
				{date.day}
			</Text>
			{marking && (
				<CheckIcon
					name="check"
					// type="material"
					size={24}
					color="#FFFFFF"
					containerStyle={{
						position: "absolute",
					}}
					style={{
						fontWeight: "bold",
					}}
				/>
			)}
		</TouchableOpacity>
	)
}
