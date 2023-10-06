import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../components/Button";

export default function Setting() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Setting group {id}</Text>
			<Button
				txt="Back"
				styleBtn={styles.btn}
				onPress={() => router.back()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: "black",
	},
});
