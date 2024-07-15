const user = {
    firstName: 'hello',
    getName() {
        const firstName = 'hello js...!';
        return this.firstName;
    }
};

console.log(user.getName());