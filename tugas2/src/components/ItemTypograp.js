/*
import { View, Text, Stylesheet } from "react-native";
import React from "react";

const ItemTypograp = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}
      >
        History of Bicycle
      </Text>
      <Text style={Stylesheet.paragrapf}>
        A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called
        a cyclist, or bicyclist.
      </Text>
    </View>
  );
};

const styles = Stylesheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
});

export default { ItemTypograp };
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemTypograp = () => {
  return (
    <View style={styles.box}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}
      >
        History of Bicycle
      </Text>
      <Text style={styles.paragrapf}>
        A Bicycle,Also Called a pedal cycle,bike,push-bike, or cycle, is a // human-powered or motor powered assisted, single-track vehicle having // two wheels attached to a frame ,one behind the other.A bicycle rider // is called a
        cyclist. or bicyclist
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  box: {
    width: 300,
  },
});

export { ItemTypograp };
