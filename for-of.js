// very crucial topic to solved------------------------


const shoppingCarts = [{ name: 'pant per piece 10tk', price: 10, quantity: 1 },
{ name: 'shirt per piece 50 tk', price: 10, quantity: 1 },
{ name: 'cap PeR piece 100 tk', price: 10, quantity: 1 },
{ name: 'shoe per piece 90 tk', price: 10, quantity: 1 }]

function findTheExactElement(shoppingCarts, search) {
    let arr = [];
    for (let shoppingCart of shoppingCarts) {
        if (shoppingCart.name.toLowerCase().includes(search.toLowerCase())) {
            arr.push(shoppingCart);
        }
    }
    return arr;
}
const newArray = findTheExactElement(shoppingCarts, 'per');
console.log(newArray);



