// Componente próprio para calcular o peso ideal
import { Text, StyleSheet } from 'react-native';

const PesoIdeal = ({ alturaMetros }) => {
    if (!alturaMetros || isNaN(alturaMetros) || alturaMetros <= 0) {
      return null; // Não calcula o peso ideal se a altura em metros for invalida
    }

    const Minimo =  18.5 * (alturaMetros * alturaMetros)
    const Maximo =  24.9 * (alturaMetros * alturaMetros)

    return(
        <Text style={styles.CalcularPesoIdeal}> Peso Ideal Mínimo: {Minimo.toFixed(2)}kg {'\n'} 
        {' '}Peso Ideal Máximo: {Maximo.toFixed(2)}kg </Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default PesoIdeal;
