import { View, Text, StyleSheet } from "react-native";

export default function DetailBook() {
  return (
    <View style={styles.container}>
      <Text>Detail de ce livre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
