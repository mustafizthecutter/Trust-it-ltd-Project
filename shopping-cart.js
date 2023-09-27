const shoppingCart = [{ name: 'pant', price: 339 },
{ name: 'shirt', price: 200 },
{ name: 'cap', price: 456 },
{ name: 'shoe', price: 139 }]
function shoppingItems(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // console.log(product);
        sum = sum + product.price;
    }
    return sum;
}
const shoppingResult = shoppingItems(shoppingCart);
console.log(shoppingResult);