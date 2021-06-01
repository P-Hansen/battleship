let usedCoordinates = [];
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

//gives back random location
const randomLocation = () => {
    const leagalLetter = "abcdefghij";
    const col = leagalLetter[Math.floor(Math.random() * 10)];
    const row = Math.floor(Math.random() * 10) + 1;

    return [col, row];
}