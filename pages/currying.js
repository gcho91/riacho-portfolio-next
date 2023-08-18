function sum(a, b, c) {
    return a + b + c;
}
function sumCurry(a) {
    return (b) => {
        return (c) => {
            return sum(a,b,c )
        }
    }
}


// console.log(sumCurry(1)(2)(3))


function getUserProperty (userName, property) {
    // ...
}

function getUserPropertyCurried(userName) {
    return (property) => {
        return getUserProperty(userName, property);
    }
}

// example from: https://www.youtube.com/watch?v=xr-BVWXDYeA



// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
// ******
// do exercises here

// Convert f(a, b) into f(a)(b).



function f(a) {
    return (b) => {
         return "Works"
    }
}
// console.log(f(1)(2), 'testing curry')
// console.log(f(1), 'no curry')

const add = (a, b, c)=>{
    return a+ b + c
}

const addCurried = (a) => {
    return (b) => {
        return c => {
            return a + b + c;
            // return add(a,b,c)
        }
    }
}

console.log(addCurried(1)(2)(3), "adding curry")

// Evaluate(”sum”)(2)(4) ⇒ 2+4 = 6 on basis of input given to first param

function sumFn(operation) {
    return (a) => {
        return (b) => {
            if (operation == "sum") {
                return a + b;
            } else if (operation == "multiply") return a * b;
            else return "Invalid op selected"
        }
    }
}

console.log(sumFn("sum")(1)(2))


function testAdd(a) {
    return (b) => {
        return a + b;
    }
}

// testAdd(1)(2)




export default function Test() {
    // console.log('hi')
}

