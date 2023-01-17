// React Native
import { Modal, Pressable, Text, View } from "react-native"

// Style
import { styles } from "./CustomModal.styles"

export default function CustomModal({
	userName,
	userAge,
	modalVisible,
	setModalVisible,
	extraButton,
	modalText,
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
					<Text style={styles.modalText}>{modalText}</Text>
					<View style={styles.buttonContainer}>
						<Pressable
							style={styles.button}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.modalText}>CLOSE</Text>
						</Pressable>
						{extraButton && (
							<Pressable
								style={[styles.button, styles.newButton]}
								onPress={extraButton.onPress}
							>
								<Text style={styles.modalText}>
									{extraButton.buttonTitle}
								</Text>
							</Pressable>
						)}
					</View>
				</View>
			</View>
		</Modal>
	)
}
