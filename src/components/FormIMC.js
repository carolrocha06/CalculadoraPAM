// Contém o formulário para entrada de dados (peso e altura) e a lógica para calcular o IMC

import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Result from "./Result";
import { useState } from "react";
import ClassificarIMC from "./ClassificarIMC";
import PesoIdeal from "./PesoIdeal";
//import { SnackBar } from '@react-native-material/core'; // Parecido com o SnackBar da atividade do ano passado

const FormIMC = () => {
  const [peso, setPeso] = useState(""); // estados são como caixinhas onde guardamos informações que podemos mudar
  const [altura, setAltura] = useState(""); // sempre que algo é alterado, essas caixinhas mudam e a tela reflete as mudancas
  const [imc, setImc] = useState(null);
  const [error, setError] = useState(""); // novo estado para mensagens de erro

  const calcularIMC = () => {
    setError("");
    // Validação mais completa
    const pesoNumerico = parseFloat(peso);
    const alturaNumerica = parseFloat(altura);
    // se o usuário digitar "abc" ou deixar vazio, parseFloat retorna NaN , e mostra um erro

    if (isNaN(pesoNumerico) || // Nan = not a number- quando tentamos fazer algo como transformar uma palavra em numero ou calculos invalidos
      isNaN(alturaNumerica) || // isNanm - verificar se o valor digitado é um número valido
      pesoNumerico <= 0 ||
      alturaNumerica <= 0) {

      setError("Por favor, insira valores válidos para peso e altura"); // para informar o erro
      setImc(null); // limpa o estado imc em caso de erro
      return;
    }

    const alturaMetros = alturaNumerica / 100;
    const imcCalculado = (pesoNumerico / (alturaMetros * alturaMetros)).toFixed(2); // arredonda para duas casas decimais
    setImc(imcCalculado);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="default" // padrao do sistema
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="default" // teclado padrao
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {/* mostra a mensagem de erro se a validacao falhar */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {imc && ( // renderiza componentes só se o imc for calculado/valido 
        <>
          <Result imc={imc} />
          <ClassificarIMC imcCalculado={imc} /> {/* Componente próprio */}
          {altura && parseFloat(altura) && (
            <PesoIdeal alturaMetros={parseFloat(altura) / 100} />)} {/*Vai passar a variavel como parametro para outro arquivo por meio da tag (com o nome do arquivo) */}
        </>
      )
      }
    </View >
  );
};

const styles = StyleSheet.create({
  // StyleSheet para estilizar cada componente de forma consistente
  formContainer: {
    flex: 1, // Melhor adaptação a diferentes tamanhos de tela
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: "white", // Dá um contraste maior
    justifyContent: 'center',
  },

  errorText: {
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "red",
  },
});

export default FormIMC;
