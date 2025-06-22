let button = document.getElementById("btn") ;

// List of all mouse events More actions
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click",()=>{ 
    //    here click is an event
    document.querySelector(".box").innerHTML =
"<b>yeyy you were clicked enjoy!</b>"}

)