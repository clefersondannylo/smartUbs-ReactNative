import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { MenuButtonCard } from "../components/MenuButtonCard";

export function Home() {
  const cardInformation = [
    {
      id: "1",
      name: "Consultar horários",
      local: require("../assets/img/search.png"),
    },
    {
      id: "2",
      name: "Solicitar agendamento",
      local: require("../assets/img/calendar.png"),
    },
    {
      id: "3",
      name: "Histórico consultas",
      local: require("../assets/img/historic.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <Image
          style={styles.photoAccount}
          source={require("../assets/img/perfil.png")}
        />
        <View style={styles.textAccount}>
          <Text style={styles.accountName}>José Augusto</Text>
          <Text style={styles.accountEmail}>jose@gmail.com</Text>
        </View>
      </View>
      <View style={styles.mainMenu}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={cardInformation}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MenuButtonCard name={item.name} local={item.local} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223333",
  },
  accountContainer: {
    backgroundColor: "#0085ff",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  photoAccount: {
    width: 76,
    height: 76,
  },
  textAccount: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  accountName: {
    fontSize: 26.34,
    color: "#fff",
    fontWeight: "bold",
  },
  accountEmail: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
  },
  mainMenu: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 70,
  },
});
