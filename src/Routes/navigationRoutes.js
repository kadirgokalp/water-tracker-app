//Navigations
import { NAVIGATION_SCREENS } from "./../Constants/navigationConstants"

//Components

import RegisterScreen from "../Screens/RegisterScreen/RegisterScreen"
import GoalScreen from "../Screens/GoalScreen/GoalScreen"
import DashboardScreen from "../Screens/DashboardScreen/DashboardScreen"

export default navigationRoutes = [
	{
		name: NAVIGATION_SCREENS.REGISTER,
		component: RegisterScreen,
	},
	{
		name: NAVIGATION_SCREENS.GOAL,
		component: GoalScreen,
	},
	{
		name: NAVIGATION_SCREENS.DASHBOARD,
		component: DashboardScreen,
	},
]
