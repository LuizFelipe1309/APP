import { Image, StyleSheet } from "react-native";

export default function Libertadores() {
  return (
    <Image
      style={styles.logo}
      source={require("../../assets/liberta.png")}
    ></Image>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 150,
  },
});
