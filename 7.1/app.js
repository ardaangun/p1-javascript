let budget = 100;
let product = 60;

let par = document.getElementById("para");

if(budget >= product){
    par.innerText = "U heeft genoeg geld!";
    par.style.color = "green";
} else {
    par.innerText = "Helaas, te weinig geld."
    par.style.color = "red";
}