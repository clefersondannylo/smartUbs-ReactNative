import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export function MenuButtonCard({ name, local }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.cardImage} source={local} />
        <Text style={styles.textCard}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 118,
    height: 118,
    borderRadius: 8,
    backgroundColor: "#0085ff",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 30,
  },
  cardImage: {
    width: 45,
    height: 50,
    marginTop: 20,
  },
  textCard: {
    textAlign: "center",
    fontSize: 15.82,
    fontWeigh: "400",
    color: "#fff",
  },
});
