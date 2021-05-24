const randomPlacement = function(board) {
    const twoWord = "OI";
    const threeWord = "SUB";
    const fourWord = "SHIP";
    const fiveWord = "BILGE";
    const sixWord = "ANCHOR";

    //check if the space for the word is legal
    const spaceCheck = function(word, space) {
        if (word.length != space.length) return false;
        for(let i = 0; i <= word.length; i++) {
            if (space[i] != '~' & space[i] != word[i]) {
                return false;
            }
        }
        return true;
    }

    const verticalPlacement = function(word) {
        const leagalLetter = "abcdefghij";
        const randomLetter = leagalLetter[Math.floor(Math.random() * 10)];
        const randomNum = Math.floor(Math.random() * 10) + 1;
        console.log("random start:",randomLetter, randomNum);
        let space = "";
        for(let i = 0; i < word.length; i++) {
            space += (board[randomLetter+(randomNum+i)]);
        }
        // if ((board[randomLetter+(randomNum+word.length)] === '~') & (board[randomLetter + randomNum] === '~')) {
        if (spaceCheck(word, space)) {
            console.log("good to go!");
            for(let i = 0; i < word.length; i++) {
                board[randomLetter+(randomNum+i)] = word[i];
                console.log(word[i]);
            }
        } else {
            console.log("let's try that again")
            verticalPlacement(word);
        }
    }

    const horizontalPlacement = function(word) {
        const leagalLetter = "abcdefghij";
        let randIndex = Math.floor(Math.random() * 10);
        const randomLetter = leagalLetter[randIndex];
        const randomNum = Math.floor(Math.random() * 10) + 1;
        console.log("random start:",randomLetter, randomNum);
        let space = "";
        for(let i = 0; i < word.length; i++) {
            space += board[leagalLetter[randIndex+i]+(randomNum)];
        }
        // if ((board[leagalLetter[randIndex+word.length]+(randomNum)] === '~') & (board[randomLetter + randomNum] === '~')) {
        if (spaceCheck(word, space)) {
            console.log("good to go!");
            for(let i = 0; i < word.length; i++) {
                board[leagalLetter[randIndex+i]+(randomNum)] = word[i];
                console.log(word[i]);
            }
        } else {
            console.log("let's try that again")
            horizontalPlacement(word);
        }
    }
    //randomly choose vertical or horizontal placement
    Math.random() < 0.5 ? verticalPlacement(sixWord) : horizontalPlacement(sixWord);
    Math.random() < 0.5 ? verticalPlacement(fiveWord) : horizontalPlacement(fiveWord);
    Math.random() < 0.5 ? verticalPlacement(fourWord) : horizontalPlacement(fourWord);
    Math.random() < 0.5 ? verticalPlacement(threeWord) : horizontalPlacement(threeWord);
    Math.random() < 0.5 ? verticalPlacement(twoWord) : horizontalPlacement(twoWord);
}

//module.exports = randomPlacement;