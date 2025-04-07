// Contém o formulário para entrada de dados (peso e altura) e a lógica para calcular o IMC

import { View, TextInput, Button, StyleSheet } from "react-native";
import Result from "./Result";
import ClassificarIMC from "./ClassificarIMC";
import PesoIdeal from "./PesoIdeal";
//import { SnackBar } from "react-native-paper"; // Parecido com o SnackBar da atividade do ano passado

const FormIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = ( parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
    }
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
      {<ClassificarIMC imcCalculado= {imcCalculado} />} // Componente próprio
      {<PesoIdeal alturaMetros= {alturaMetros} />} // Vai passar a variavel como parametro para outro arquivo por meio da tag (com o nome do arquivo) 
    </View>
  );
};

const styles = StyleSheet.create({
  // StyleSheet para estilizar cada componente de forma consistente
  formContainer: {
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
  },
});

export default FormIMC;
