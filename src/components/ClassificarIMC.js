// Componente próprio para classificar o IMC 
import { Text, StyleSheet } from 'react-native';

const ClassificarIMC = ({ imcCalculado, setError }) => {
  if (!imcCalculado) {
    return null; // Nao tem como classificar o imc se nao foi calculado antes
  }

  let classificacao = '';
  
  if (imcCalculado < 18.5) { // Classficando o imc de acordo com os valores e suas respostas armazenadas na variavel
    classificacao = "Abaixo do Peso!";
  }
  else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
    classificacao = "Peso Normal!";
  }
  else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
    classificacao = "Sobrepeso!";
  }
  else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
    classificacao = "Obesidade Grau 1!";
  }
  else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
    classificacao = "Obesidade Grau 2!";
  }
  else if (imcCalculado >= 40) {
    classificacao = "Obesidade Grau 3!";
  }

  return (
    <Text style={classificacao}> {'\n'} Sobre a Classificação do IMC: {classificacao} </Text>
  );
};

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default ClassificarIMC;
