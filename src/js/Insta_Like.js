
var con= document.querySelector(".container");
var heart= document.querySelector("i");


con.addEventListener("dblclick",function(){
    console.log("hello")
    heart.style.transform = "translate(-50%,-50%) scale(1)"
    heart.style.opacity = 0.8;
    
    setTimeout(function(){
        heart.style.opacity = 0;
    },550)

    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0)"
    },550)

})
