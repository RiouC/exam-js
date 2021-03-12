
const podium = (numbers) => {
    numbers.sort((a, b) => b - a);
    console.log(`1st: ${numbers[0]}`);
    console.log(`2nd: ${numbers[1]}`);
    console.log(`3rd: ${numbers[2]}`);
}


podium([1,2,3,4,5]);
podium([1,2,3,14,5]);
podium([1,2,15,4,19]);
podium([1,20,3,18,5]);
