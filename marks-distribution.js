// first hundred 100 tk (1-100)
// second hundred 90 tk (101-200)
// rest hundred 70 tk (200+)

const first100Rate = 100;
const second100Rate = 90;
const restRate = 70;
function totalDistributionRate(number) {
    if (number <= 100) {
        const first100value = number * first100Rate;
        return first100value;
    }
    else if (number <= 200) {
        const first100value = 100 * first100Rate;
        const restValue = (number - 100) * second100Rate;
        const second100Value = first100value + restValue;
        return second100Value;
    }
    else {
        const first100value = 100 * first100Rate;
        const second100Value = 100 * second100Rate;
        const restValue = (number - 200) * restRate;
        const totalRestValue = first100value + second100Value + restValue;
        return totalRestValue;
    }
}
const discountValueTotal = totalDistributionRate(120);
console.log(discountValueTotal);