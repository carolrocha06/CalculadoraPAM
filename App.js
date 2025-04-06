import { StyleSheet, View } from 'react-native'; 
// StyleSheet para estilizar cada componente de forma consistente
import Title from './components/Title';
import FormIMC from './components/FormIMC';

export default function App() {
    return (
        <View style={styles.container}>
            <Title />
            <FormIMC />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
});
