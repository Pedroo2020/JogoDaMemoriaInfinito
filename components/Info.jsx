import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../design/colors";
import TextBorder from "./TextBorder";

const Info = ({ level = 0, onFinish }) => {
    return (
        <View style={styles.container}>
            <TextBorder borderColor={colors.white} textColor={colors.redDark} fontSize={28} content={`Level: ${level}`} />

            <TouchableOpacity style={styles.button} onPress={onFinish}>
                <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    button: {
        backgroundColor: "#8B0000",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontStyle: "italic",
        fontWeight: "600",
    },
});

export default Info;
