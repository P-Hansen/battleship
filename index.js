//Board class for player/enemy board
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
    //print function from early command line implementation
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

//player and enemy board, mapped onto tables
let playerBoard = new Board();
let enemyBoard = new Board();

//collection of possible random words player can receive
const threeWords = ["SEA", "SUB", "AFT", "BOW", "YAW", "AYE", "FIN", "OAR", "RUM", "NET"]
const threeWord = threeWords[Math.floor(Math.random() * threeWords.length)];

const fourWords = ["SHIP", "WAVE", "HELM", "HOLD", "HULL", "KEEL", "KNOT", "MAST", "MATE", "PORT", "REEF", "WAKE", "SAIL", "PORT", "AHOY", "BUOY", "DOCK", "WIND", "BAIL", "BOAT", "BOOM", "BRIG", "CRAB", "CREW", "DECK", "FISH", "FLAG", "GALE", "GAFF", "GROG", "KNOT", "MESS", "MOOR", "PIER", "RAFT", "TIDE", "SLIP", "SURF", "SWIM", "GOLD"]
const fourWord = fourWords[Math.floor(Math.random() * fourWords.length)];

const fiveWords = ["BILGE", "ABOUT", "AVAST", "BELAY", "HATCH", "SHEET", "STERN", "WINCH", "OCEAN", "AHEAD", "BARGE", "BOSUN", "SLOOP", "CARGO", "CABIN", "FLOAT", "HITCH", "COAST", "DEPTH", "DRINK", "FERRY", "FLARE", "HEAVE", "JETTY", "PLANK", "NAVAL", "WATER", "WHALE", "WHARF", "YACHT", "SHEER", "SHELL", "WRECK", "SHOAL", "SIREN", "SKIFF", "SKULL", "SWORD", "CHEST", "SHARK", "STERN"]
const fiveWord = fiveWords[Math.floor(Math.random() * fiveWords.length)];

const sixWords = ["ANCHOR", "BRIDGE", "COURSE", "GALLEY", "LEAGUE", "RUDDER", "ABOARD", "ADRIFT", "AFLOAT", "ASHORE", "BATTEN", "BEACON", "CONVOY", "CRUISE", "ENSIGN", "ISLAND", "CANNON", "MARINA", "SAILOR", "PIRATE", "VOYAGE", "SEAMAN", "PARROT"]
const sixWord = sixWords[Math.floor(Math.random() * sixWords.length)];

//passing randomized words in
$(document).ready(function() {
    userInput(playerBoard, enemyBoard, "OI", threeWord, fourWord, fiveWord, sixWord);
    randomPlacement(enemyBoard, "OI", threeWord, fourWord, fiveWord, sixWord);
});