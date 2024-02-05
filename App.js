import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BiodataTemplate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biodata---awdawdawd</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>John Doe</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Usia:</Text>
        <Text style={styles.value}>25 tahun</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Alamat:</Text>
        <Text style={styles.value}>Jl. Contoh No. 123, Kota Contoh</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Pekerjaan:</Text>
        <Text style={styles.value}>Developer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
});

export default BiodataTemplate;
