import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";

const Profile = () => {
  return (
    <ImageBackground source={{ uri: "https://i.pinimg.com/originals/3d/43/c5/3d43c592a277489d764cec073a410170.jpg" }} style={styles.background}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: "https://www.pngitem.com/pimgs/m/185-1855413_panpan-pandabears-panda-webarebears-we-bare-bears-pan.png" }} />
        <Text style={styles.name}>MY PROFILE</Text>
        <View style={styles.textBox}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>Katarina Andrea</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.label}>Universitas</Text>
          <Text style={styles.value}>IBI Kesatuan Bogor</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.label}>Jurusan</Text>
          <Text style={styles.value}>Teknologi Informasi</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.label}>NPM</Text>
          <Text style={styles.value}>212310008</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  avatar: {
    width: "30%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    marginVertical: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "white",
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: "white",
  },
  value: {
    flex: 2,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default Profile;
