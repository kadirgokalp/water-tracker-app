import RegisterScreen from "./src/Screens/RegisterScreen/RegisterScreen"
import GoalScreen from "./src/Screens/GoalScreen/GoalScreen"
import DashboardScreen from "./src/Screens/DashboardScreen/DashboardScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"
import navigationRoutes from "./src/Routes/navigationRoutes"

const Stack = createNativeStackNavigator()

export default function App() {
	const [isLogged, setIsLogged] = useState(false)

	async function checkFirstTimeLogginIn() {
		//checkUserLoggedIn
		try {
			const data = await AsyncStorage.getItem("keepLoggedIn")
			setIsLogged(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		checkFirstTimeLogginIn()
	}, [])

	console.log(isLogged)

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{!isLogged ? (
					<>
						<Stack.Screen
							name="Dashboard"
							component={DashboardScreen}
						/>
						<Stack.Screen name="Goal" component={GoalScreen} />
					</>
				) : (
					<>
						{navigationRoutes.map((item, index) => {
							return (
								<Stack.Screen
									key={index}
									name={item?.name}
									component={item?.component}
								/>
							)
						})}

						{/* <Stack.Screen
							name="Register"
							component={RegisterScreen}
						/>
						<Stack.Screen name="Goal" component={GoalScreen} />
						<Stack.Screen
							name="Dashboard"
							component={DashboardScreen}
						/> */}
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
