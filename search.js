const name = "Mustafizur Rahman is a good boy";
const searchString = 'gOod';
const searchingLowerCase = searchString.toLowerCase();
const nameLowerCase = name.toLowerCase();
const doesExist = name.includes(searchingLowerCase);
// console.log(doesExist);
const doesExistOneLine = name.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);
// const doesExist = name.includes('Rahman');

//----------------------------------
const value = name.indexOf('good');
// console.log(value);
// console.log(name.length);

if (name.indexOf('boy') !== -1) {
    console.log('avail in the list');
}
else {
    console.log('not avail in the list');
}

// startswith
console.log(name.startsWith('Mus'));

// endswith

console.log(name.endsWith('boy'));