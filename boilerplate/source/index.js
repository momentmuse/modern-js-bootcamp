//The REST Parameter!

const calculateAvg = (avgValue, ...numbers) => {
    //return (numOne + numTwo) / 2;
    let sum = 0;
    numbers.forEach((num) => sum += num)
    const avg =  sum / numbers.length;
    return `The average ${avgValue} is ${avg}`;
}

console.log(calculateAvg('grade', 0, 100, 88, 64))

const printTeam = (teamName, coachName, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coachName}`);
    console.log(`Players: ${players.join(', ')}`);
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')