import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import RegisterScreen from "./src/Screens/RegisterScreen/RegisterScreen"
import GoalScreen from "./src/Screens/GoalScreen/GoalScreen"
import DashboardScreen from "./src/Screens/DashboardScreen/DashboardScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Goal" component={GoalScreen} />
				<Stack.Screen name="Dashboard" component={DashboardScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
