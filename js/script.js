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