import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../design/colors";
import TextBorder from "./TextBorder";

const Info = ({ level = 0, onFinish }) => {
    return (
        <View style={styles.container}>
            <TextBorder borderColor={colors.redDark} textColor={colors.white} fontSize={28} content={`Level: ${level}`} />

            <TouchableOpacity style={styles.button} onPress={onFinish}>
                <Text style={styles.buttonText}>Finalizar partida</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
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
