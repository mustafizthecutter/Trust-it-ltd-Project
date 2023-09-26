// example of Fibonacci Series:
const fibo = [0, 1];
for (i = 2; i <= 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
// console.log(fibo);


// More Js Concepts:
const friends = [13, 85, 26, 46, 17];
console.log(Array.isArray(friends));
console.log(friends.includes(50));
if (friends.indexOf(67) !== -1) {
    console.log('yes');
}
else {
    console.log('no');
}
const newFriends = [64, 20, 83, 67];
console.log(friends.concat(newFriends));
