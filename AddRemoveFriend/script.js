var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 1;
// var removeFrnd = document.querySelector("#remove");

btn.addEventListener("click", function(){
   if(check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "#dadada";
    btn.style.color = "#111";
    check = 1;
   }
   else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "cadetblue";
    btn.style.color = "#fff";
    check = 0;
   }
});

// removeFrnd.addEventListener("click", () =>{
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red";
// })