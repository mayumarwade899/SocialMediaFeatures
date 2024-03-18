var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", (dot) => {
    crsr.style.left = dot.x + "px"
    crsr.style.top = dot.y + "px"
})