let nums = {
    a: 10,
    b: 20,
    title:'num'
}

function add(obj) {
    for ( key in obj) {
       if (typeof obj[key] === "number") {
           obj[key] *= 2;
       }
    }
}
add(nums)

console.log(nums);