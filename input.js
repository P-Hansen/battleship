//old code from command line interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
const input = function (board) {
    board.printBoard();
    readline.question(`Your move `, (move) => {
        if (board[move] === undefined) {
            console.log("Out of bounds!");
            readline.close();
        } else {
        board[move] = "X";
        board.printBoard();
        console.log(`Fired at space ${move}!`)
        readline.close();
        };
    });
};

module.exports = input;