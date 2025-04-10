// Exibe o resultado do IMC calculado
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Result = ({ imc }) => {
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        marginVertical: 10,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold', // texto em negrito
    },
});

export default Result;