import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<AuthProvider>
				<Stack>
					<Stack.Screen
						name="(tabs)"
						options={{
							headerShown: false,
						}}
					/>
				</Stack>
			</AuthProvider>
		</SafeAreaProvider>
	);
}
