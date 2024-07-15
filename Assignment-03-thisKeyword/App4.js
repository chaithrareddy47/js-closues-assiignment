function makeUser() {
    return {
        name: 'jhon',
        ref:this // pointing window obj bcos makeuser is pointing to window obj and wwindow obj does not have any name
    }
}

let user = makeUser()
console.log(user.ref.name);

const obj = {
    name: 'doe',
    logmsg() {
        console.log(this.name);
    }
}

setTimeout(user.logmsg, 1000)