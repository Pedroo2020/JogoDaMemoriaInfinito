import { useState } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import * as React from "react";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Info from "../components/Info";

export default function HomeScreen() {
    // Jogador 1
    const [player1, setPlayer1] = useState({
        nome: "Player 1",
        pontuacao: 0
    });

    // Jogador 2
    const [player2, setPlayer2] = useState({
        nome: "Player 2",
        pontuacao: 0
    });

    // Quantidade de pares do jogo da memória
    const [qntPares, setQntPares] = useState(2);

    // Define o level atual do jogador
    const [currentLevel, setCurrentLevel] = useState(0);

    return (
        <ImageBackground
            source={require("../assets/Fundo.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.content}>

                <Logo />

                <Info />

                <View style={styles.containerCards}>
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />

                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />

                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />

                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                    <Card content={'Olá'} />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        gap: 10
    },
    text: {
        fontSize: 24,
        color: "#fff",
    },
    containerCards: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2%",
        width: "100%",
        paddingHorizontal: 20,
    }
});
