import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
	const { setUser } = useAuth();

	const login = () => {
		setUser({
			name: "John Doe",
		});
	};

	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<TouchableOpacity style={styles.btn} onPress={login}>
				<Text style={styles.txt}>Login</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "blue",
		marginTop: 10,
		borderRadius: 10,
	},
	txt: {
		color: "white",
	},
});
