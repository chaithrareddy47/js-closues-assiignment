const user = {
    name: 'javascript',
    age: 1990,
    isPresent:true
}
//looping objects and printing all
for (const key in user) {
   
      console.log(`key : ${key} and value : ${user[key]}`);  
}
