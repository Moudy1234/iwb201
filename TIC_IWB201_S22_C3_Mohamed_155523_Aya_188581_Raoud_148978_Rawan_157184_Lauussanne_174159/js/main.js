let firstName = document.querySelector(".first-name");
let subBtn = document.querySelector(".sub")
let tableBody = document.querySelector(".tbody")


function checkName(input) {
    var r = (/[^a-zA-Z]*$/);
    input.value = input.value.replace(r, "");}

// subBtn.onclick = ()=>{
//     tableBody.innerHTML += first-Name.value
// }
