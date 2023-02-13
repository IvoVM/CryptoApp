import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Coin = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
        <View style={styles.coinInfo}>
        <Image style={styles.image} source={{ uri: coin.image }} />
      <Text style={styles.text}>{coin.name}</Text>
        </View>
     
      <Text style={styles.text}>{coin.current_price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  coinInfo:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  image: {
    width:30,
    height:30
  },
  text: {
    color: "#fff",
    paddingLeft:10
  },
});
export default Coin;
