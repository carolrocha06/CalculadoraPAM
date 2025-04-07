// Componente próprio para calcular o peso ideal

const CalcularPesoIdeal = ( {alturaMetros} ) => { // Valor da altura já convertido para float
    // O parametro passado é devi
    Minimo =  18.5 * (alturaMetros * alturaMetros);
    Maximo =  24.9 * (alturaMetros * alturaMetros);
    return(
        <Text style={styles.CalcularPesoIdeal}> Peso Ideal Mínimo: {Minimo} \n 
        Peso Ideal Máximo: {Maximo}</Text>
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
