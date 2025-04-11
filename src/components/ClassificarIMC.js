// Componente próprio para classificar o IMC 
import { Text, StyleSheet } from 'react-native';

const ClassificarIMC = ({ imcCalculado, setMensagem, setSnackbarVisible }) => {
  let classificacao = '';

  if (!imcCalculado) {
    return null; // Nao tem como classificar o imc se nao foi calculado antes
  }
  if (imcCalculado < 18.5) {
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

  if (setMensagem && setSnackbarVisible) {
    setMensagem(classificacao);
    setSnackbarVisible(true);
  }

  return (
    <Text style={styles.classificacao}> Sobre a classificação do IMC: {classificacao} </Text>
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

export default ClassificarIMC;
//setMensagem(classificarIMC);
//setSnackbarVisible(true);