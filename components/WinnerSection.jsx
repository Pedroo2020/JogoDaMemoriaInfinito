import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from "../design/colors";

export default function WinnerSection({ playAgain }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={playAgain} style={styles.botao}>
                <Text style={styles.textoBotao}>Jogar Novamente</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    botao: {
        backgroundColor: colors.redDark,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
})
