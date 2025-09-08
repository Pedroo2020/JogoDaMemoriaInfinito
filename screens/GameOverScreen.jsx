import { StyleSheet, Text, View, ImageBackground } from "react-native";
import WinnerSection from "../components/WinnerSection";
import colors from "../design/colors";
import Logo from "../components/Logo";
import TextBorder from "../components/TextBorder";
import {useNavigation} from "@react-navigation/native";
import { useContext } from "react";
import { WinnerContext } from "../context/WinnerContext";

export default function GameOverScreen() {

    // Declara o hook navigation
    const navigation = useNavigation();

    // Obtém o valor de winner
    const { winner } = useContext(WinnerContext);

    // Redireciona de volta para a tela inicial
    function playAgain() {
        return navigation.navigate('Form');
    }
  
    return (
        <ImageBackground
            source={require('../assets/Fundo.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.content}>

                <Logo />

                <TextBorder borderColor={colors.redDark} textColor={colors.white} fontSize={28} content={`Vencedor: ${winner}`} />

                <WinnerSection playAgain={playAgain} />
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
        gap: 20
    },
    texto: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.redDark,
        paddingVertical: 20,
        marginBottom: 8,
    },
});