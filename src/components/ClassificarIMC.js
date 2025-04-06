// Componente próprio para classificar o IMC 
import FormIMC from "./FormIMC";

const ClassificarIMC = ( {imcCalculado} ) => { 
    if (imcCalculado < 18.5) {
      ClassificarIMC = "Abaixo do Peso!";
    } 
    else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      ClassificarIMC = "Peso Normal!";
    } 
    else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      ClassificarIMC = "Sobrepeso!";
    } 
    else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
      ClassificarIMC = "Obesidade Grau 1!";
    } 
    else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
      ClassificarIMC = "Obesidade Grau 2!";
    } 
    else if (imcCalculado >= 40) {
      ClassificarIMC = "Obesidade Grau 3!";
    }
    return (
        <Text style={styles.classificarIMC}> Sobre a classificação do IMC: {ClassificarIMC} </Text>
    );
  };

  export default ClassificarIMC;
  //setMensagem(classificarIMC);
  //setSnackbarVisible(true);