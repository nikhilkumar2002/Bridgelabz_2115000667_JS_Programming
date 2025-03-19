const generateBirthMonths = (numIndividuals) => {
    let birthMonths = {};
    
    for (let i = 1; i <= 12; i++) {
        birthMonths[i] = [];
    }
    
    for (let i = 1; i <= numIndividuals; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthMonths[month].push(`Person${i}`);
    }
    
    return birthMonths;
};

const birthMonthData = generateBirthMonths(50);
console.log("Individuals grouped by birth month:", birthMonthData);
