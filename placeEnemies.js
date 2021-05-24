const randomPlacement = function(board) {
    const twoWord = "OI";
    const threeWord = "SUB";
    const fourWord = "SHIP";
    const fiveWord = "BILGE";
    const sixWord = "ANCHOR";

    const horizontalPlacement = function(word) {
        const leagalLetter = "abcdefghij";
        const randomLetter = leagalLetter[Math.floor(Math.random() * 10)];
        const randomNum = Math.floor(Math.random() * 10) + 1;
        console.log("random start:",randomLetter, randomNum);
        if ((board[randomLetter+(randomNum+word.length)] === '~') & (board[randomLetter + randomNum] === '~')) {
            console.log("good to go!");
            for(let i = 0; i < word.length; i++) {
                board[randomLetter+(randomNum+i)] = word[i];
                console.log(word[i]);
            }
        } else {
            console.log("let's try that again")
            horizontalPlacement(word);
        }
    }

    const verticalPlacement = function(word) {
        const leagalLetter = "abcdefghij";
        let randIndex = Math.floor(Math.random() * 10);
        const randomLetter = leagalLetter[randIndex];
        const randomNum = Math.floor(Math.random() * 10) + 1;
        console.log("random start:",randomLetter, randomNum);
        if ((board[leagalLetter[randIndex+word.length]+(randomNum)] === '~') & (board[randomLetter + randomNum] === '~')) {
            console.log("good to go!");
            for(let i = 0; i < word.length; i++) {
                board[leagalLetter[randIndex+i]+(randomNum)] = word[i];
                console.log(word[i]);
            }
        } else {
            console.log("let's try that again")
            verticalPlacement(word);
        }
    }
        verticalPlacement(sixWord);
        verticalPlacement(fiveWord);
        verticalPlacement(fourWord);
        verticalPlacement(threeWord);
        verticalPlacement(twoWord);
    // horizontalPlacement(sixWord);
    // horizontalPlacement(fiveWord);
    // horizontalPlacement(fourWord);
    // horizontalPlacement(threeWord);
    // horizontalPlacement(twoWord);
}

//module.exports = randomPlacement;