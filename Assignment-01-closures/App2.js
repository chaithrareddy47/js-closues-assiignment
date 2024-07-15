// closure scope chain

//global scope
var outer = 10;

function sum(a) {

    return function (b) {
        //outer functional scope
        return function (c) {
            //outer functional scoepe
            return function (d) {
                //local scope have access to all other scopes 
                return a + b + c + d  + outer;
            }
        }
    }
}

console.log(sum(10)(1)(2)(3));


