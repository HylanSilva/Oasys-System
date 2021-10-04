function insert(num) {
    var numero = document.getElementById('bar-code-view').innerHTML;
    document.getElementById('bar-code-view').innerHTML = numero + num;
}
function clean() {
    document.getElementById('bar-code-view').innerHTML = "";
}
function apagar() {
    var barcode = document.getElementById('bar-code-view').innerHTML;
    document.getElementById('bar-code-view').innerHTML = barcode.substring(0, barcode.length - 1)
}

let input = document.querySelector("#bar-code-view");
let button = document.querySelector("#btn-devolver");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector("#bar-code-view").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}