var arr = [
    {
        dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://plus.unsplash.com/premium_photo-1673734626655-0c1dc4be0e9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww"
    },

    {
        dp: "https://images.unsplash.com/photo-1565679871226-33cfa91bedae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1622923047319-304b570ac19b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1667599397812-ebaaf8a2ce6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
]

var stories= document.querySelector(".stories");
var clutter = ""
//  The second parameter in the function tells the indexes of the array
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display="block";
    document.querySelector(".full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;
    
    setTimeout(function(){
        document.querySelector(".full-screen").style.display="none";
    },3000)
})