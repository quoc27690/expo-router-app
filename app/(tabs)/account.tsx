import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import Button from "../../components/Button";

export default function Accout() {
	const { setUser, user } = useAuth();

	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Account</Text>
			<Text style={styles.txt}>{user && user.name}</Text>
			<Button
				txt="Log out"
				styleBtn={styles.btn}
				onPress={() => setUser(null)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: "gray",
	},
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
  }
});
