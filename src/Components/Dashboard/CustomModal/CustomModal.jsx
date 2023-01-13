// React Native
import { Modal, Pressable, Text, View } from "react-native"

// Style
import { styles } from "./CustomModal.styles"

export default function CustomModal({
	userName,
	userAge,
	modalVisible,
	setModalVisible,
}) {
	return (
		<Modal
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible)
			}}
		>
			<View style={styles.outerContainer}>
				<View style={styles.modalContainer}>
					<Text style={styles.modalText}>
						{`Welcome , ${userName} (${userAge})`}{" "}
					</Text>
					<Pressable
						style={styles.button}
						onPress={() => setModalVisible(!modalVisible)}
					>
						<Text style={styles.modalText}>OK</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	)
}
