
const users = {
    name: 'abc',
    itemName: function () {
        return this
    },
    itemName2: () => {
        return this
    }
}
console.log(users);
console.log(users.itemName());
console.log(users.itemName2());