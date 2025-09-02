import {Text, View, StyleSheet} from "react-native";
import React from "react";
import colors from "../design/colors";

export default function TextBorder({ borderColor, textColor, fontSize, content }) {
    return (
        <View>
            <Text style={[styles.text, { color: textColor, textShadowColor: borderColor, fontSize: fontSize }]}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lobster",
        textShadowColor: colors.white, // borda vermelha
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    }
})