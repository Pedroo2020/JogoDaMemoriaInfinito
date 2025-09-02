import {StyleSheet, Text, TextInput, ImageBackground, View} from "react-native";
import { Svg, Text as SvgText } from "react-native-svg";
import colors from "../design/colors";
import TextBorder from "./TextBorder";

export default function Input({ placeholder, label }) {
    return (
        <View>
            <TextBorder textColor={colors.white} borderColor={colors.redDark} fontSize={18} content={label} />
            <TextInput style={styles.input} placeholder={placeholder}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: colors.redDark,
        marginBottom: 5
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: 1000,
        padding: 10,
    }
})