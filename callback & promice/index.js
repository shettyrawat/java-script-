// asynchronous

// console.log(1);
// setTimeout( ()=>{
// console.log(2)}, 2000)
// console.log(3);

// callback
// function getdata( dataId){
//     console.log("data", dataId)
// }

// getdata(54);

// with setTimeout
// function getdata( dataId){ 
//     setTimeout(()=>{
//  console.log("data",dataId)
//     },2000)

// }
// getdata(65656);


// function getdata(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }
// // function callback
// // getdata(1,()=>{
// //     getdata(2)

// // callback hell or nexted callback
// getdata(1, () => {
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4)
//         })
//     })
// })

// PROMISE

console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random(); // Step 1

    if (a < 0.5) {         // Step 2
        reject("No random number was not supporting you");
    } else {
        setTimeout(() => { // Step 3
            // console.log("Yes I am done");
            resolve("Harry");
        }, 3000);          // Step 4
    }
});

prom1.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err)
})



