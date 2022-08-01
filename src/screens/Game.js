import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import styles from '../global/style';

export default function Game() {
    const navigation = useNavigation();
    const route = useRoute();
    const { player, board } = route.params;
    const [gameBoard, setGameBoard] = useState(board);
    const [currentPlayer, setCurrentPlayer] = useState(player);
    const [remainingMoves, setRemainingMoves] = useState(9);

    function play(row, column) {
        gameBoard[row][column] = currentPlayer;
        setGameBoard([...gameBoard]);

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

        checkWinner(gameBoard, row, column);
    }

    function checkWinner(gameBoard, row, column) {
        // Verifica linhas
        if (gameBoard[row][0] !== '' &&
            gameBoard[row][0] === gameBoard[row][1] &&
            gameBoard[row][1] === gameBoard[row][2]
        ) {
            return finishGame(gameBoard[row][0]);
        }

        // Verifica colunas
        if (gameBoard[0][column] !== '' &&
            gameBoard[0][column] === gameBoard[1][column] &&
            gameBoard[1][column] === gameBoard[2][column]
        ) {
            return finishGame(gameBoard[0][column]);
        }

        // Diagonal principal
        if (gameBoard[0][0] !== '' &&
            gameBoard[0][0] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[2][2]
        ) {
            return finishGame(gameBoard[0][0]);
        }

        // Diagonal secundária
        if (gameBoard[0][2] !== '' &&
            gameBoard[0][2] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[2][0]
        ) {
            return finishGame(gameBoard[0][2]);
        }

        // Jogo continua sem ganhador
        setRemainingMoves(remainingMoves - 1);
    }

    function finishGame(player) {
        navigation.navigate('winner', { win: player });
    }

    useEffect(() => {
        // Deu velha
        if (remainingMoves === 0) {
            navigation.navigate('winner', { win: '-' });
        }
    }, [remainingMoves])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.gameTitle}>Jogo da velha</Text>
            {
                board.map((row, nRow) => {
                    return (
                        <View key={nRow} style={styles.inlineItems}>
                            {
                                row.map((column, nColumn) => {
                                    return (
                                        <TouchableOpacity
                                            key={nColumn}
                                            style={styles.box}
                                            onPress={() => play(nRow, nColumn)}
                                            disabled={column !== ''}
                                        >
                                            <Text style={column === 'X' ? styles.playerX : styles.playerO}>{column}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('menu')}
            >
                <Text style={styles.textMenuButton}>Volta ao menu</Text>
            </TouchableOpacity>
        </View>
    );
}