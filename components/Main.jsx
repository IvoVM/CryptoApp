import { View, FlatList, StyleSheet, TextInput, Text } from "react-native";
import { useEffect, useState } from "react";
import Coin from "./Coin";
const Main = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    let res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search a Coin"
          placeholderTextColor="#858585"
        ></TextInput>
      </View>
      <FlatList
        style={styles.list}
        key={coins.id}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        )}
        renderItem={({ item }) => {
          return <Coin coin={item} />;
        }}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await fetchData();
          setRefreshing(false);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "#fff",
    marginTop: 10,
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657ce",
    borderBottomWidth: 1,
    width: "50%",
    textAlign: "center",
  },
});
export default Main;
