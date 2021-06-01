let usedCoordinates = [];
let nextTargets = [];
//returns the row and col of the next enemy shot
const enemyFireLocation = () => {
    let flag = true;
    let col = '';
    let row = '';
    //checks random location, and if already fired at picks a new random one
    while(flag) {
        flag = false;
        [col, row] = randomLocation();
        for (const element of usedCoordinates) {
            if (checker(element, [col, row])) {
                flag = true;
            };
        };
    };
    
    usedCoordinates.push([col,row]);
    console.log("fire at", usedCoordinates);
    return [col, row];
};

//compares two arrays to see if they are the same
const checker = ([a,b], [c,d]) => {
    if (a === c & b === d) {
        return true;
    } else {
        return false;
    };
};

//gives back next target from array, or else random location
const randomLocation = () => {
    let col = '';
    let row = '';
    if (nextTargets.length === 0) {
        const leagalLetter = "abcdefghij";
        col = leagalLetter[Math.floor(Math.random() * 10)];
        row = Math.floor(Math.random() * 10) + 1;
    } else {
        [col, row] = nextTargets.pop();
    };

    return [col, row];
}

//adds adjacent squars to next targets array on hit
const addTargets = ([col, row]) => {
    const leagalLetter = "abcdefghij";
    const index = leagalLetter.indexOf(col);
    if (index+1 <= 9) {
        nextTargets.push([leagalLetter[index+1], row]);
    };
    if (index-1 >= 0) {
        nextTargets.push([leagalLetter[index-1], row]);
    };
    if (row+1 <= 10) {
        nextTargets.push([col, row+1]);
    };
    if (row-1 >= 1) {
        nextTargets.push([col, row-1]);
    };
}