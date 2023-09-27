const phones =
    [{ model: 'samsung', price: 22000, color: 'black', storage: '32gb', camera: 16 },
    { model: 'nokia', price: 22000, color: 'black', storage: '32gb', camera: 8 },
    { model: 'oppo', price: 22000, color: 'black', storage: '32gb', camera: 32 },
    { model: 'vivo', price: 22000, color: 'black', storage: '32gb', camera: 512 },
    { model: 'xiaomi', price: 22000, color: 'black', storage: '32gb', camera: 1024 },
    { model: 'iphone', price: 22000, color: 'black', storage: '32gb', camera: 45 },
    { model: 'htc', price: 22000, color: 'black', storage: '32gb', camera: 786 }]


//  find the cheapest phone with help of Cameras----------------------


function cheapPhone(phones) {
    let cheapestPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera < cheapestPhone.camera) {
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;
}
const mySelection = cheapPhone(phones);
console.log(mySelection);


//  find the expensive phone with help of Cameras----------------------


// function expensePhone(phones) {
//     let cheapestPhone = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.camera > cheapestPhone.camera) {
//             cheapestPhone = phone;
//         }
//     }
//     return cheapestPhone;
// }
// const mySelection = expensePhone(phones);
// console.log(mySelection);