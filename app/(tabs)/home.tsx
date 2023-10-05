import { useRouter } from "expo-router";
import {
	Text,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	SafeAreaView,
} from "react-native";

const DATA = [
	{
		id: "01",
		title: "group 01",
	},
	{
		id: "02",
		title: "group 02",
	},
	{
		id: "03",
		title: "group 03",
	},
	{
		id: "04",
		title: "group 04",
	},
	{
		id: "05",
		title: "group 05",
	},
	{
		id: "06",
		title: "group 06",
	},
	{
		id: "07",
		title: "group 07",
	},
	{
		id: "08",
		title: "group 08",
	},
	{
		id: "09",
		title: "group 09",
	},
	{
		id: "10",
		title: "group 10",
	},
	{
		id: "11",
		title: "group 11",
	},
	{
		id: "12",
		title: "group 12",
	},
	{
		id: "13",
		title: "group 13",
	},
];

type ItemProps = { title: string; id: string };

export default function Home() {
	const router = useRouter();

	const Item = (props: { item: ItemProps }) => {
		const { title, id } = props.item;
		return (
			<TouchableOpacity
				onPress={() => onPressGroup(id)}
				style={styles.item}
			>
				<Text style={styles.title}>{title}</Text>
			</TouchableOpacity>
		);
	};

	const onPressGroup = (id: string) => {
		router.push(`/group/${id}/detail`);
	};

	return (
		<SafeAreaView>
			<FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
				data={DATA}
				renderItem={({ item }) => <Item item={item} />}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#f9c2ff",
		padding: 10,
		marginTop: 16,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 20,
	},
});
