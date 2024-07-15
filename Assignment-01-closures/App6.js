function counter() {
    let _counter = 0

    function add(increment) {
         increment++
    }

    function retrive() {
        return _counter
    }

    return {
        add, retrive
    }

}
let privateCounter = counter();
console.log(privateCounter);