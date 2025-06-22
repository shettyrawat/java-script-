// for loop

let a = 0;
for (p = 1; p < 50; p++) { console.log(a + p) }

// for-in loop

let object = {
    name: " shetty",
    class: " mca",
    roll: 1
}
for (const key in object) {
    const element = object[key];
    console.log(element, key)

}

// for-of loop

for (const c of "object") {
    console.log (c)
}


// /while loop

let i =0 ;
while (i<6 ){
    console.log (i)
    i++;
}


// do-while loop


let j= 10;
do {console.log(i)
    i++;
    
} while (j<6);
