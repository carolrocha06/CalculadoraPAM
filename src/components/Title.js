// Arquivo responsável por exibir o título da aplicação 
import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={styles.titulo}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
    },
});

export default Title;