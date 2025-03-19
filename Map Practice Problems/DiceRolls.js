const rollDie = () => Math.floor(Math.random() * 6) + 1;

const simulateDiceRolls = () => {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie();
        rollCounts[roll]++;
        
        if (rollCounts[roll] === maxRolls) {
            maxReached = true;
        }
    }
    
    let maxNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    console.log("Dice Roll Counts:", rollCounts);
    console.log("Number that reached maximum times:", maxNumber);
    console.log("Number that reached minimum times:", minNumber);
};

simulateDiceRolls();
