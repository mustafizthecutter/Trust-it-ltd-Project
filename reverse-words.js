function reverseWords(text) {
    const words = text.split(' ');
    // console.log(words);
    const result = [];
    for (i = words.length - 1; i >= 0; i--) {
        let element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const text = 'Mustafiz is a good boy';
const result2 = reverseWords(text);
console.log(result2);

















// for (i = words.length; i >= 0; i--) {
//     let element = words[i];
// }
// return element;