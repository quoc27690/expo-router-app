import { Stack } from "expo-router/stack";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="[id]/detail" options={{ headerShown: false }} />
			<Stack.Screen
				name="[id]/setting"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
