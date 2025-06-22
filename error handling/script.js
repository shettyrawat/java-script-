let a = prompt("enter a first number ")
let b = prompt("enter a second number")
// throw error
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)  
// console.log("the sum is ", sum)


// error handle
// try {
//     console.log("sum is ", sum*x)
// } catch (error) {
//     console.log("bhn ke lnd theek se input de")
// }

function main (){
try {
    console.log("sum is ", sum)
    return true;
} catch (error) {
    console.log(" theek se input de")
    return false;
}
//  funally mainlly use for main function in js
 finally{
    console.log("connection loss")
 
}
}
let c = main()