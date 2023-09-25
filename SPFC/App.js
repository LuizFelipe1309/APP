import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Logo from './src/componentes/logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo></Logo>;
      <Text style={styles.titulo}>SÃO PAULO FUTEBOL CLUBE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold'
  },
});