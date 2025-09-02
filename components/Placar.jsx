import {Image, Text, View, StyleSheet, ImageBackground} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function Placar({
                                   nome,
                                   pontos,
                                   acao = () => true,
                                   player2 = false,
                               }) {

    let card = {
        backgroundColor: colors.redBase,
        width: 120,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 35,
        marginHorizontal: -25,
        borderRadius: 40,
        zIndex: 0,
    }

    let player = {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        marginHorizontal: 20,
    }

    if (player2) {
        card.backgroundColor = colors.blueBase;
        player.alignItems = "flex-end";
        player.justifyContent = "flex-end";
    }

    return (
        <View style={styles.container}>

            <View style={player}>

                <ImageBackground style={styles.fichaVermelha} source={require("../assets/FichaRed.png")}>
                    <Text style={styles.nome}>Felipe</Text>
                </ImageBackground>

                <View style={card}>
                    <Text style={styles.pontos}>100</Text>
                </View>

            </View>

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
        width: 80,
        height: 80,
        resizeMode: "contain",
        zIndex: 1,
        marginBottom: 20,
    },

    nome: {
        fontSize: 17,
        color: colors.white
    },

    pontos: {
        fontSize: 30,
        color: colors.white,
    },
})