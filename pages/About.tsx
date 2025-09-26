// src/screens/About.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const CATALOGOS = [
  { id: "1", titulo: "Musculação" },
  { id: "2", titulo: "Funcional" },
  { id: "3", titulo: "HIIT" },
  { id: "4", titulo: "Alongamento" },
  { id: "5", titulo: "Yoga" },
  { id: "6", titulo: "Pilates" },
];

export default function About() {
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")} // troque pela sua imagem
      style={styles.bg}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* Cartão principal em branco */}
          <View style={styles.card}>
            <Text style={styles.title}>Sobre o App</Text>
            <Text style={styles.subtitle}>
              Treinos e saúde para a família inteira, do iniciante ao avançado.
              Nosso app reúne programas pensados para diferentes objetivos,
              com orientação simples e foco em constância.
            </Text>

            <Text style={styles.section}>Catálogos</Text>

            {/* Grid de catálogos */}
            <View style={styles.catalogGrid}>
              {CATALOGOS.map((item) => (
                <TouchableOpacity key={item.id} style={styles.catalogCard} activeOpacity={0.9}>
                  <Text style={styles.catalogTitle}>{item.titulo}</Text>
                  <Text style={styles.catalogHint}>ver detalhes</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  scroll: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    // sombra Android
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
  section: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  catalogGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  catalogCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: "47%", // duas colunas
    // sombra leve
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },
  catalogTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  catalogHint: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },
});
