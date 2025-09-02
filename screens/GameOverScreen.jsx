import { StyleSheet, Text, View, ImageBackground } from "react-native";
import WinnerSection from "../components/WinnerSection";
import colors from "../design/colors";
import Logo from "../components/Logo";

export default function GameOverScreen() {
    return (
        <ImageBackground
            source={require('../assets/Fundo.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.content}>

                <Logo />

                <Text style={styles.texto}>Vencedor: Felipe</Text>
                <WinnerSection />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.redDark,
        paddingVertical: 20,
        marginBottom: 8,
    },
});