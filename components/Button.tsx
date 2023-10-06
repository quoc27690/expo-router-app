import {
	Text,
	TouchableOpacity,
	StyleSheet,
	StyleProp,
	ViewStyle,
} from "react-native";

interface IButtonProps {
	styleBtn?: StyleProp<ViewStyle>;
	styleTxt?: StyleProp<ViewStyle>;
	disabled?: boolean;
	txt: string;
	onPress: () => void;
}

export default function Button(props: IButtonProps) {
	const {
		styleBtn = {},
		styleTxt = {},
		disabled = false,
		txt,
		onPress,
	} = props;
	return (
		<TouchableOpacity
			disabled={disabled}
			style={[styles.btn, styleBtn]}
			onPress={onPress}
		>
			<Text style={[styles.txt, styleTxt]}>{txt}</Text>
		</TouchableOpacity>
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
