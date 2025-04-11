import { StyleSheet, View } from 'react-native';
// StyleSheet para estilizar cada componente de forma consistente
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <Title />
                <FormIMC />
            </View>
        </PaperProvider>
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

