import React from "react";
import { SaveAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function Inline() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png" }} style={styles.logo} />
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a2be2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  loading: {
    position: "absolute",
    bottom: 50,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
