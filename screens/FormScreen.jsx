import {StyleSheet, ImageBackground, Alert} from "react-native";
import FormCadastro from "../components/FormCadastro";
import Logo from "../components/Logo";
import {useState, useContext} from "react";
import { UserContext } from "../context/UserContext";
import {useNavigation} from "@react-navigation/native";
import { AdMobBanner } from 'expo-ads-admob';
import configs from "../config/configs";

export default function HomeScreen() {

    // Navegação
    const navigation = useNavigation();

    const { setUsername } = useContext(UserContext);

    const [username1, setUsername1] = useState('');
    const [username2, setUsername2] = useState('');

    // Enviar login
    function onHandleLogin() {

        // Verifica se está vazio
        if (!username1.trim() || !username2.trim()) {
            return Alert.alert('Informe o apelido de cada jogador');
        }

        setUsername({
            user1: username1,
            user2: username2
        });
        // Redireciona para home
        navigation.navigate("Home");
    }

    return (
        <ImageBackground source={require("../assets/Fundo.png")} style={styles.container}>
            <Logo />
            <FormCadastro
                username1={username1}
                setUsername1={setUsername1}
                username2={username2}
                setUsername2={setUsername2}
                onSubmit={onHandleLogin}
            />

            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID={configs.adUnitID_DEV} // ID do bloco de anúncio
                servePersonalizedAds={true} // Para anúncios personalizados
                onDidFailToReceiveAdWithError={(error) => console.log(error)} // Tratamento de erro
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    imgFundo: {
        position: "fixed",
        zIndex: -1,
    }
})