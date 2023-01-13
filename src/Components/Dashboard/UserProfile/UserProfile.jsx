import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { styles } from "./UserProfile.styles"

export default function UserProfile({ name, onPress }) {
	function getProfileFirstLetters(name) {
		let user = name.split(" ")
		let profileName =
			user[0].charAt(0).toUpperCase() + user[1].charAt(0).toUpperCase()
		return <Text>{profileName}</Text>
	}

	return (
		<TouchableOpacity style={styles.avatarContainer} onPress={onPress}>
			<Text style={styles.letterText}>
				{getProfileFirstLetters(name)}
			</Text>
		</TouchableOpacity>
	)
}
