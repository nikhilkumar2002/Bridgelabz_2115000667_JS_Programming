const getRandomNumbers = (size, min, max) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

const findSecondLargestSmallest = (numbers) => {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of numbers) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
};

const numbers = getRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbers);
const { secondLargest, secondSmallest } = findSecondLargestSmallest(numbers);
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
