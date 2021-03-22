const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
const input = function (board) {
    board.printBoard();
    readline.question(`Your move `, (move) => {
        board[move] = "X";
        board.printBoard();
        console.log(`Hi ${move}!`)
        readline.close();
    });
};

module.exports = input;