// 1
// let shetty = document.getElementsByClassName("box")
// console.log(shetty)
// shetty[2].style.backgroundColor ="red"

// 2
// document.getElementById("shetty").style.backgroundColor = "yellow"

// 3 
// for one 
// document.querySelector(".box").style.backgroundColor = "pink"
// for all
document.querySelectorAll(".box").forEach(e=>{
    // console.log(e)
    e.style.backgroundColor = "blue";
}

)