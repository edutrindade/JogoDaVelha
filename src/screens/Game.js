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
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        console.log('Game board initialized:', gameBoard);
        console.log('Current player initialized:', currentPlayer);
    }, []);

    useEffect(() => {
        if (currentPlayer === 'O' && !winner) {
            const [i, j] = findBestMove(gameBoard, 'O', 'X');
            if (i !== null && j !== null) {
                play(i, j, 'O');
            }
        }
    }, [currentPlayer]);

    function play(row, column, player = currentPlayer) {
        if (gameBoard[row][column] === '' && !winner) {
            const newBoard = gameBoard.map((r, i) => r.map((c, j) => (i === row && j === column ? player : c)));
            setGameBoard(newBoard);
            const gameWinner = checkWinner(newBoard, row, column);
            if (gameWinner) {
                finishGame(gameWinner);
            } else {
                setRemainingMoves(remainingMoves - 1);
                setCurrentPlayer(player === 'X' ? 'O' : 'X');
            }
        }
    }

    function checkWinner(board, row, column) {
        const lines = [
            [board[row][0], board[row][1], board[row][2]],
            [board[0][column], board[1][column], board[2][column]],
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]],
        ];

        for (let line of lines) {
            if (line[0] !== '' && line[0] === line[1] && line[1] === line[2]) {
                return line[0];
            }
        }

        if (remainingMoves - 1 === 0) {
            return '-';
        }
        return null;
    }

    function finishGame(player) {
        console.log('Game finished. Winner:', player);
        setWinner(player);
        navigation.navigate('winner', { win: player });
    }

    function minimax(board, depth, isMaximizing, player, opponent) {
        const winner = checkWinnerForMinimax(board);
        if (winner === player) return 10 - depth;
        if (winner === opponent) return depth - 10;
        if (board.flat().every((cell) => cell !== '')) return 0; // Empate

        if (isMaximizing) {
            let maxEval = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === '') {
                        board[i][j] = player;
                        const evaluation = minimax(board, depth + 1, false, player, opponent);
                        board[i][j] = '';
                        maxEval = Math.max(maxEval, evaluation);
                    }
                }
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === '') {
                        board[i][j] = opponent;
                        const evaluation = minimax(board, depth + 1, true, player, opponent);
                        board[i][j] = '';
                        minEval = Math.min(minEval, evaluation);
                    }
                }
            }
            return minEval;
        }
    }

    function findBestMove(board, player, opponent) {
        let bestMove = null;
        let bestValue = -Infinity;
        const possibleMoves = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = player;
                    const moveValue = minimax(board, 0, false, player, opponent);
                    board[i][j] = '';
                    if (moveValue > bestValue) {
                        bestMove = [i, j];
                        bestValue = moveValue;
                    }
                    possibleMoves.push({ move: [i, j], value: moveValue });
                }
            }
        }

        // Fator de aleatoriedade
        const randomFactor = 0.25; // Quanto maior, mais burro a IA fica
        if (Math.random() < randomFactor) {
            const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            return randomMove.move;
        }

        return bestMove || [null, null];
    }

    function checkWinnerForMinimax(board) {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
            }
            if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return board[0][i];
            }
        }
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2];
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text style={styles.gameTitle}>Jogo da velha</Text>
            {gameBoard.map((row, nRow) => {
                return (
                    <View key={nRow} style={styles.inlineItems}>
                        {row.map((column, nColumn) => {
                            return (
                                <TouchableOpacity
                                    key={nColumn}
                                    style={styles.box}
                                    onPress={() => play(nRow, nColumn)}
                                    disabled={column !== '' || currentPlayer === 'O' || winner !== null}
                                >
                                    <Text style={column === 'X' ? styles.playerX : styles.playerO}>{column}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                );
            })}
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('menu')}>
                <Text style={styles.textMenuButton}>Volta ao menu</Text>
            </TouchableOpacity>
        </View>
    );
}
