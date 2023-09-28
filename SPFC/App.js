import { StyleSheet, StatusBar, Text, View} from 'react-native';
import Libertadores from './src/componentes/liberta';
import Logo from './src/componentes/logo';

export default function SPFC() {
  return (
    <View style={styles.container1 }>
      <Logo></Logo>
      <Text style={styles.titulo}>SÃO PAULO FUTEBOL CLUBE</Text>
      <Text style={styles.titulo}>6.3.3.1</Text>
      <Libertadores></Libertadores>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex:1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold'
  },
});