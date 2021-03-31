//const input = require('./input');
//const userInput = require('./clicks');

class Board {
    constructor() {
        let colNames = ['a','b','c','d','e','f','g','h','i','j'];
        let rowNames = ['1','2','3','4','5','6','7','8','9','10'];
        for (let col = 0; col < 10; col++) {
            for (let row = 0; row < 10; row++) {
                this[colNames[col] + [rowNames[row]]] = '~';
            }
        }
    }
    printBoard() {
        let colNames = ['a','b','c','d','e','f','g','h','i','j'];
        let rowNames = ['1','2','3','4','5','6','7','8','9','10'];
        let tmp = "";
        process.stdout.write("     a  b  c  d  e  f  g  h  i  j");
        for (let col = 0; col < 10; col++) {
            console.log();
            tmp = " " + rowNames[col] + "  ";
            if (col === 9) {
                tmp = " " + rowNames[col] + " ";
            }
            process.stdout.write(tmp);
            for (let row = 0; row < 10; row++) {
                tmp = " " + this[colNames[row] + [rowNames[col]]]+" ";
                process.stdout.write(tmp);
            }
        }
        console.log("\n");
    }

};

let playerBoard = new Board();
//console.log(playerBoard);
//input(playerBoard);

playerBoard["f2"] = 'S';
playerBoard["f3"] = 'H';
playerBoard["f4"] = 'I';
playerBoard["f5"] = 'P';

playerBoard["d4"] = 'S';
playerBoard["e4"] = 'A';
playerBoard["f4"] = 'I';
playerBoard["g4"] = 'L';
playerBoard["h4"] = 'O';
playerBoard["i4"] = 'R';

$(document).ready(function() {
    userInput(playerBoard);
});