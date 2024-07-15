

const obj = {
    name: 'jsonData',
    age:20
    
}

const jsonString = JSON.stringify(obj)
console.log(jsonString);


const jsonDataString = `{
    "name": "abc",
    "age": 20,
    "birthdate":"1997-09-20"
}`

const obj1 = JSON.parse(jsonDataString, (key, value) => {
    console.log(key);
    return value;
})

console.log(obj1);