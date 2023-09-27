const names = ['hridoy', 'ahsan', 'mostofa', 'samrat', 'pappu', 'omit', 'mostofa', 'ahsan', 'hridoy', 'samrat', 'mostofa', 'murad'];
function duplicateItems(names) {
    const newNames = [];
    for (i = 0; i < names.length; i++) {
        const name = names[i];
        if (newNames.includes(name) === false) {
            newNames.push(name);
        }
    }
    return newNames;
}
const newElements = duplicateItems(names);
console.log(newElements);