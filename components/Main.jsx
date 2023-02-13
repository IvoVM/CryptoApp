import { View, FlatList,StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Coin from "./Coin";
const Main = () => {
  const [coins, setCoins] = useState([]);

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
    <View style={styles.main}>
      <FlatList
        key={coins.id}
        data={coins}
        renderItem={({ item }) => {
          return <Coin coin={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor:'#141414',
    alignItems:'center'
  },
});
export default Main;
