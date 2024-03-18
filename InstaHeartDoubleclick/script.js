var con = document.querySelector("#container");
var heart = document.querySelector("i");

con.addEventListener("dblclick", () =>{
    heart.style.transform = `translate(-50%, -50%) scale(1)`;
    heart.style.opacity = 0.6;

    setTimeout(() => {
        heart.style.opacity = 0;
    }, 500)

    setTimeout(() => {
        heart.style.transform = `translate(-50%, -50%) scale(0)`
    }, 600)
})