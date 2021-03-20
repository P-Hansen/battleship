 const board = {};

function Setup() {
    let colNames = ['a','b','c','d','e','f','g','h','i','j'];
    let rowNames = ['1','2','3','4','5','6','7','8','9','10'];
    for (let col = 0; col < 10; col++) {
        for (let row = 0; row < 10; row++) {
            board[colNames[col]+[rowNames[row]]] = 0;
        }
    }
}

const printBoard = () => {
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
            tmp = " " +board[colNames[col]+[rowNames[row]]]+" ";
            process.stdout.write(tmp);
        }
    }
    console.log("\n");
}

Setup();
// console.log(Object.keys(board));
printBoard();