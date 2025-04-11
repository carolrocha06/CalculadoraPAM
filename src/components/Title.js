// Arquivo responsável por exibir o título da aplicação 
import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={styles.titulo}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#333',
        marginVertical: 24, // Dá uma aparencia melhor
    },
});

export default Title;