const shoppingCart = [{ name: 'pant', price: 10, quantity: 1 },
{ name: 'shirt', price: 10, quantity: 1 },
{ name: 'cap', price: 10, quantity: 1 },
{ name: 'shoe', price: 10, quantity: 1 }]
function shoppingItems(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let productPrice = product.price * product.quantity;
        sum = sum + productPrice;
        // sum = sum + (product.price * product.quantity);  ---------------second way
    }
    return sum;
}
const shoppingResult = shoppingItems(shoppingCart);
console.log(shoppingResult);