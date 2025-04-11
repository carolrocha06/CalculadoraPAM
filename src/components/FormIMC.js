// Contém o formulário para entrada de dados (peso e altura) e a lógica para calcular o IMC

import { View, TextInput, Button, StyleSheet } from "react-native";
import Result from "./Result";
import { useState } from "react"; 
import ClassificarIMC from "./ClassificarIMC";
import PesoIdeal from "./PesoIdeal";
//import { SnackBar } from '@react-native-material/core'; // Parecido com o SnackBar da atividade do ano passado

const FormIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const calcularIMC = () => {
    // Validação mais completa
    const pesoNumerico = parseFloat(peso);
    const alturaNumerica = parseFloat(altura);
    
    if (isNaN(pesoNumerico) || isNaN(alturaNumerica) || pesoNumerico <= 0 || alturaNumerica <= 0) {
      // Aqui você pode adicionar um SnackBar ou alerta para informar o erro
      console.warn("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    const alturaMetros = alturaNumerica / 100;
    const imcCalculado = (pesoNumerico / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);

  // Set mensagem de classificacao pelo Snackbar: 
  let classificacao = '';

  if (imcCalculado < 18.5) {
    classificacao = 'Abaixo do Peso';
  } 
  else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
    classificacao = 'Peso Normal';
  } 
  else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
    classificacao = 'Sobrepeso';
  } 
  else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
    classificacao = 'Obesidade Grau 1';
  } 
  else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
    classificacao = 'Obesidade Grau 2';
  } 
  else if (imcCalculado >= 40) {
    classificacao = 'Obesidade Grau 3';
  }
  setMensagem(`IMC: ${imcCalculado} Classificação do IMC: ${classificacao}`);
  setSnackbarVisible(true);
};

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc && <Result imc={imc} />}
      {<ClassificarIMC imcCalculado= {imc} />} {/* Componente próprio */}
      {<PesoIdeal alturaMetros={parseFloat(altura) / 100} />} {/* Passando alturaMetros */} {/*Vai passar a variavel como parametro para outro arquivo por meio da tag (com o nome do arquivo) */}

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={styles.snackbar}
      >
        {mensagem}
      </Snackbar>
    </View>
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
    borderRadius: 5,
    backgroundColor: "white", // Dá um contraste maior
  },
});

export default FormIMC;
