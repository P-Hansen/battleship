
//returns the row and col of the next enemy shot
const enemyFireLocation = () => {
    const leagalLetter = "abcdefghij";
    const col = leagalLetter[Math.floor(Math.random() * 10)];
    const row = Math.floor(Math.random() * 10) + 1;

    console.log("fire at", col, row);

    return [col, row];
}