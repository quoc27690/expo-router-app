import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Accout() {
  const { setUser, user } = useAuth();
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Account</Text>
      <Text>{ user && user.name }</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setUser(null)}>
        <Text style={styles.txt}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "gray",
		marginTop: 10,
		borderRadius: 10,
	},
	txt: {
		color: "white",
	},
});
