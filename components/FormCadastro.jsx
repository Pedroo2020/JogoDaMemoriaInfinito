import {View, StyleSheet, Text, TouchableOpacity, Image, TextInput} from "react-native";
import Input from "./Input";
import colors from "../design/colors";
import TextBorder from "./TextBorder";

export default function FormCadastro() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>

                <Input placeholder={"Insira o nome do jogador 1"} label={'Jogador 1:'} />

                <Input placeholder={"Insira o nome do jogador 2"} label={'Jogador 2:'} />

            </View>

            <TouchableOpacity style={styles.btn}>
                <TextBorder fontSize={20} textColor={colors.white} content={'Jogar'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 35
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 50,
        backgroundColor: colors.redDark,
        borderRadius: 1000,
        elevation: 5,
    }
})