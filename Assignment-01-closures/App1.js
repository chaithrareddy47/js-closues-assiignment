// closures

//global scope
function func() {
    //innerscope
    var name = 'javascript'

    // this inner function is closure whch has acces to the ouet variables 
    return function displayName(desc) {
        console.log(`${name} ${desc}`);
    }


}
// myfunc is a function which is returndd from outr func which no longer exist which is called closer 
var myFunc = func()
myFunc('is fun')

// func()(); // we can also call like this bcoz func returning another func