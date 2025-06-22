class Animals {
    constructor(name){
        this.name= name;
        console.log("object is created....")
    }
eats(){
    console.log("yeyy me kha rha" )
}
jumps(){
    console.log("yeyy me kood rha hun")
}
}

let a = new Animals("buntyy")
console.log(a)
class Loin extends Animals{
    constructor(name){
        super(name)
        this.name=name ;
        console.log("object is created and he is lion...")

    }
    // ṃethod overiding
    eats(){
        super.eats()
        console.log("tooo yummy")
        // use super keyword
    }

}
let l =new Loin("tommy")
console.log(l) 
