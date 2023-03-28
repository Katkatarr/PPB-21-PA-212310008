import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const MyBio = {
  identity: {
    npm: 212310008,
    firstname: "KATARINA",
    middlename: "ANDREA",
    lastname: "LAURENTIA",
  },
  educations: [
    { id: 1, school: "SD Eka Wijaya Cibinong" },
    { id: 2, school: "SMP Eka Wijaya Cibinong" },
    { id: 3, school: "SMA Regina Pacis Bogor" },
  ],
  mobile_phone: "085212345679",
  email: "212310008@student.ibik.ac.id",
  gender: "F",
  tall_body: 153,
  weight_body: 49.1,
};

const MyProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>NPM:</Text>
        <Text style={styles.value}>{MyBio.identity.npm}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>
          {MyBio.identity.firstname} {MyBio.identity.middlename} {MyBio.identity.lastname}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Education:</Text>
        {MyBio.educations.map((edu) => (
          <Text style={styles.value} key={edu.id}>
            - {edu.school}
          </Text>
        ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mobile Phone:</Text>
        <Text style={styles.value}>{MyBio.mobile_phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{MyBio.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{MyBio.gender}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Height:</Text>
        <Text style={styles.value}>{MyBio.tall_body} cm</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.value}>{MyBio.weight_body} kg</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    width: 120,
  },
  value: {
    flex: 1,
    textAlign: "justify",
  },
});

export default MyProfile;
