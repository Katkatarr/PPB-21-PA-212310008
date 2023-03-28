/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
//import ItemTypograp from './src/components/ItemTypograp';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 1, backgroundColor: "darkorange" }} />
      <View style={{ flex: 1, backgroundColor: "green" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  box: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ItemTypograp } from "./src/component/ItemTypograp";
import { ImageItem } from "./src/component/Imageitem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <ItemTypograp />
        <ImageItem />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
