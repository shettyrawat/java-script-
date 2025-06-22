  let div = document.createElement("div");
            div.innerHTML = "my name is <b>shettyrwt</b>"
            div.setAttribute("class", "created");
            document.querySelector(".container").append(div);
// document.querySelector(".created").style.backgroundColor = "pink"
            
     let cont = document.querySelector(".container")
     cont.insertAdjacentHTML("afterend","hi my name is sippa")

    //  Node.remove()

   
    
    console.log(document.querySelector(".box").remove())             
    