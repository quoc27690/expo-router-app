import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../components/Button";

export default function Detail() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Group {id}</Text>
			<Button
				txt="Setting"
				onPress={() => router.push(`/group/${id}/setting`)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
