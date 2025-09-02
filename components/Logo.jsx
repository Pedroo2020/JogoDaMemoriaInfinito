import {View, Image, StyleSheet} from 'react-native';

export default function Logo({ width }) {
    return (
        <View>
            <Image
                style={[styles.logo, { width: width }]}
                source={require('../assets/Logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: "contain",
    }
})