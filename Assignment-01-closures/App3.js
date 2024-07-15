//

let count = 0;
function printCount() {
    if (count === 0) {
        // here shadowing is happend count variables shadowed out count means making it tempoarraily unavailable
        let count = 1;
        console.log(count);
    }
    // it logs 0 only bcos of block scope 
    // variables declared in block cannot access outside the block
    console.log(count);
}

printCount()