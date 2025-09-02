import * as React from "react";
import {View, StyleSheet, ImageBackground} from "react-native";
import FormCadastro from "../components/FormCadastro";
import Logo from "../components/Logo";

export default function HomeScreen() {
    return (
        <ImageBackground source={require("../assets/Fundo.png")} style={styles.container}>
                    <Logo />

                    <FormCadastro />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    imgFundo: {
        position: "fixed",
        zIndex: -1,
    }
})