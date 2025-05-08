var body = document.querySelector(".main")
var cursor = document.querySelector(".cursor")


// when we pass a variable in the function when using mousemove the 
// variable will store the details of mouse movement
body.addEventListener("mousemove",function(dets){
    // console.log(dets.x)
    // console.log(dets.y)
    cursor.style.left= dets.x+"px";
    cursor.style.top= dets.y+"px";
})
