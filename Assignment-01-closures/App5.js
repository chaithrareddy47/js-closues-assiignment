// adding numbers v

function addNumbers() {
    let a = []
    for (let i = 0; i < 5; i++) {
        a.push(function () {
            console.log(i);
        })
        
    }
    return a
}


let num = addNumbers()
console.log(num[1]());