import { View, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import Button from "../../components/Button";

interface IUser {
	id: string;
	name: string;
}

const USER: IUser[] = [
	{ id: "01", name: "John Doe" },
	{ id: "02", name: "Jane Hee" },
	{ id: "03", name: "Dam Smith" },
];

export default function Login() {
	const { setUser } = useAuth();
	const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

	const onSelectedUser = (user: IUser) => {
		if (!selectedUser || selectedUser.id !== user.id) {
			setSelectedUser(user);
		} else {
			setSelectedUser(null);
		}
	};

	const login = () => {
		setUser({
			name: selectedUser.name,
		});
	};

	const renderBtnUser = () => {
		return USER.map((user) => {
			const isDisabled = selectedUser?.id === user.id;
			return (
				<Button
					key={user.id}
					txt={user.name}
					styleBtn={
						isDisabled ? styles.btnUserDisable : styles.btnUser
					}
					onPress={() => onSelectedUser(user)}
				/>
			);
		});
	};

	const isDisabled = !selectedUser;

	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			{renderBtnUser()}
			<Button
				disabled={isDisabled}
				txt="Login"
				styleBtn={isDisabled ? styles.btnLoginDisable : styles.btnLogin}
				onPress={login}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	btnUser: {
		backgroundColor: "tomato",
	},
	btnUserDisable: {
		backgroundColor: "green",
	},
	btnLoginDisable: {
		backgroundColor: "gray",
	},
	btnLogin: {
		backgroundColor: "blue",
	},
});
