import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from "../design/colors";

export default function WinnerSection() {
    const navigation = useNavigation();

    const jogarNovamente = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={jogarNovamente} style={styles.botao}>
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
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
})
