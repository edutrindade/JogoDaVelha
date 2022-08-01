import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },

    subtitle: {
        fontSize: 20,
        color: '#555',
        marginTop: 20,
        marginBottom: 20,
    },

    inlineItems: {
        flexDirection: 'row',
    },

    box: {
        width: 80,
        height: 80,
        backgroundColor: "#43425d",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },

    playerX: {
        fontSize: 40,
        color: '#F7D917',
    },

    playerO: {
        fontSize: 40,
        color: '#FC0FC0',
    },

    menuButton: {
        marginTop: 20,
    },

    textMenuButton: {
        fontSize: 20,
        color: '#4e6fe4',
    },
    winner: {
        fontSize: 30,
        margin: 15,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default styles;