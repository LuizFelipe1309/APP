import { Image, StyleSheet } from "react-native";

export default function Logo() {
    return <Image style={styles.logo} source={require('../../assets/SPFC.png')}></Image>;
}

const styles = StyleSheet.create({
    logo:{
        width: 100,
        height: 100
    }
});