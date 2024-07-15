function items(fruitlist, veglist, ...args) {
    return [...fruitlist, ...args, veglist] 
}

console.log(items(["apple, banana"], "carrot", "beans", ["potatao"]));