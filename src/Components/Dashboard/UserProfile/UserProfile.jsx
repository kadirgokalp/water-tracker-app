// React
import React from "react"
// React Native
import { View, Text, TouchableOpacity } from "react-native"
// Style
import { styles } from "./UserProfile.styles"

export default function UserProfile({ name, onPress }) {
	console.log("Name:", name)
	function getProfileFirstLetters(name) {
		let user = name?.split(" ")
		let profileName =
			user[0]?.charAt(0)?.toUpperCase() +
			user[1]?.charAt(0)?.toUpperCase()
		return <Text>{profileName}</Text>
	}

	return (
		<TouchableOpacity style={styles.avatarContainer} onPress={onPress}>
			{name ? (
				<Text style={styles.letterText}>
					{getProfileFirstLetters(name)}
				</Text>
			) : (
				<Text>Loading</Text> //loading spinner ekle
			)}
		</TouchableOpacity>
	)
}
