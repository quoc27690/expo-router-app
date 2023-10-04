import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Detail() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Group {id}</Text>
			<TouchableOpacity style={styles.btn} onPress={() => router.push(`/group/${id}/setting`)}>
				<Text style={styles.txt}>Setting</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "tomato",
		marginTop: 10,
		borderRadius: 10,
	},
	txt: {
		color: "white",
	},
});
