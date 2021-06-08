//const input = require('./input');
//const userInput = require('./clicks');
//const randomPlacement = require("./placeEnemies");

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
let enemyBoard = new Board();

const threeWords = ["SEA", "SUB", "AFT", "BOW", "YAW", "AYE"]
const threeWord = threeWords[Math.floor(Math.random() * threeWords.length)];

const fourWords = ["SHIP", "WAVE", "HELM", "HOLD", "HULL", "KEEL", "KNOT", "MAST", "MATE", "PORT", "REEF", "WAKE", "SAIL", "PORT", "AHOY", "BUOY"]
const fourWord = fourWords[Math.floor(Math.random() * fourWords.length)];

$(document).ready(function() {
    userInput(playerBoard, enemyBoard, "OI", threeWord, fourWord);
    randomPlacement(enemyBoard, "OI", threeWord, fourWord);
});