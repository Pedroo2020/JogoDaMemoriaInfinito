import {useContext, useEffect, useState} from "react";
import {View, ImageBackground, StyleSheet, Alert} from "react-native";
import * as React from "react";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Info from "../components/Info";
import Placar from "../components/Placar";
import {UserContext} from "../context/UserContext";

export default function HomeScreen() {
    const { username } = useContext(UserContext);

    // Jogador 1
    const [player1, setPlayer1] = useState({
        nome: username.user1,
        pontuacao: 0
    });

    // Jogador 2
    const [player2, setPlayer2] = useState({
        nome: username.user2,
        pontuacao: 0
    });

    // Pares
    const listaPares = [
        "😪", // 1
        "😋", // 2
        "😎", // 3
        "😍", // 4
        "🙄", // 5
        "😜", // 6
        "🤑", // 7
        "😈", // 8
        "🥶", // 9
        "🤠" // 10
    ]

    // Cartas viradas
    const [cartasViradas, setCartasViradas] = useState([]);

    // Lista de pares
    const [pares, setPares] = useState([]);

    // Quantidade de pares do jogo da memória
    const [qntPares, setQntPares] = useState(0);

    // Define o level atual do jogador
    const [currentLevel, setCurrentLevel] = useState(0);

    // Variável para armazenar o jogador atual
    const [currentPlayer, setCurrentPlayer] = useState();

    // Função para calcular a quantidade de pares
    function calcularQntPares(level) {
        let somar =  Math.floor(level / 2) + 1;

        // Caso seja ímpar, adiciona mais um
        if (level % 2 !== 0) {
            somar++;
        }

        // Limite de 10
        if (somar > 10) {
            return 10;
        }

        return somar;
    }

    // Função para carregar um novo level
    function loadNewLevel() {
        // Adiciona mais um ao level
        let level = currentLevel + 1;

        // Salva o level atual
        setCurrentLevel(level);

        // Calcula a nova quantidade de pares de acordo com o level
        let newQntPares = calcularQntPares(level);

        // Define a nova quantidade de pares
        setQntPares(newQntPares);

        // Cria a lista de índices
        let listaIndex = []

        // Obtém os índices
        while (listaIndex.length < newQntPares) {
            let indexRandom = Math.floor(Math.random() * listaPares.length);

            if (listaIndex.includes(indexRandom)) {
                continue;
            }

            listaIndex.push(indexRandom);
        }

        // Nova lista de pares
        let newListaPares = [];

        // Cria a lista de pares
        for (let index of listaIndex) {
            // Obtém o caracter
            let caracter = listaPares[index];

            // Cria o objeto
            let objeto = {
                content: caracter,
                isShowing: false,
                isCorrect: false
            }

            // Adiciona um par de caractéres
            newListaPares.push(objeto, objeto);
        }

        // Embaralha a lista
        let listaEmbaralhada = [...newListaPares].sort(() => Math.random() - 0.5);

        // Salva a lista embaralhada
        setPares(listaEmbaralhada);

    }

    // Função para mostrar carta
    function showCard(index) {
        // Seleciona a carta clicada
        let newListaPares = [...pares];

        // Mostra a carta clicada
        let listaAtualizada = newListaPares.map((item, indexItem) => index === indexItem ? {
            ...item,
            isShowing: true
        } : item);

        // Seleciona o item clicado
        let itemClicado = listaAtualizada[index];

        // Atualiza a lista pares
        setPares(listaAtualizada);

        // Salva a nova carta virada
        let newCartasViradas = [...cartasViradas];

        // Adiciona o content clicado e o index
        newCartasViradas.push({
            content: itemClicado.content,
            index: index
        });

        // Salva as cartas viradas
        setCartasViradas(newCartasViradas);

        // Caso tenha mais de uma carta virada
        if (newCartasViradas.length > 1) {
            // Caso o conteúdo de ambas for igual
            if (newCartasViradas[0].content === newCartasViradas[1].content) {
                // Mostra a carta clicada
                listaAtualizada = listaAtualizada.map((item, indexItem) => newCartasViradas[0].index === indexItem || newCartasViradas[1].index === indexItem ? {
                    ...item,
                    isCorrect: true
                } : item);

                // Atualiza a lista pares
                setPares(listaAtualizada);

            }

            // Limpa a lista de cartas viradas
            setCartasViradas([]);

            setTimeout(() => {
                // Desvira as cartas
                listaAtualizada = listaAtualizada.map((item, index) => {
                    return {
                        ...item,
                        isShowing: false
                    }
                })

                // Salva a lista
                setPares(listaAtualizada);

                // Verifica se todos os items estão corretos
                let allCorrect = listaAtualizada.every(item => item.isCorrect === true);

                // Se todos estiverem corretos, passa para o próximo level
                if (allCorrect) {
                    loadNewLevel();
                }
            }, 1000)
        }
    }

    // Ao carregar, carrega as primeiras cartas
    useEffect(() => {
        // Define aleatoriamente o jogador atual
        const starterPlayer = Math.floor(Math.random());

        // Salva na variável
        if (starterPlayer === 0) {
            setCurrentLevel(player1);
        } else {
            setCurrentPlayer(player2);
        }

        // Carrega o level 1
        loadNewLevel();
    }, []);

    return (
        <ImageBackground
            source={require("../assets/Fundo.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.content}>

                <Logo />

                <Info level={currentLevel} onFinish={loadNewLevel} />

                <View style={styles.containerCards}>
                    {
                        pares.map((item, index) => (
                            <Card fnPress={showCard} index={index} content={item.content} isCorrect={item.isCorrect} isShowing={item.isShowing} key={index} />
                        ))
                    }
                </View>

                <View style={styles.placar}>
                    <Placar nome={player1.nome} pontuacao={player1.pontuacao} />
                    <Placar player2={true} nome={player2.nome} pontuacao={player2.pontuacao} />
                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    text: {
        fontSize: 24,
        color: "#fff",
    },
    containerCards: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "100%",
        paddingHorizontal: 20,
    },
    placar: {
        marginTop: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    }
});
