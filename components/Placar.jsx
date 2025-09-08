import {Image, Text, View, StyleSheet, ImageBackground} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";
import img from "../assets/FichaRed.png";

export default function Placar({
                                   nome,
                                   pontuacao,
                                   player2 = false,
                                   currentPlayer
                               }) {

    // Imagem
    let img = require("../assets/FichaRed.png");

    // Estilo da pontuação
    let card = {
        backgroundColor: colors.redBase,
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        marginHorizontal: -25,
        borderRadius: 40,
        zIndex: 0
    }

    // Estilo do View 
    let player = {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        marginHorizontal: 20,
        opacity: 1
    }

    // Caso player2 true
    if (player2) {
        card.backgroundColor = colors.blueBase;
        player.alignItems = "flex-end";
        player.justifyContent = "flex-end";
        img = require("../assets/FichaBlue.png");

        // Caso o currentPlayer seja o player 1, diminui a opacidade
        if (currentPlayer === "player1") {
            player.opacity = 0.3;            
        }
    } else {
       // Caso o currentPlayer seja o player 2, diminui a opacidade
        if (currentPlayer === "player2") {
            player.opacity = 0.3;            
        } 
    }

    return (
        <View style={styles.container}>

            {
                player2 ? (
                    <View style={player}>

                        <View style={card}>
                            <Text style={styles.pontos2}>{pontuacao}</Text>
                        </View>

                        <ImageBackground style={styles.fichaVermelha} source={img}>
                            <Text style={styles.nome}>{nome}</Text>
                        </ImageBackground>

                    </View>
                ) : (
                    <View style={player}>

                        <ImageBackground style={styles.fichaVermelha} source={img}>
                            <Text style={styles.nome}>{nome}</Text>
                        </ImageBackground>


                        <View style={card}>
                            <Text style={styles.pontos1}>{pontuacao}</Text>
                        </View>

                    </View>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    fichaVermelha: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        resizeMode: "contain",
        zIndex: 1,
        marginBottom: 20,
    },

    nome: {
        fontSize: 13,
        color: colors.white
    },

    pontos1: {
        marginLeft: 15,
        fontSize: 22,
        color: colors.white,
        fontWeight: "bold",
    },

    pontos2: {
        marginRight: 15,
        fontSize: 22,
        color: colors.white,
        fontWeight: "bold",
    }
})