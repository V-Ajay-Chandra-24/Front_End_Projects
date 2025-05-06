
var txt = document.querySelector("h5");
var btn = document.querySelector(".add");

var flag = 0;

btn.addEventListener("click", function () {
    txt.innerHTML = (flag == 0) ? "Friend" : "Stranger";
    txt.style.color = (flag == 0) ? "green" : "blueviolet";
    btn.innerHTML = (flag == 0) ? "Remove Friend" : "Add Friend";
    btn.style.backgroundColor = (flag == 0) ? "Red" : "rgb(52, 199, 52)";
    flag = (flag == 0) ? 1 : 0;
})


