import {TouchableOpacity, Text, StyleSheet} from "react-native";
import colors from "../design/colors";
import Logo from "./Logo";
import {useEffect, useState} from "react";

export default function Card({ fnPress, content, isShowing, isCorrect, index }) {

    const [showCard, setShow] = useState(false);

    useEffect(() => {
        // Se estiver correto, sempre retorna true
        if (isCorrect) {
            return setShow(true);
        }

        // Senão, verifica o isShowing
        return setShow(isShowing);
    }, [isShowing, isCorrect]);

    return (
        <TouchableOpacity style={!showCard ? styles.card : styles.cardShown} onPress={() => fnPress(index)}>
            {
                !showCard ? (
                    <Logo width={53} />
                ) : (<Text style={styles.text}>{content}</Text>)
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    },
    card: {
        backgroundColor: colors.redDark,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.gray_100,
        width: '22.5%',
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    cardShown: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: colors.white,
        width: '22.5%',
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})