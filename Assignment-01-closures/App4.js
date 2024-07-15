function addNum(x) {
    return function (y) {
        console.log(x + y);
    }
    
}

let totalSum = addNum(6)
totalSum(10)
totalSum(21)