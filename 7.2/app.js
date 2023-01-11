let product = prompt("Hoeveel kost het product dat je wilt kopen?");
let budget = 100;


let par = document.getElementById("para");

if(budget > product) {
    par.innerText = "U heeft genoeg geld!";
    par.style.color = "green";

} else {
    par.innerText = "U heeft te weinig geld!";
    par.style.color = "red";
}