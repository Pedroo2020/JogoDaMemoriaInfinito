import {TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../design/colors";
import Logo from "./Logo";

export default function Card({ fnPress, Content }) {
    return (
        <TouchableOpacity style={styles.card} onPress={fnPress}>
            <Logo width={50} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.gray_100,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: colors.redDark,
        width: "22%",
        height: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})