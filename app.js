
let nav=document.getElementById("nav");
let icon=document.getElementById("icon");
let close=document.getElementById("close");
let menu=document.getElementById("menu");

function myFunc(){
    
    if(nav.style.display==="flex"){
       nav.style.display="none";
       icon.style.display="none";
       close.style.display="none";
       menu.style.display="flex"


    }
    else{
       nav.style.display="flex";
       icon.style.display="flex";
       close.style.display="flex";
       menu.style.display="none"
    //    e.preventDefault();
    }
}