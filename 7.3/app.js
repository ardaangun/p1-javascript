let txt = document.getElementById("txt")

let count = 0;


const counter = function() {
    count += 1;
    txt.innerText = count + "x";
    if (count == 10) {
        count = -1;
    }
}