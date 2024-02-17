import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header/header'
import Balance from '../components/Balance/balance';
import Movements from '../components/movements/movements';
import Actions from '../components/Actions/actions';

export default function Home() {

  const list = [
    {
      id: 1,
      label: 'Boleto conta luz',
      value: '300,90',
      date: '17/09/2022',
      type: 0  // Despesas
    },
    {
      id: 2,
      label: 'Pix cliente X',
      value: '2500,00',
      date: '20/09/2022',
      type: 1  // Despesas
    },
    {
      id: 3,
      label: 'Salário',
      value: '7.500,00',
      date: '22/09/2022',
      type: 1  // Despesas
    },

  ]

  return (
    <View style={styles.container}>
      <Header name="Mariana ribeiro" />

      <Balance saldo="9.298,90" gastos="-527,00"/>

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}  // Os dados que serão listados
        keyExtractor={ (item) => String(item)}  // Tem que ser string. Se vier em outro formato, converte
        showsVerticalScrollIndicator={false}  // Tira a barra de rolagem
        renderItem={ ({ item }) => <Movements data={item}/> }  // Passara item por item
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
