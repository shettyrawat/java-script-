//ashynchronous
//  function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(444);
//         }, 3000);
//     })
// }
// console.log("start...");

// console.log("loading...");
// let ydata = getData()
// ydata.then(() => {
//     console.log(ydata)
//     console.log("load processs....");

//     console.log("process load....");

// })

// ASYNC/AWAIT
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(444);
//         }, 3000);
//     })
// }


// FATCH API

async function getData() {
    // Simulate getting data from a server
    let  y= await fetch("shivam")

    // let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    
    // let data = await x.json()
    let dataa = await y.json()
    return dataa
    
}
async function main(){
    console.log("start...");

console.log("loading...");
let ydata = await getData()

    console.log(ydata)
    console.log("load processs....");

    console.log("process load....");

}
main()

 
