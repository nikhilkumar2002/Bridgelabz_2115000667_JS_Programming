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

const findSecondLargestSmallestSorted = (numbers) => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    return {
        secondSmallest: sortedNumbers[1],
        secondLargest: sortedNumbers[sortedNumbers.length - 2]
    };
};

const numbers = getRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbers);

const { secondLargest, secondSmallest } = findSecondLargestSmallest(numbers);
console.log("Without Sorting - Second Largest:", secondLargest);
console.log("Without Sorting - Second Smallest:", secondSmallest);

const sortedResults = findSecondLargestSmallestSorted(numbers);
console.log("With Sorting - Second Largest:", sortedResults.secondLargest);
console.log("With Sorting - Second Smallest:", sortedResults.secondSmallest);
