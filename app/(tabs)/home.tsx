import { useRouter } from "expo-router";
import {
	Text,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	StatusBar,
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
      <FlatList
        contentContainerStyle={styles.list}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
	);
}

const styles = StyleSheet.create({
	list: {
		paddingTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});
