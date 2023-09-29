const nayok = {
    name: 'santu',
    age: 36,
    gender: 'male',
    class: 10,
    house: { area: 'pollobi', number: '83/b', district: 'sylhet' },
    car: ['toyota', 'xefer', 'hundai'],
    bestFriends: [{ name: 'montu', type: 'best' }, { name: 'jantus', type: 'moderate' }],
    phone: {
        brand: 'nokia',
        model: 'j5',
        camera: 32,
        storage: {
            first: 32,
            second: 256,
            last: 1024
        }

    },
    act: function () {
        console.log('chap beshi')
    }
}
// console.log(nayok.act())
nayok.act()