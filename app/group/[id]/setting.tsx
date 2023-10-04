import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Setting() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Setting group {id}</Text>
			<TouchableOpacity style={styles.btn} onPress={() => router.back()}>
				<Text style={styles.txt}>Back</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "black",
		marginTop: 10,
		borderRadius: 10,
	},
	txt: {
		color: "white",
	},
});
