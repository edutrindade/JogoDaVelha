import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';

import styles from '../global/style';

export default function Winner() {
    const navigation = useNavigation();
    const route = useRoute();

    const { win } = route.params;

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.menuTitle}>Jogo da velha</Text>

            {
                win === '-' &&
                <Image style={{ top: 40, marginBottom: 40 }} source={require('../assets/img/velha.png')} />
            }

            {
                win !== '-' &&
                <>
                    <Text style={styles.subtitle}>Resultado final</Text>
                    <Text style={styles.winner}>Ganhador</Text>
                    <View style={styles.box}>
                        <Text style={win === 'X' ? styles.playerX : styles.playerO}>{win}</Text>
                    </View>
                </>
            }

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('menu')}
            >
                <Text style={styles.textMenuButton}>Voltar ao menu</Text>
            </TouchableOpacity>
        </View>
    );
}